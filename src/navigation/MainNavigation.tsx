import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import type { TLanguagesScreenParams } from '@screens/languages'
import { Languages } from '@screens/languages'
import type { TLoginScreenParams } from '@screens/login'
import { Login } from '@screens/login'
import type { TMoviesScreenParams } from '@screens/movies'
import { Movies } from '@screens/movies'
import type { TFavoritesScreenParams } from '@screens/favorites'
import { Favorites } from '@screens/favorites'
import type { TSettingsScreenParams } from '@screens/settings'
import { Settings } from '@screens/settings'
import type { TMovieDetailScreenParams } from '@screens/movieDetail'
import { MovieDetail } from '@screens/movieDetail'
import { ROUTES } from '@constants'

export type RootStackParamList = TFavoritesScreenParams & TLanguagesScreenParams & TLoginScreenParams & TMovieDetailScreenParams & TMoviesScreenParams & TSettingsScreenParams

const Stack = createNativeStackNavigator<RootStackParamList>()

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTES.Login}>
        <Stack.Screen name={ROUTES.Login} component={Login} />
        <Stack.Screen name={ROUTES.Movies} component={Movies} />
        <Stack.Screen name={ROUTES.MovieDetail} component={MovieDetail} />
        <Stack.Screen name={ROUTES.Favorites} component={Favorites} />
        <Stack.Screen name={ROUTES.Settings} component={Settings} />
        <Stack.Screen name={ROUTES.Languages} component={Languages} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
