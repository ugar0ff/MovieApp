import React, { memo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useStyles } from './useStyles'

type TProps = {
  onPressLanguages: () => void
}

const Component = ({ onPressLanguages }: TProps) => {
  const styles = useStyles()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={onPressLanguages}>
        <Text style={styles.text}>Language</Text>
      </TouchableOpacity>
    </View>
  )
}

export default memo(Component)
