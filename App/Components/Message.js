// import React from 'react'
// import {View, Text, TouchableOpacity, Dimensions, Platform} from 'react-native'
//
// import config from '../../config'
//
// const {height, width} = Dimensions.get('window');
//
// export default ({message, theme}) =>{
//     // console.log('on message', message, theme)
//     let backgorund = config.color.primary;
//
//     switch (theme) {
//         case 'success': backgorund = config.color.success; break;
//         case 'warning': backgorund = config.color.warning; break;
//         case 'primary': backgorund = config.color.primary; break;
//         default:
//     }
//
//     return(
//         <View style={[styles.container, {backgroundColor: backgorund}]}>
//             <Text>{message}</Text>
//         </View>
//     )
// }
//
// const styles = {
//     container: {
//         top: Platform.OS === 'ios' ? 20 : 0,
//         height: (height/10),
//         width: (width-20),
//         padding: 10,
//         marginHorizontal: 10,
//         borderRadius: 5,
//         alignItems: 'flex-start',
//         justifyContent: 'center'
//     },
//     message: {
//         color: '#fff',
//         fontFamily: config.fontFamily,
//         fontSize: 14
//     }
// }
