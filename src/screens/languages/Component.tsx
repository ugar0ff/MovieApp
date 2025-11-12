import React, { memo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useStyles } from './useStyles'

type TProps = {
  options: string[]
  selectedIndex: number
  onSelect: (index: number) => void
}

const Component = ({ options, selectedIndex, onSelect }: TProps) => {
  const styles = useStyles()
  return (
    <View style={styles.container}>
      {options.map((label, index) => (
        <TouchableOpacity key={label} style={styles.item} onPress={() => onSelect(index)}>
          <Text style={[styles.text, selectedIndex === index && styles.selected]}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default memo(Component)
