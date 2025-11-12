import Config from 'react-native-config'

export const getRequestTokenApi = async (): Promise<string> => {
  const res = await fetch(`${Config.TMDB_DB}authentication/token/new?api_key=${Config.TMDB_API_KEY}`)
  const data = await res.json()
  if (!res.ok) throw new Error(data.status_message || 'Error fetching token')
  return data.request_token
}

export const createSessionApi = async (username: string, password: string, requestToken: string): Promise<string> => {
  const loginRes = await fetch(`${Config.TMDB_DB}authentication/token/validate_with_login?api_key=${Config.TMDB_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, request_token: requestToken }),
  })
  const loginData = await loginRes.json()
  if (!loginRes.ok) throw new Error(loginData.status_message || 'Login failed')

  const sessionRes = await fetch(`${Config.TMDB_DB}authentication/session/new?api_key=${Config.TMDB_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ request_token: requestToken }),
  })
  const sessionData = await sessionRes.json()
  if (!sessionRes.ok) throw new Error(sessionData.status_message || 'Session failed')

  return sessionData.session_id
}
