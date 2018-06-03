import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { Image, View, Text } from 'react-native'
import styles from './Styles/CalendarListItemDetailsStyle'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Octicons from 'react-native-vector-icons/Octicons'

import { Colors, Images, Fonts } from '../Themes'

export default class CalendarListItemDetails extends Component {
  renderPerActivity(){
    let render = ''
    let activity = this.props.item.activity
    let location = typeof this.props.item.location !== 'undefined'
    let time = typeof this.props.item.time !== 'undefined'
    let distance = typeof this.props.item.distance !== 'undefined'
    let number = typeof this.props.item.number !== 'undefined'
    let bodyPart = typeof this.props.item.bodyPart !== 'undefined'
    let summary = typeof this.props.item.summary !== 'undefined'

    render = (
      <View style={styles.innerContainer}>
        {time ? (
          <View style={styles.sectionContainer}>
            <View style={styles.halfContainer}>
              <FontAwesome
                name={'clock-o'}
                size={20}
                color={Colors.white}
              />
            </View>
            <View style={styles.halfContainer}>
              <Text style={styles.textEmphasis}>
                {this.props.item.time}
              </Text>
            </View>
          </View>
        ) : (null)}
        {distance ? (
          <View style={styles.sectionContainer}>
            <View style={styles.halfContainer}>
              <Image
                resizeMode='contain'
                source={Images.runIcon}
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.halfContainer}>
              <Text style={styles.textEmphasis}>
                {this.props.item.distance}
              </Text>
            </View>
          </View>
        ) : (null)}
        {number ? (
          <View style={styles.sectionContainer}>
            <View style={styles.halfContainer}>
              <Image
                resizeMode='contain'
                source={Images.pushUpIcon}
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.halfContainer}>
              <Text style={styles.textEmphasis}>
                {this.props.item.number}
              </Text>
            </View>
          </View>
        ) : (null)}
        {bodyPart ? (
          <View style={styles.sectionContainer}>
            <View style={styles.halfContainer}>
              <Image
                resizeMode='contain'
                source={Images.stretchIcon}
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.halfContainer}>
              <Text style={styles.textEmphasis}>
                {this.props.item.bodyPart}
              </Text>
            </View>
          </View>
        ) : (null)}
        {location ? (
          <View style={styles.sectionContainer}>
            <View style={styles.halfContainer}>
              <Octicons
                name={'location'}
                size={20}
                color={Colors.white}
              />
            </View>
            <View style={styles.halfContainer}>
              <Text style={styles.textEmphasis}>
                {this.props.item.location}
              </Text>
            </View>
          </View>
        ) : (null)}
      </View>
    )

    if(!location && !time && !distance && !number && !bodyPart && summary) {
      render = (
        <View style={styles.innerContainer}>
          <View style={styles.sectionContainer}>
            <View style={styles.halfContainer}>
              <Text style={styles.textEmphasis}>
                {this.props.item.summary}
              </Text>
            </View>
          </View>
        </View>
      )
    }

    return render
  }


  render () {
    return (
      <View style={styles.container}>
        {this.renderPerActivity()}
      </View>
    )
  }
}
