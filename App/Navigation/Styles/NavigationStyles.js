import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.backgroundColor
  },
  headerTitleStyle: {
    fontSize: 16,
    fontFamily: Fonts.type.base,
    color: 'black',
    fontWeight: '400'
  },
  button: {
    padding: 10,
  },
  imgButton: {
    width: 25,
    height: 25
  },
})
