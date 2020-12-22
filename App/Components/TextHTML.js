
import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import HTML from 'react-native-render-html'

import { Fonts, Colors } from '../Themes'

const { width } = Dimensions.get('window')

export default class TextHTML extends PureComponent {

    state = {
        expand: false
    }

    expand(){
        this.setState({
            expand: !this.state.expand
        })
    }

    renderExpander(){
        return(
            <View style={ styles.contentButton }>
                <TouchableOpacity onPress={ this.expand.bind(this) }>
                    <Text style={ styles.textExpander }>
                        { this.state.expand ? "READ LESS" : "READ MORE" }
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    render(){
        const { text, style, limit } = this.props
        const styleContainer = this.state.expand ? { flex: 1 } : { flex: 1, maxHeight: limit }
        
        try{
            return(
                <HTML
                    html={ this.props.text }
                    imagesMaxWidth={ width-20 }
                    baseFontStyle={ this.props.style }
                />
            )
        }catch( err ){
            return <Text style={ this.props.style } >{this.props.text}</Text>
        }

    }

}
// return(
//     <View style={ styleContainer }>
//         <HTML
//             style={ styleContainer }
//             html={ this.props.text }
//             imagesMaxWidth={ width-20 }
//             baseFontStyle={ this.props.style }
//         />
//         { this.renderExpander() }
//     </View>
// )

TextHTML.defaultProps = {
    text: "",
    style: {
        fontSize: Fonts.size.medium,
        fontFamily: Fonts.type.regular,
        color: Colors.black,
        lineHeight: 24
    },
    limit: 300
}

const styles = {
    container: {
        marginVertical: 10
    },
    contentButton: {
        alignItems: 'flex-end',
        marginVertical: 5
    },
    textExpander: {
        fontSize: Fonts.size.medium,
        fontFamily: Fonts.type.small,
        color: Colors.red,
        lineHeight: 24
    }
}
