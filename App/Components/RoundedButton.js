import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View } from 'react-native'
import styles from './Styles/RoundedButtonStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'
import { Colors } from '../Themes'

// Note that this file (App/Components/RoundedButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('Rounded Button', () => (
  <RoundedButton
    text="real buttons have curves"
    onPress={() => window.alert('Rounded Button Pressed!')}
  />
))

export default class RoundedButton extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    children: PropTypes.string,
    navigator: PropTypes.object,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    containerStyle: PropTypes.object,
    textStyle: PropTypes.object,
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    backgroundColor: Colors.blue,
  }

  getText() {
    const buttonText = this.props.text || this.props.children || ''
    return buttonText.toUpperCase()
  }

  render() {
    console.log(this.props.disabled)
    return (
      <TouchableOpacity
        style={[
          styles.button,
          this.props.containerStyle,
          {
            backgroundColor: this.props.disabled
              ? Colors.cloud
              : this.props.backgroundColor,
          },
        ]}
        onPress={this.props.onPress}
        disabled={this.props.disabled}
      >
        <Text
          style={[
            styles.buttonText,
            this.props.textStyle,
            { color: this.props.textColor },
          ]}
        >
          {this.getText()}
        </Text>
      </TouchableOpacity>
    )
  }
}
