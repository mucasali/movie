/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Text, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Fonts, Colors } from '../Themes';

// import styles from './Styles/InputStyles'

const { OS } = Platform;

export class Input extends Component {

  state = {
      hidePassword: true
  }

  showPassword = () => {
      this.setState({ hidePassword: !this.state.hidePassword })
  }

  render(){
      const showError = !!(this.props.error && this.props.error.length > 0);
      return (
        <View style={styles.container}>
          {this.props.label ? <Text style={this.props.styleTitle}>{this.props.title}</Text> : null}
          {this.props.desc ? <Text style={this.props.styleDesc}>{this.props.desc}</Text> : null}
          <View style={[styles.input, this.props.styleInput]} >
            {
              this.props.leftComponent
              && <View style={styles.contentLeftComponent}>{this.props.leftComponent()}</View>
            }
            <TextInput
              multiline={this.props.multiline}
              placeholder={this.props.placeholder}
              placeholderTextColor={this.props.placeholderTextColor}
              secureTextEntry={(this.props.secureTextEntry && this.state.hidePassword)}
              name={this.props.name}
              value={
                Number.isInteger(this.props.value) ? this.props.value.toString() : this.props.value
              }
              editable={this.props.editable}
              keyboardType={this.props.keyboardType}
              returnKeyType={this.props.returnKeyType}
              onChangeText={text => {
                if (text != null) {
                  this.props.setFieldValue(this.props.name, text);
                }
                this.props.setFieldTouched(this.props.name, true);
              }}
              autoCapitalize={this.props.autoCapitalize}
              style={[styles.inputText, this.props.styleInputText]}
            />
            {
                this.props.toggleShowPassword
                ? <TouchableOpacity
                    style={styles.btnToggleShowPassword}
                    onPress={this.showPassword}
                >
                    <Icon name='eye-slash' size={20}/>
                  </TouchableOpacity>
                : null
            }

          </View>
          {showError ? (
            <Text style={styles.textError}>{this.props.error}</Text>
          ) : (
            null
          )}
        </View>
      )
  }
};

const styles = {
  container: {
    marginBottom: OS === 'ios' ? 2 : 10
  },
  title: {
    // paddingLeft: 10,
    paddingLeft: 5,
    fontSize: Fonts.size.normal,
    fontFamily: Fonts.type.base,
    color: Colors.darkBlue,
    fontWeight: '500',
    letterSpacing: 1,
  },
  desc: {
    // paddingLeft: 10,
    paddingLeft: 5,
    fontSize: Fonts.size.extraSmall,
    fontFamily: Fonts.type.base,
    color: Colors.darkBlue,
    fontWeight: '400',
    letterSpacing: 1,
  },
  contentLeftComponent: {
    paddingLeft: 5,
  },
  input: {
    // height: 40,
    // margin: 5,
    // paddingVertical: Platform.OS == 'ios' ? 12 : 0,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 3,
    paddingVertical: Platform.OS === 'ios' ? 10 : 0,
    backgroundColor: Colors.background,
    borderColor: Colors.lightGrey,
    borderWidth: 1,
    borderRadius: 10,
    // borderBottomColor: '#ddd',
    // borderBottomWidth: 1,
    // justifyContent: 'center'
  },
  inputText: {
    flex: 1,
    color: Colors.black,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.medium,
    fontWeight: '400',
    // backgroundColor: Colors.background,
    // borderColor: Colors.lightGrey,
    // borderWidth: 1,
    // borderRadius: 10,
    padding: 10,
    height: 40
  },
  textError: {
    textAlign: 'left',
    fontSize: 10,
    color: 'red',
    paddingHorizontal: 5,
    fontFamily: Fonts.type.base,
  },
  btnToggleShowPassword: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    padding: 10,
    // backgroundColor: 'red',
    // borderLeftWidth: 1,
    borderLeftColor: Colors.purple,
    justifyContent: 'center'
  }
}

Input.defaultProps = {
  label: false,
  toggleShowPassword: false,
  title: '',
  name: '',
  value: '',
  error: '',
  placeholder: '',
  secureTextEntry: false,
  setFieldValue: () => {},
  setFieldTouched: () => {},
  editable: true,
  returnKeyType: 'done',
  keyboardType: 'default',
  autoCapitalize: 'sentences',
  labelColor: '#FFF5',
  textColor: '#000',
  fontFamily: Fonts.type.base,
  styleInput: {},
  styleInputText: {},
  styleTitle: styles.title,
  styleDesc: styles.desc,
  multiline: false,
  placeholderTextColor: Colors.textPlaceholder,
  leftComponent: null,
};

Input.propTypes = {
  label: PropTypes.bool,
  title: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  setFieldValue: PropTypes.func,
  setFieldTouched: PropTypes.func,
  editable: PropTypes.bool,
  returnKeyType: PropTypes.string,
  keyboardType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  labelColor: PropTypes.string,
  textColor: PropTypes.string,
  fontFamily: PropTypes.string,
  styleInput: PropTypes.object,
  styleInputText: PropTypes.object,
  styleTitle: PropTypes.object,
  multiline: PropTypes.bool,
  placeholderTextColor: PropTypes.string,
  // leftComponent: PropTypes.object,
};
