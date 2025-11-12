import React, { memo, useState } from 'react'
import { View, TextInput, Button, Text } from 'react-native'
import { useStyles } from './useStyles'

type TProps = {
  onLogin: (username: string, password: string) => void
  loading: boolean
  error: string | null
}

const Component = ({ onLogin, loading, error }: TProps) => {
  const styles = useStyles()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <Button title={loading ? 'Loading...' : 'Login'} onPress={() => onLogin(username, password)} />
    </View>
  )
}

export default memo(Component)
