import React, { memo, useState, useCallback } from 'react'
import { VStack, Input, Button, Text, Spinner } from 'native-base'
import { useTranslation, keyMap } from '@localization'
import { useStyles } from './useStyles'

type TProps = {
  onLogin: (username: string, password: string) => void
  loading: boolean
  error: string | null
}

const Component = ({ onLogin, loading, error }: TProps) => {
  const { t } = useTranslation()
  const styles = useStyles()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = useCallback(() => {
    onLogin(username.trim(), password.trim())
  }, [onLogin, username, password])

  return (
    <VStack style={styles.container} space={4}>
      <Input
        placeholder={t(keyMap.username_placeholder)}
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        autoCapitalize="none"
      />
      <Input
        placeholder={t(keyMap.password_placeholder)}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {error && (
        <Text color="red.500" style={styles.error}>
          {error}
        </Text>
      )}
      <Button onPress={handleLogin} isDisabled={loading}>
        {loading ? <Spinner color="white" /> : t(keyMap.login_button)}
      </Button>
    </VStack>
  )
}

export default memo(Component)
