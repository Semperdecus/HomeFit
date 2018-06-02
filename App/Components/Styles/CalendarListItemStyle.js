import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    backgroundColor: Colors.transparentBackground,
    elevation: 2,
    borderRadius: 5,
    marginTop: Metrics.baseMargin,
    borderLeftWidth: 5,
    borderColor: Colors.red,
    justifyContent: 'center'
  },
  textEmphasis: {
    alignSelf: 'center',
    fontFamily: Fonts.type.emphasis,
    fontSize: Fonts.size.h6,
    color: 'white'
  }
})
