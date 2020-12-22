import { StyleSheet } from 'react-native'
import { Colors, Fonts, ApplicationStyles } from '../../Themes/'
import Scale from '../../Transforms/Scale'

const HEIGHT_POSTER = Scale(250)
const SIZE_RATING = Scale(40)
const SIZE_SHARE = Scale(25)
const BTN_HEART = Scale(30)

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    paddingVertical: 5,
  },
  contentItem: {
    flex: 1,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
  },
  contentItemFavorite: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    backgroundColor: 'white',
  },
  contentText: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  containerRating: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.2)',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  contentRating: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: SIZE_RATING,
    width: SIZE_RATING,
    borderWidth: 1,
    borderRadius: (SIZE_RATING/2),
    borderColor: Colors.white,
    padding: 5,
    backgroundColor: 'rgba(0,0,0,.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center'
  },
  btnActions: {
    flexDirection: 'row',
    padding: 5,
    margin: 5,
    backgroundColor: Colors.green,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDeleteHeart: {
    flexDirection: 'row',
    padding: 5,
    margin: 5,
    backgroundColor: Colors.red,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnHeart: {
    position: 'absolute',
    top: -20,
    right: 2,
    width: BTN_HEART,
    height: BTN_HEART,
    borderRadius: (BTN_HEART/2),
    backgroundColor: 'white',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.grey,
    borderWidth: .5,
  },
  btnShare: {
    height: SIZE_SHARE,
    width: SIZE_SHARE,
    borderRadius: (SIZE_SHARE/2),
    borderWidth: .3,
    borderColor: Colors.darkGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  poster: {
    width: null,
    height: HEIGHT_POSTER,
    // resizeMode: 'contain',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  textTitle: {
    fontFamily: Fonts.type.bold,
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.black
  },
  textDate: {
    fontFamily: Fonts.type.base,
    fontWeight: '300',
    fontSize: 12,
    color: Colors.textGrey
  },
  textRating: {
    fontFamily: Fonts.type.base,
    fontWeight: '300',
    fontSize: 20,
    color: Colors.white
  },
  textPercent: {
    fontFamily: Fonts.type.base,
    fontWeight: '300',
    fontSize: 10,
    color: Colors.white
  },
  textShare: {
    fontFamily: Fonts.type.light,
    fontWeight: '300',
    fontSize: 14,
    color: Colors.white,
    marginLeft: 10
  },
  text: {
    fontFamily: Fonts.type.base,
    fontWeight: '400',
    fontSize: 12,
    color: Colors.black,
  }
})
