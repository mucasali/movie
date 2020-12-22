import React, { Component } from 'react'
import { View } from 'react-native'

const styles = {
    container: {
        backgroundColor:'#FFF',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 2,
        paddingHorizontal: 10
    }
}

export const Card = ( props ) => {
    return (
        <View style={[ styles.container, props.style ]}>
            { props.children }
        </View>
    )
}
