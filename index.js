import './App/Config/ReactotronConfig'
import { AppRegistry } from 'react-native'
import App from './App/Containers/App'
import { name as appName } from "./app.json";
import React from 'react'
import {View, Text} from 'react-native'

// const App = props => {
//   return (
//     <View style={{backgroundColor: 'red', flex: 1}}>
//       <Text>Hello</Text>
//     </View>
//   )
// }

AppRegistry.registerComponent(appName, () => App)
// AppRegistry.unmountApplicationComponentAtRootTag(AppRegistry.getAppKeys()?.indexOf(routeName));
