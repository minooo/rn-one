import React from 'react'
import { View, Text } from 'react-native'
import s from "@style"

export default class extends React.Component {
  static navigationOptions = {
    title: '嘟嘟新媒体',
    header: null
  }
  render() {
    return (
      <View style={[s.equal, s.jc_center, s.ai_center]}>
        <Text>首页</Text>
      </View>
    )
  }
}