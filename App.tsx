import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/store'
import { NativeBaseProvider } from 'native-base'
import { MainNavigation } from './src/navigation/MainNavigation'

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
