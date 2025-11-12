import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRequestToken, createSession } from '@store/authSlice'
import Component from './Component'
import type { AppDispatch, RootState } from '@store'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ROUTES } from '@constants'
import type { TMoviesScreenParams } from '../movies'

export type TScreenParams = {
  [ROUTES.Login]: undefined
}

type TProps = NativeStackNavigationProp<TScreenParams & TMoviesScreenParams, keyof TScreenParams>

const Container = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigation = useNavigation<TProps>()
  const { requestToken, loading, error, isLoggedIn } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    if (!requestToken) {
      dispatch(fetchRequestToken())
    }
  }, [dispatch, requestToken])

  useEffect(() => {
    if (isLoggedIn) navigation.replace(ROUTES.Movies)
  }, [isLoggedIn, navigation])

  const handleLogin = useCallback(
    (username: string, password: string) => {
      if (requestToken) {
        dispatch(createSession({ username, password, requestToken }))
      } else {
        if (__DEV__) console.warn('Request token not ready yet')
        // TODO: reorganize logic, if !requestToken we should disable the button
      }
    },
    [dispatch, requestToken],
  )

  return <Component onLogin={handleLogin} loading={loading} error={error} />
}

export default Container
