import React from 'react'
import Component from './Component'

type TProps = {
  uri: string
}

const Container = ({ uri }: TProps) => {
  return <Component uri={uri} />
}

export default Container
