import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: Metrics.baseMargin / 2
  },
  calendar: {
    backgroundColor: Colors.transparentBackground,
    elevation: 5,
    borderRadius: 10,
    paddingBottom: Metrics.baseMargin,
    paddingTop: Metrics.baseMargin / 2
  }
})
