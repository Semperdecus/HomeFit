import React, { Component } from 'react'
import { FlatList, TouchableOpacity, StatusBar, ScrollView, Text, Image, View } from 'react-native'
import * as Animatable from 'react-native-animatable'

// Styles
import { Colors, Images } from '../Themes'
import styles from './Styles/LaunchScreenStyles'

// Components
import HeaderButton from '../Components/HeaderButton'
import FitCalendar from '../Components/FitCalendar'
import CalendarListItem from '../Components/CalendarListItem'

export default class LaunchScreen extends Component {
  constructor () {
    super()
    this.state = {
      selectedData: true
    }
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <StatusBar hidden backgroundColor={Colors.transparent} barStyle='light-content' translucent />
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Calendar</Text>
          <View style={styles.innerContainer}>
            <FitCalendar
              onSelectDate={value => this.setState({ selectedData: value })}
            />
          </View>
          <FlatList
            data={this.state.selectedData}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <CalendarListItem
                  red
                />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
        <HeaderButton left
          onPress={() => window.alert('additional browsing calendar options.')}
        />
        <HeaderButton right
          onPress={() => null}
        />
        <Text>DONT FORGOT REDUX STATE COLOR CHANGE THEME :D</Text>
      </View>
    )
  }
}
