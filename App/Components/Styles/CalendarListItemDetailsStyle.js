import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: Metrics.doubleBaseMargin
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  halfContainer: {
    marginRight: Metrics.baseMargin
  },
  textEmphasis: {
    alignSelf: 'center',
    fontFamily: Fonts.type.emphasis,
    fontSize: Fonts.size.h6,
    color: 'white',
    marginBottom: 8,
    marginRight: Metrics.doubleBaseMargin
  },
  imageStyle: {
    width: 28,
    height: 28
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
