
import { Platform } from 'react-native'

import {Fonts, Colors} from '../Themes'

const OS = Platform.OS;

const styles = {
    container: {
        marginVertical: OS == 'ios' ? 2 : 5,
    },
    title: {
      paddingLeft: 5,
      fontSize: Fonts.size.normal,
      fontFamily: Fonts.type.regular,
      color: Colors.darkBlue,
      fontWeight: '500',
      letterSpacing: 1,
    },
    titleSelect: {
        color: Colors.purple,
        fontSize: 14
    },
    input: {
        // // height: 40,
        // margin:2,
        // // padding:10,
        // paddingVertical: OS == 'ios' ? 12 : 0,
        // borderColor:'#CFD0D0',
        // borderWidth:1,
        // borderRadius: 30,
        // justifyContent: 'center'
        flex: 1,
        margin: 3,
        paddingVertical: Platform.OS === 'ios' ? 10 : 0,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    contentNoImage: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.background,
      padding: 30
    },
    select: {
        flexDirection: 'row',
        height: 40,
        margin:2,
        padding:10,
        borderColor:'#CFD0D0',
        borderWidth:1,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    checkbox: {
        height:40,
        margin:2,
        padding:10,
        paddingVertical: OS == 'ios' ? 12 : 0,
        justifyContent: 'center'
    },
    textError: {
        textAlign: 'left',
        fontSize: 10,
        color: 'red',
        paddingHorizontal: 5
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5,
        borderWidth: .5,
        borderColor: 'grey',
        resizeMode: 'contain'
    }
}

export default styles;
