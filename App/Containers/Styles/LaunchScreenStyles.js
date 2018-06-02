import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  innerContainer: {
    marginLeft: Metrics.baseMargin,
    marginRight: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin
  },
  title: {
    textAlign: 'center',
    color: Colors.white,
    fontFamily: Fonts.type.base,
    fontSize: 24,
    marginBottom: Metrics.doubleBaseMargin,
    marginTop: Metrics.baseMargin
  },
  listItem: {
    margin: -5,
    marginLeft: Metrics.baseMargin,
    marginRight: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin

  }
})
