
import { Platform } from 'react-native'

import { Fonts, Colors } from '../../Themes';

const OS = Platform.OS

const styles = {
  container: {
    marginBottom: OS === 'ios' ? 2 : 10
  },
  title: {
    // paddingLeft: 10,
    paddingLeft: 5,
    fontSize: Fonts.size.normal,
    fontFamily: Fonts.type.regular,
    color: Colors.darkBlue,
    fontWeight: '500',
    letterSpacing: 1,
  },
  desc: {
    // paddingLeft: 10,
    paddingLeft: 5,
    fontSize: Fonts.size.extraSmall,
    fontFamily: Fonts.type.regular,
    color: Colors.darkBlue,
    fontWeight: '400',
    letterSpacing: 1,
  },
  input: {
    // height: 40,
    // margin: 5,
    // paddingVertical: Platform.OS == 'ios' ? 12 : 0,
    flex: 1,
    margin: 3,
    paddingVertical: Platform.OS === 'ios' ? 10 : 0,
    // borderBottomColor: '#ddd',
    // borderBottomWidth: 1,
    // justifyContent: 'center'
  },
  inputText: {
    color: Colors.purple,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.medium,
    fontWeight: '400',
    backgroundColor: Colors.background,
    borderColor: Colors.lightGrey,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    height: 40
  },
  textError: {
    textAlign: 'left',
    fontSize: 10,
    color: 'red',
    paddingHorizontal: 5,
    fontFamily: Fonts.type.regular,
  },
  btnToggleShowPassword: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    padding: 10,
    borderLeftWidth: 1,
    borderLeftColor: Colors.purple,
    justifyContent: 'center'
  }
}

export default styles
