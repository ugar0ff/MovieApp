import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Component from './Component'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ROUTES } from '@constants'
import type { TLanguagesScreenParams } from '../languages'

export type TScreenParams = {
  [ROUTES.Settings]: undefined
}

type TProps = NativeStackNavigationProp<TScreenParams & TLanguagesScreenParams, keyof TScreenParams>

const Container = () => {
  const navigation = useNavigation<TProps>()

  const handlePressLanguages = () => {
    navigation.navigate(ROUTES.Languages)
  }

  return <Component onPressLanguages={handlePressLanguages} />
}

export default Container
