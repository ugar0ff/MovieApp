import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from './src/store'
import { extendTheme, NativeBaseProvider } from 'native-base'
import { MainNavigation } from './src/navigation/MainNavigation'
import { LogBox } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'
import { Spinner } from 'native-base'

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
        <PersistGate loading={<Spinner />} persistor={persistor}>
          <MainNavigation />
        </PersistGate>
      </NativeBaseProvider>
    </Provider>
  )
}

export default App
