import './App/Config/ReactotronConfig'
import { AppRegistry, YellowBox } from 'react-native'
import App from './App/Containers/App'
YellowBox.ignoreWarnings([
  'Warning: '
])

AppRegistry.registerComponent('HomeFit', () => App)
