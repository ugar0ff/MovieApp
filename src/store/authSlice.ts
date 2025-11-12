import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getRequestTokenApi, createSessionApi } from '@api/authApi'

type AuthState = {
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

export const fetchRequestToken = createAsyncThunk<string, void, { rejectValue: string }>(
  'auth/fetchRequestToken',
  async (_, { rejectWithValue }) => {
    try {
      const token = await getRequestTokenApi()
      return token
    } catch (err) {
      return rejectWithValue((err as Error).message)
    }
  },
)

export const createSession = createAsyncThunk<
  string,
  { username: string; password: string; requestToken: string },
  { rejectValue: string }
>('auth/createSession', async ({ username, password, requestToken }, { rejectWithValue }) => {
  try {
    const sessionId = await createSessionApi(username, password, requestToken)
    return sessionId
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
    logout(state) {
      state.requestToken = null
      state.sessionId = null
      state.username = null
      state.isLoggedIn = false
      state.error = null
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchRequestToken.pending, state => {
      state.loading = true
      state.error = null
    })
    builder.addCase(fetchRequestToken.fulfilled, (state, action: PayloadAction<string>) => {
      state.loading = false
      state.requestToken = action.payload
    })
    builder.addCase(fetchRequestToken.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload ?? 'Unknown error'
    })

    builder.addCase(createSession.pending, state => {
      state.loading = true
      state.error = null
    })
    builder.addCase(createSession.fulfilled, (state, action: PayloadAction<string>) => {
      state.loading = false
      state.sessionId = action.payload
      state.isLoggedIn = true
    })
    builder.addCase(createSession.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload ?? 'Unknown error'
    })
  },
})

export const { setRequestToken, logout } = authSlice.actions
export default authSlice.reducer
