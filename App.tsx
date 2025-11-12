import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/store'
import { extendTheme, NativeBaseProvider } from 'native-base'
import { MainNavigation } from './src/navigation/MainNavigation'
import { LogBox } from 'react-native'

LogBox.ignoreLogs([
  'In React 18, SSRProvider is not necessary and is a noop',
])

const theme = extendTheme({
  components: {
    Input: {
      defaultProps: {
        _stack: { style: {} } // hack https://github.com/GeekyAnts/NativeBase/issues/5821#issuecomment-3427659713
      },
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <MainNavigation />
      </NativeBaseProvider>
    </Provider>
  )
}

export default App
