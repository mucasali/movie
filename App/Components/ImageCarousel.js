import React, {PureComponent} from 'react'
import {View, TouchableOpacity, Dimensions} from 'react-native'
import Carousel from 'react-native-snap-carousel'

import ImageReplacer from './ImageReplacer'

const { height, width } = Dimensions.get('window')

export default class ImageCarousel extends PureComponent {

  renderItem = ({item, index}) => {
    return (
      <ImageReplacer key={index}
          source={{ uri: "https://mybelanja.com/images/slider/kopnus_digi.jpg" }}
          resizeMode= "contain"
          style={this.props.styleImage}/>
    )
  }

  render(){
    return (
      <View style={this.props.styleContainer}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={ this.props.images }
          renderItem={this.renderItem}
          sliderWidth={width}
          itemWidth={width-20}
          autoplay={this.props.autoplay}
          autoplayDelay={100}
          autoplayInterval={3000}
          loop={true}
        />
      </View>
    )
  }
}

ImageCarousel.defaultProps = {
  images: [],
  autoplay: false,
  styleContainer: {
    flex: 1,
  },
  styleImage: {
    height: 300,
    width: null,
    borderRadius: 10,
    resizeMode: 'contain'
  },
}

const styles = {

}
