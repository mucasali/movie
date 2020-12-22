import React, { Component } from 'react'
import {
    View, Text, Image, ScrollView, Share,
    RefreshControl, TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux'
import moment from 'moment'

import {ImageReplacer, CustomFlatList} from '../../Components'
import {BASE_IMG, BASE_SHARE_URL} from '../../Constans/Data'
import Styles from '../Styles/Movie'
import MovieActions from '../../Redux/MovieRedux'
import BtnFavorite from '../Favorite/Button'

import Data from './data'

class PopularScreen extends Component {

  handleShare = (item) => {
    Share.share({
      url: `${BASE_SHARE_URL}${item.id}`,
      message: `${item.title} ${BASE_SHARE_URL}${item.id}`
    })
  }

  componentDidMount() {
    this.loadData(true)
  }

  loadData(reset = false) {
    this.props.getPopular(reset)
  }

  renderItem({item, index}) {
    try {
      const {
        poster_path, id, title, release_date, vote_average
      } = item
      const releaseDate = moment(release_date)
      const rating = (vote_average*10)

      return (
        <TouchableOpacity style={Styles.contentItem}>
          <View>
            <ImageReplacer source={{uri: `${BASE_IMG}${poster_path}`}} style={Styles.poster}/>
            <View style={Styles.containerRating}>
              <View style={Styles.contentRating}>
                <Text style={Styles.textRating}>{rating}</Text>
                <Text style={Styles.textPercent}> %</Text>
              </View>
            </View>
          </View>
          <View style={Styles.contentText}>
            <BtnFavorite
              movie={item}
              styleContainer={Styles.btnHeart}
              size={20}
            />
            <Text style={Styles.textTitle}>{title}</Text>
            <Text style={Styles.textDate}>{releaseDate.format('MMM DD, YYYY')}</Text>
          </View>
          <TouchableOpacity
            style={Styles.btnActions}
            onPress={() => {
              this.handleShare(item)
            }}
          >
            <Icon name="share-social-outline" size={15} color={'#FFF'}/>
            <Text style={Styles.textShare}>Share</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      )
    } catch(err) {
      console.tron.log('ERROR popular.renderItem ', err.message)
      return null
    }
  }

  render() {
    try {
      const {fetching, data, loadMore} = this.props.popular

      return (
        <View style={Styles.container}>
          <CustomFlatList
            data= { data }
            renderItem= { this.renderItem.bind(this) }
            numColumns={2}
            refreshing={ fetching }
            onRefresh={() => this.loadData(true)}
            keyExtractor={(item, index) => index.toString()}
            onEndReachedThreshold={1}
            onEndReached={(distance)=>{
              console.log('onEndReached ', distance)
              if(distance.distanceFromEnd > 0 && loadMore){
                this.loadData(false)
              }
            }}
          />
        </View>
      )
    } catch (err) {
      console.tron.log('ERROR Popular.render ', err.message)
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    popular: state.movie.popular
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPopular: (reset) =>
      dispatch(MovieActions.getPopularRequest(reset))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularScreen)
