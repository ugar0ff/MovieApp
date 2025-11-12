import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/store'
import { NativeBaseProvider } from 'native-base'
import { MainNavigation } from './src/navigation/MainNavigation'
import { LogBox } from 'react-native'

LogBox.ignoreLogs([
  'In React 18, SSRProvider is not necessary and is a noop',
])

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <MainNavigation />
      </NativeBaseProvider>
    </Provider>
  )
}

export default App
