import React, { Component } from 'react'
import { Image, TouchableOpacity, View, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// Styles
import { Colors, Images } from '../Themes'
import styles from './Styles/HeaderButtonStyle'

export default class HeaderButton extends Component {
  render () {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[
          this.props.right ? styles.buttonRight : styles.buttonLeft,
          this.props.yellow ? styles.yellow : styles.blue
        ]}>
        {this.props.right ? (
          <View style={styles.buttonRightIcon}>
            <MaterialCommunityIcons
              name='plus'
              size={28}
              color={Colors.white}
            />
          </View>
        ) : (
          <Image style={styles.buttonLeftIcon} source={Images.hamburgerButton} />
        )}
      </TouchableOpacity>
    )
  }
}
