import React, { memo } from 'react'
import { useStyles } from './useStyles'
import { Image } from 'native-base'
import Config from 'react-native-config'

type TProps = {
  uri: string
}

const Component = ({ uri }: TProps) => {
  const styles = useStyles()

  const imageUri = uri
    ? { uri: `${Config.TMDB_IMAGE}${uri}` }
    : require('../../assets/poster-placeholder.png')

  return <Image source={imageUri} style={styles.poster} />
}

export default memo(Component)
