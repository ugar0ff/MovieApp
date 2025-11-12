import React, { memo } from 'react'
import { useStyles } from './useStyles'
import { Image } from 'native-base'

type TProps = {
  uri: string
}

const Component = ({ uri }: TProps) => {
  const styles = useStyles()
  return <Image source={{ uri }} style={styles.poster} />
}

export default memo(Component)
