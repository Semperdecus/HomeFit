import React, { Component } from 'react'
import { View, Text } from 'react-native'
import * as Animatable from 'react-native-animatable'
import styles from './Styles/CalendarListItemStyle'
import { Colors, Images, Fonts } from '../Themes'

export default class CalendarListItem extends Component {
  render () {
    return (
      <View style={[styles.container,
        this.props.red ? {borderColor: Colors.red} :
        this.props.yellow ? {borderColor: Colors.yellow} :
        this.props.green ? {borderColor: Colors.green} :
        {borderColor: Colors.blue}]}>
        <Text style={styles.textEmphasis}>CalendarListItem Component</Text>
      </View>
    )
  }
}
