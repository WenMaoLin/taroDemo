import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClickOne = () => {
    Taro.navigateTo({
      url: '/pages/one/one'
    })
  }

  handleClickTwo = () => {
    Taro.navigateTo({
      url: '/pages/two/two'
    })
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Text onClick={this.handleClickOne}>跳转页面一</Text>
        <Text onClick={this.handleClickTwo}>跳转页面二</Text>
      </View>
    )
  }
}
