import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'

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
          <Text style={styles.text}>
            UXBERT Usability Lab, Project (Muchamad Sahli)
          </Text>
        </View>
      </View>
    )
  }
}
