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
    overflow: 'hidden'
  },
  standaloneRowFront: {
    alignItems: 'center',
    backgroundColor: Colors.background,
    justifyContent: 'center',
    height: 50,
    paddingLeft: -5,
  },
  standaloneRowBack: {
    alignItems: 'center',
    backgroundColor: Colors.red,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    overflow: 'hidden',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
})
