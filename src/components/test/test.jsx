import React, { Component, PureComponent } from 'react'
import { View, Text } from '@tarojs/components'
import './test.scss'

class Item extends Component {
  render() {
    const { children } = this.props
    console.log(children)
    return (
      <View className="item">
        {children}
      </View>
    )
  }
}

class Test extends Component {
  render() {
    const { children } = this.props
    return (
      <View className="list">
        {children}
      </View>
    )
  }
}

export {
  Test,
  Item
}

export default Test