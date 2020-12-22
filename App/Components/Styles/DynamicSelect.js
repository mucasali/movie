import { StyleSheet, Platform, Dimensions } from 'react-native';

import { ApplicationStyles, Colors, Fonts } from '../../Themes';
import Scale from '../../Transforms/Scale';

const { height } = Dimensions.get('window');

const OS = Platform.OS

export default StyleSheet.create({
  container: {
    // marginVertical: OS == 'ios' ? 2 : 3,
    marginBottom: OS === 'ios' ? 2 : 10
  },
  // title: {
  //   ...Fonts.style.regularMedium,
  //   fontWeight: '400',
  //   color: Colors.darkGrey
  // },
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
  select: {
    // height: 40,
    flexDirection: 'row',
    // margin: 3,
    // paddingVertical: 10,
    // borderBottomColor: 'red',
    // borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    // alignItems: 'center',
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
  input: {
    flex: 1,
    margin: 3,
    paddingVertical: Platform.OS === 'ios' ? 10 : 0,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },
  searchContainer: {
    backgroundColor: '#F2F2F2',
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: OS == 'ios' ? 10 : 0,
    flexDirection: 'row',
    borderRadius: 4,
    alignItems: 'center',
  },
  textValue: {
    color: Colors.purple,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.medium,
    fontWeight: '400',
  },
  textPlaceHolder: {
    color: '#ddd',
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.medium,
    fontWeight: '400',
  },
  textError: {
    textAlign: 'left',
    fontSize: 10,
    color: 'red',
    paddingHorizontal: 5,
    fontFamily: Fonts.type.regular,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.windowTint,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    width: Scale(300),
    maxHeight: height - 70,
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  modalTextContent: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  modalButtonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  modalItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  modalItemText: {
    ...Fonts.style.normal,
    color: Colors.darkBlue,
    flexWrap: 'wrap',
    paddingRight: 20,
  },
  modalTitle: {
    padding: 20,
    fontFamily: Fonts.type.regular,
    fontSize: 18,
    color: Colors.darkBlue,
    fontWeight: '500',
    letterSpacing: 1,
  },
  cancelButton: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.medium,
    letterSpacing: 1,
    color: Colors.black,
  },
  selectButton: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.medium,
    letterSpacing: 1,
    color: Colors.purple,
  },
  buttonContainer: {
    flex: 1,
    margin: 5,
    borderColor: Colors.darkBlue,
    borderWidth: 1,
  },
  labelTitle: {
    color: Colors.darkGrey,
    letterSpacing: 1,
    marginBottom: 5,
    marginLeft: 3,
  },
  areaButtonContainer: {
    paddingHorizontal: 30,
    paddingBottom: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderColor: Colors.border,
  },
  areaContainer: {
    borderColor: Colors.lightGrey,
    borderWidth: 1,
    margin: 5,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  areaText: {
    color: Colors.black,
    paddingVertical: 10,
    paddingHorizontal: 3,
  },
  textContainer: {
    flex: 1,
    paddingRight: 30,
  },
  checkbox: {
    marginLeft: -20,
  },
});
