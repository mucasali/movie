import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {

  static navigationOptions = {
    headerShown: false
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.centered}>
          <Image source={Images.iconLogoWord} style={styles.logo} />
        </View>
      </View>
    )
  }
}
