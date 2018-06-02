import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  buttonRight: {
    position: 'absolute',
    top: -35,
    right: -40,
    width: 100,
    height: 100,
    borderRadius: 50,
    elevation: 2
  },
  buttonLeft: {
    position: 'absolute',
    top: -35,
    left: -40,
    width: 100,
    height: 100,
    borderRadius: 50,
    elevation: 2
  },
  buttonRightIcon: {
    left: 20,
    top: 50
  },
  buttonLeftIcon: {
    left: 55,
    top: 55
  },
  yellow: {
    backgroundColor: Colors.transparentBackground
  },
  blue: {
    backgroundColor: Colors.transparentBackground
  }
})
