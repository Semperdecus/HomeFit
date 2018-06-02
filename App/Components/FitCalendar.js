import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { ActivityIndicator, View, Text } from 'react-native'
import * as Animatable from 'react-native-animatable'

// Styles
import styles from './Styles/FitCalendarStyle'
import { Colors, Images, Fonts } from '../Themes'

// Components
import { Calendar } from '../Lib/react-native-calendars'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Moment from 'moment'

const _format = 'YYYY-MM-DD'
const stretch = { color: Colors.yellow }
const pushUp = { color: Colors.red }
const run = { color: Colors.green }
const other = { color: Colors.blue }

let dotData = {} //object with all visual calendar data
let formattedData = [] //object with all required activity data
export default class FitCalendar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      currentdate: '',
      selected: '',
      isLoadingCalendar: true,
      formattedData: [],
      dotData: {}
    }
    this.onDayPress = this.onDayPress.bind(this)
  }

  monthChange (month) {
    this.setState({ currentdate: month })
  }

  onDayPress (day) {
    let previousSelectedDate = this.state.selected
    let currentSelectedDate = Moment(day.dateString).format(_format)
    let oldDatesValue = dotData[previousSelectedDate]

    this.setState({
      selected: currentSelectedDate
    })

    // render items at bottom of screen
    this.getSelectedData(currentSelectedDate)


    //maintain values of previous dots
    try {
      if (previousSelectedDate === '') {
        if (typeof dotData[currentSelectedDate] === 'undefined') {
          dotData[currentSelectedDate] = {
            selected: true
          }
        } else {
          dotData[currentSelectedDate] = {
            selected: true,
            dots: dotData[currentSelectedDate].dots
          }
        }
      } else {
        if (typeof dotData[currentSelectedDate] === 'undefined') {
          if (typeof dotData[previousSelectedDate] === 'undefined') {
            dotData[previousSelectedDate] = {
              selected: false
            }
            dotData[currentSelectedDate] = {
              selected: true
            }
          } else {
            dotData[previousSelectedDate] = {
              selected: false,
              dots: oldDatesValue.dots
            }
            dotData[currentSelectedDate] = {
              selected: true
            }
          }
        } else {
          if (
            typeof dotData[previousSelectedDate] === 'undefined' ||
            dotData[previousSelectedDate] === undefined
          ) {
            dotData[previousSelectedDate] = {
              selected: false
            }
            dotData[currentSelectedDate] = {
              selected: true
            }
          } else {
            dotData[previousSelectedDate] = {
              selected: false,
              dots: oldDatesValue.dots
            }
            dotData[currentSelectedDate] = {
              selected: true,
              dots: dotData[currentSelectedDate].dots
            }
          }
        }
      }
    } catch (err) {
      console.log(err)
    }
    this.setState({ dotData: dotData })
  }

  determineDetails(itemSummary, type){
    let split = itemSummary.split(" ");

    try {
      if(type === 'distance'){
        return split[0]
      } else if(type === 'time'){
        return split[1]
      } else if(type === 'bodyPart'){
        return split[2]
      } else if(type === 'number'){
        return split[0]
      } else if(type === 'location'){
        return split[2]
      } else {
        return null
      }
    }
    catch(err) {
      console.log('weird data: ' + type + ' // ' + itemSummary);
      console.log(err);
    }
  }

  determineActivities(itemSummary){
    let returnArr = {}
    let runEntry = /^[A-Za-z0-9_, '-]{3,100}$/

    if(itemSummary.toUpperCase().includes('Voetbal'.toUpperCase())
      || itemSummary.toUpperCase().includes('Varen'.toUpperCase())) {
      returnArr.activity = 'other'
      if(itemSummary.includes('km')){
        returnArr.distance = this.determineDetails(itemSummary, 'distance')
      }
      returnArr.dots = [other]
    } else if(itemSummary.toUpperCase().includes('fitness'.toUpperCase())) {
      returnArr.activity = 'pushUp'
      returnArr.dots = [pushUp]
    } else if(itemSummary.toUpperCase().includes('push up'.toUpperCase())) {
      returnArr.activity = 'pushUp'
      returnArr.number = this.determineDetails(itemSummary, 'number')
      returnArr.dots = [pushUp]
    } else if(itemSummary.toUpperCase().includes('stretch'.toUpperCase())) {
      returnArr.activity = 'stretch'
      returnArr.time = this.determineDetails(itemSummary, 'time')
      returnArr.bodyPart = this.determineDetails(itemSummary, 'bodyPart')
      returnArr.dots = [stretch]
    } else if(runEntry.test(itemSummary)){
      returnArr.activity = 'run'
      returnArr.distance = this.determineDetails(itemSummary, 'distance')
      returnArr.time = this.determineDetails(itemSummary, 'time')
      returnArr.location = this.determineDetails(itemSummary, 'location')
      returnArr.dots = [run]
    } else {
      returnArr.activity = 'other'
      returnArr.dots = [other]
    }
    return returnArr
  }

  getFormattedData () {
    if(this.state.loading){
      this.getData()
    }

    if(!this.state.loading){
      //check start date and write all activities (including dots)
      for (let i = 0; i < this.state.data.length; i++) {
        let date = this.state.data[i].start.date
        objectEntry = {}
        let currentEntry = objectEntry[date]
        let summary = this.state.data[i].summary
        objectEntry[date] = this.determineActivities(summary)
        formattedData.push(objectEntry)
      }

      // Get dot object
      for (let i = 0; i < formattedData.length; i++) {
        let date = this.state.data[i].start.date
        if (
          typeof dotData[date] === 'undefined' ||
          dotData[date] === undefined
        ) {
          dotData[date] = {dots: [formattedData[i][date].dots[0]]}
        } else {
          // else push period value to immutable object
          dotData[date] = {dots: [dotData[date].dots[0], formattedData[i][date].dots[0]]}
        }
      }
    }

    this.setState({ formattedData: formattedData })
    this.setState({ dotData: dotData })
    this.setState({ isLoadingCalendar: false })
  }

  componentDidMount () {
    this.getData()
  }

  async getData (){
    try {
      let response = await fetch(
        'https://www.googleapis.com/calendar/v3/calendars/i9olufbcejsfs4f0b3bvc21lqk%40group.calendar.google.com/events?key=AIzaSyBR8Ft9WDpAi1jxOmui46g9I7wYYGkVu5Y'
      );
      let responseJson = await response.json();
      console.log(responseJson.items);
      this.setState({ loading: false, data: responseJson.items })
      this.getFormattedData()
    } catch (error) {
      console.error(error);
    }
  }

  getSelectedData (currentSelectedDate) {
    // 1 add array of dates to Object
    let selectedData = this.state.data

    // 2 check if selected day contains Object
    let filterSelectedData = []

    //console.log(formattedData);

    for (let i = 0; i < formattedData.length; i++) {
      let filterData = formattedData[i][currentSelectedDate]

      if(typeof filterData !== 'undefined' ||
        filterData !== undefined)
      {
        filterSelectedData.push(filterData)
      }
    }

    // 3 sent data to mainScreen
    this.props.onSelectDate(filterSelectedData)
  }

  render () {
    let markedDates = ''

    // if all data has been loaded succesfully
    if (!this.state.isLoadingCalendar) {
      try {
        // make immutable object to allow for updating
        markedDates = {...this.state.dotData}
      } catch (err) {
        console.log(err)
        // shouldn't throw error but in case of error use non-dynamic object
        markedDates = this.state.dotData
      }
    }

    if(this.state.isLoadingCalendar){
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <Animatable.View
        animation='fadeIn'
        duration={100}
        style={styles.container}
        >
        <Calendar
          firstDay={1}
          hideArrows={false}
          current={this.state.currentdate}
          style={styles.calendar}
          renderArrow={direction => (
            <Entypo
              name={'chevron-thin-' + direction}
              size={24}
              color={Colors.white}
            />
          )}
          onDayPress={this.onDayPress}
          onMonthChange={month => {
            this.monthChange.bind(this)(month)
          }}
          theme={{
            backgroundColor: Colors.transparent,
            calendarBackground: Colors.transparent,
            //textDayFontFamily: Fonts.type.base,
            //textMonthFontFamily: Fonts.type.base,
            //textDayHeaderFontFamily: Fonts.type.base,
            selectedDayBackgroundColor: Colors.lightGrey,
            selectedDayTextColor: Colors.white,
            textSectionTitleColor: Colors.white,
            textMonthFontSize: 26,
            textDayFontSize: 16,
            todayTextColor: Colors.yellow,
            dayTextColor: Colors.white,
            textDisabledColor: Colors.grey,
            monthTextColor: Colors.white
          }}
          markingType={'multi-dot'}
          markedDates={markedDates}
        />
      </Animatable.View>
    )
  }
}
