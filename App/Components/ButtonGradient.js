import React, {Component} from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import {Colors, Fonts} from '../Themes'

export class ButtonGradient extends Component{

    render(){
        return(
            <TouchableOpacity onPress={this.props.onPress}>
                <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={[Colors.main1, Colors.main2]}
                    style={[styles.container, this.props.style]}
                >
                <Text style={styles.text}>{this.props.text}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
}

const styles = {
    container: {
        height: 36,
        width: null,
        paddingHorizontal: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10
    },
    text: {
        color: Colors.white,
        fontWeight: 'bold'
    }
}
