import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import { Test, Item } from '@/components/test/test'

import './index.scss'

export default class Index extends Component {

  state = {
    list: [15, 5, 7, 3, 12, 11, 10, 9],
    lista: [15, 5, 7, 3, 12, 11, 10, 9],
    listb: [10, 5, 9, 7, 3, 12, 11, 15],
    type: 'lista'
  }

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

  toggle = () => {
    let { type, lista, listb } = this.state
    const list = type === 'lista' ? listb.slice() : lista.slice()
    type = type === 'lista' ? 'listb' : 'lista'
    this.setState({
      list,
      type
    })
  }

  render () {
    const { list } = this.state
    console.log(list)
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Test>
          {list.map(item => {
            return (
              // 不加 key 反而没问题
              <Item>{item}</Item>
              
              // 加key 会出现问题
              // <Item key={item}>{item}</Item>
              )
          })}
        </Test>
        <Text onClick={this.toggle}>点我打乱</Text>
      </View>
    )
  }
}
