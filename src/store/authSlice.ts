import { URLS } from '@constants'
import type { PayloadAction} from '@reduxjs/toolkit'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Config from 'react-native-config'

interface AuthState {
  requestToken: string | null
  sessionId: string | null
  username: string | null
  isLoggedIn: boolean
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  requestToken: null,
  sessionId: null,
  username: null,
  isLoggedIn: false,
  loading: false,
  error: null,
}

export const fetchRequestToken = createAsyncThunk(
  'auth/fetchRequestToken',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `${URLS.DB}authentication/token/new?api_key=${Config.TMDB_API_KEY}`
      )
      const data = await res.json()
      if (!res.ok) {
        return rejectWithValue(data.status_message || 'Error fetching token')
      }
      return data.request_token as string
    } catch (err) {
      return rejectWithValue((err as Error).message)
    }
  }
)

export const createSession = createAsyncThunk<
  string,
  { username: string; password: string; requestToken: string },
  { rejectValue: string }
>('auth/createSession', async ({ username, password, requestToken }, { rejectWithValue }) => {
  try {
    const loginRes = await fetch(
      `${URLS.DB}authentication/token/validate_with_login?api_key=${Config.TMDB_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          request_token: requestToken,
        }),
      }
    )
    const loginData = await loginRes.json()
    if (!loginRes.ok) return rejectWithValue(loginData.status_message || 'Login failed')

    const sessionRes = await fetch(
      `${URLS.DB}authentication/session/new?api_key=${Config.TMDB_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ request_token: requestToken }),
      }
    )
    const sessionData = await sessionRes.json()
    if (!sessionRes.ok) return rejectWithValue(sessionData.status_message || 'Session failed')

    return sessionData.session_id as string
  } catch (err) {
    return rejectWithValue((err as Error).message)
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRequestToken(state, action: PayloadAction<string>) {
      state.requestToken = action.payload
    },
    logout: (state) => {
      state.requestToken = null
      state.sessionId = null
      state.username = null
      state.isLoggedIn = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRequestToken.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchRequestToken.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false
        state.requestToken = action.payload
      })
      .addCase(fetchRequestToken.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

      .addCase(createSession.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(createSession.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false
        state.sessionId = action.payload
        state.isLoggedIn = true
      })
      .addCase(createSession.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { setRequestToken, logout } = authSlice.actions
export default authSlice.reducer
