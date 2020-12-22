import React, { Component } from 'react'
import { View, TextInput, Text, TouchableOpacity, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class InputSearch extends Component {

    state = {
        value: ""
    }

    onChange = ( text ) => {
        this.setState({ value: text.text })
    }

    clearValue = () => {
        this.setState({ value: "" })
    }

    render(){
        return(
            <View style={{flex:1, justifyContent: 'center'}}>
                <TextInput
                    placeholder="search"
                    style={ styles.input }
                    value={ this.state.value }
                    onChange={ this.onChange }
                />
                <TouchableOpacity style={ styles.button } onPress={ this.clearValue }>
                    <Icon name="clear" size={ 20 } />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        marginRight: 10,
        marginVertical: 10,
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    input: {
      margin: 3,
      marginHorizontal: 10,
      // paddingVertical: Platform.OS === 'ios' ? 10 : 0,
      backgroundColor: '#FFF',
      borderRadius: 10,
      padding: 10,
      height: 40
    },
    button: {
      position: 'absolute',
      right: 10,
      padding: 8
    }
}
