import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createSession, setRequestToken } from '@store/authSlice'
import Component from './Component'
import type { AppDispatch, RootState } from '@store'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ROUTES } from '@constants'
import type { TMoviesScreenParams } from '../movies'
import Config from 'react-native-config'

export type TScreenParams = {
  [ROUTES.Login]: undefined
}

type TProps = NativeStackNavigationProp<
  TScreenParams & TMoviesScreenParams,
  keyof TScreenParams
>

const Container = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigation = useNavigation<TProps>()
  const { requestToken, loading, error, isLoggedIn } = useSelector(
    (state: RootState) => state.auth
  )

  useEffect(() => {
    const fetchRequestToken = async () => {
      try {
        const res = await fetch(
          `${Config.TMDB_DB}authentication/token/new?api_key=${Config.TMDB_API_KEY}`
        )
        const data = await res.json()
        if (data.success && data.request_token) {
          dispatch(setRequestToken(data.request_token))
        } else {
          if (__DEV__) console.warn('Failed to fetch request token', data)
          // TODO: should add analytics
        }
      } catch (err) {
        if (__DEV__) console.error('Error fetching request token', err)
        // TODO: should add analytics
      }
    }

    fetchRequestToken()
  }, [dispatch])

  useEffect(() => {
    if (isLoggedIn) navigation.replace(ROUTES.Movies)
  }, [isLoggedIn, navigation])

  const handleLogin = (username: string, password: string) => {
    if (requestToken) {
      dispatch(createSession({ username, password, requestToken }))
    } else {
      if (__DEV__) console.warn('Request token not ready yet')
      // TODO: should add analytics
    }
  }

  return <Component onLogin={handleLogin} loading={loading} error={error} />
}

export default Container
