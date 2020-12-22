import React, { Component } from 'react'
import { View, Image } from 'react-native'

import { Images, Colors } from '../Themes'

export default class ImageReplacer extends Component{

    state = {
        loadError: false
    }

    constructor(props){
        super(props)
        this.mounted = false
    }

    componentDidMount(){
        this.mounted = true
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    onError = ( err ) => {
        console.tron.error('ImageReplacer.error ')
        console.tron.log('ImageReplacer.err  ', err, err.message)
        if( this.mounted ){
            this.setState({ loadError: true });
        }
    }

    render(){
        const { source } = this.props
        const sourceImage = !source || !source.uri || this.state.loadError ? this.props.defaultImage : source;
        if( sourceImage == null ){ return null }

        return(
            <Image
                source={ sourceImage }
                style={[{ backgroundColor: Colors.white }, this.props.style ]}
                onError={ this.onError }
                resizeMode={ this.props.resizeMode }
            />
        )
    }
}

ImageReplacer.defaultProps = {
    defaultImage: Images.placeholderImage,
    source: Images.placeholderImage,
    style: { backgroundColor: Colors.darkBlue },
    resizeMode: 'cover'
}
