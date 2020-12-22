import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import {View, Text} from 'react-native'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import DropdownAlert from 'react-native-dropdownalert';
import { DropDownHolder } from '../Components'

// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render () {
    // return (
    //   <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}} >
    //     <Text>Hellow</Text>
    //   </View>
    // )
    return (
      <Provider store={store}>
        <RootContainer />
        <DropdownAlert ref={ref => DropDownHolder.setDropDown(ref)} />
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
// export default DebugConfig.useReactotron
//   ? console.tron.overlay(App)
//   : App
//
// import {View, Text} from 'react-native'
//
// const App = props => {
//   return (
//     <View style={{backgroundColor: 'red', flex: 1}}>
//       <Text>Hello</Text>
//     </View>
//   )
// }
export default App
