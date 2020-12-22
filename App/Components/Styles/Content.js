import { StyleSheet, Platform, Dimensions } from 'react-native';

import { Colors, Fonts } from '../../Themes';
import Scale from '../../Transforms/Scale'

const WIDTH_ICON_EMPTY = Scale(90)

export default StyleSheet.create({
  WIDTH_ICON_EMPTY,
  containerEmpty: {
    flex:1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageEmpty: {
    width: WIDTH_ICON_EMPTY,
    height: WIDTH_ICON_EMPTY,
    marginVertical: 20,
    color: '#888'
  },
  btnTryAgain: {
    backgroundColor: '#FFF',
    borderColor: 'grey',
    borderWidth: .25,
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 30,
    marginTop: 15
  },
  textEmptyTitle: {
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 20,
    fontFamily: Fonts.type.base,
    color: Colors.red,
    marginVertical: 5
  },
  textEmptyMessage: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: Fonts.type.base,
    color: Colors.textGrey,
    marginVertical: 5,
    marginHorizontal: 80,
    textAlign: 'center'
  }
});
