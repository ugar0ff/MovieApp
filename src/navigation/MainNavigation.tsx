import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import type { TLoginScreenParams } from '@screens/login'
import { LoginScreen } from '@screens/login'
import type { TMoviesScreenParams } from '@screens/movies'
import { MoviesScreen } from '@screens/movies'
import type { TMovieDetailScreenParams } from '@screens/movieDetail'
import { MovieDetailScreen } from '@screens/movieDetail'
import { ROUTES } from '@constants'
import { SearchScreen } from '@screens/search'
import type { TSearchScreenParams } from '@screens/search'
import { keyMap, useTranslation } from '@localization'

export type RootStackParamList = TLoginScreenParams &
  TMovieDetailScreenParams &
  TMoviesScreenParams &
  TSearchScreenParams

const Stack = createNativeStackNavigator<RootStackParamList>()

export const MainNavigation = () => {
  const { t } = useTranslation()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTES.Login}>
        <Stack.Screen
          name={ROUTES.Login}
          component={LoginScreen}
          options={{ title: t(keyMap.login) }}
        />
        <Stack.Screen
          name={ROUTES.Movies}
          component={MoviesScreen}
          options={{ title: t(keyMap.movies) }}
        />
        <Stack.Screen
          name={ROUTES.MovieDetail}
          component={MovieDetailScreen}
          options={{ title: t(keyMap.movieDetail) }}
        />
        <Stack.Screen
          name={ROUTES.Search}
          component={SearchScreen}
          options={{ title: t(keyMap.search) }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
