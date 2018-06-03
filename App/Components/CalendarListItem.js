import React, { Component } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import * as Animatable from 'react-native-animatable'
import styles from './Styles/CalendarListItemStyle'
import { Colors, Images, Fonts } from '../Themes'
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import CalendarListItemDetails from '../Components/CalendarListItemDetails'

export default class CalendarListItem extends Component {
  removeItem() {
    console.log(this.props.item);
  }

  activityColor() {
    let activity = this.props.item.activity.toUpperCase()
    let color = Colors.blue

    switch (activity) {
      case 'fitness'.toUpperCase():
        color = Colors.red
        break;
      case 'pushup'.toUpperCase():
        color = Colors.red
        break;
      case 'stretch'.toUpperCase():
        color = Colors.yellow
        break;
      case 'run'.toUpperCase():
        color = Colors.green
        break;
    }
    return color
  }

  render () {
    let activity = this.props.item.activity.toUpperCase()

    return (
      <Animatable.View
        animation='fadeIn'
        style={
        [styles.container, { borderColor: this.activityColor() }]
      }>
        <SwipeRow
          rightOpenValue={-40}
          disableRightSwipe
        >
          <View style={
            [styles.standaloneRowBack, { backgroundColor: this.activityColor() }]
          }>
            <Text>{' '}</Text>
            <TouchableOpacity onPress={() => this.removeItem()}>
              <FontAwesome
                name={'remove'}
                size={20}
                color={Colors.white}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.standaloneRowFront}>
            <CalendarListItemDetails
              item={this.props.item}
            />
          </View>
        </SwipeRow>
      </Animatable.View>
    )
  }
}
