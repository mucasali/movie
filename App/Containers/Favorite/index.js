import React, { Component } from 'react'
import {
    View, Text, Image, ScrollView, Share,
    RefreshControl, TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux'
import moment from 'moment'

import FavoriteActions from '../../Redux/FavoriteRedux'
import {ImageReplacer, CustomFlatList, TextLimiter} from '../../Components'
import {BASE_IMG, BASE_SHARE_URL} from '../../Constans/Data'
import Styles from '../Styles/Movie'

import Data from '../Popular/data'

class FavoriteScreen extends Component {

  handleShare = (item) => {
    Share.share({
      url: `${BASE_SHARE_URL}${item.id}`,
      message: `${item.title} ${BASE_SHARE_URL}${item.id}`
    })
  }

  renderItem({item, index}) {
    try {
      const {
        poster_path, id, title, release_date, vote_average,
        overview,
      } = item
      const releaseDate = moment(release_date)
      const rating = (vote_average*10)

      return (
        <TouchableOpacity style={Styles.contentItemFavorite}>
          <View style={{flex: .6}}>
            <ImageReplacer
              source={{uri: `${BASE_IMG}${poster_path}`}}
              style={Styles.poster}/>
            <View style={Styles.containerRating}>
              <View style={Styles.contentRating}>
                <Text style={Styles.textRating}>{rating}</Text>
                <Text style={Styles.textPercent}> %</Text>
              </View>
            </View>
          </View>
          <View style={{flex: 1, paddingHorizontal: 5}}>
            <View style={Styles.contentText}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <Text style={Styles.textTitle}>{title}</Text>
                  <Text style={[Styles.textDate, {marginVertical: 5}]}>
                    {releaseDate.format('MMM DD, YYYY')}
                  </Text>
                </View>
                <TouchableOpacity
                  style={Styles.btnShare}
                  onPress={() => {
                    this.handleShare(item)
                  }}
                >
                  <Icon name="share-social" size={15} color={'black'}/>
                </TouchableOpacity>
              </View>
              <TextLimiter
                text={overview}
                limit={250}
                expand={true}
                styleText={Styles.text}
              />
            </View>
            <TouchableOpacity
              style={Styles.btnDeleteHeart}
              onPress={() => {
                this.props.removeFavorite(id)
              }}
            >
              <Icon name="heart-outline" size={15} color={'#FFF'}/>
              <Text style={Styles.textShare}>Remove Favorite</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )
    } catch(err) {
      console.tron.log('ERROR popular.renderItem ', err.message)
      return null
    }
  }

  render() {
    try {
      const {fetching, data, loadMore} = this.props.favorite

      return (
        <View style={Styles.container}>
          <CustomFlatList
            data= { data }
            renderItem= { this.renderItem.bind(this) }
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
    favorite: state.favorite.favorite
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFavorite: movieId =>
      dispatch(FavoriteActions.removeFavoriteRequest(movieId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteScreen)
