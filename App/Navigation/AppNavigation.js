import React from 'react'
import {TouchableOpacity, Image} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import {Images} from '../Components'

import LaunchScreen from '../Containers/LaunchScreen'
import TopTabNavigation from './TopTabNavigation'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  MainScreen: { screen: TopTabNavigation,
    navigationOptions: {
      headerTitle: 'UXBERT Movie',
      headerStyle: {
        backgroundColor: '#fff',
        elevation:0
      }
    }
  },
}, {
  // Default config for all screens
  // headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  defaultNavigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitleStyle,
    // headerRight: () => (
    //   <TouchableOpacity onPress={() => {}} style={[styles.button, {marginRight: 10}]}>
    //     <Image source={Images.iconMainBell} style={styles.imgButton} />
    //   </TouchableOpacity>
    // )
  }
})

export default createAppContainer(PrimaryNav)
