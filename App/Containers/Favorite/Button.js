import React, { Component } from 'react'
import { View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/AntDesign'
import { connect } from 'react-redux'

import { Colors } from '../../Themes'
import FavoriteActions from '../../Redux/FavoriteRedux'

class BtnFavorite extends Component {

    icon = () =>
        <Icon name="hearto" color={ this.props.colorIcon } size={this.props.size} />
    iconSaved = () =>
        <Icon name="heart" color={ this.props.colorIconSaved } size={this.props.size} />

    isSaved(){
      const { favorite, movie } = this.props

      if ( !favorite.data || !Array.isArray(favorite.data) || favorite.data.length < 1 ){
        return false
      }

      const index = favorite.data.findIndex( mov => (mov.id === movie.id))
      return ( index > -1 )
    }

    onPress = (isSaved) => {
      const {
        movie, navigation,
        deleteFavorite, addFavorite
      } = this.props
      if (isSaved){
        deleteFavorite(movie.id)
      } else {
        addFavorite(movie)
      }
    }

    render() {
      try {
        const {
          styleContainer,
          size,
          colorSaved,
          favorite,
          action
        } = this.props
        const {fetching, data} = favorite
        const {submitting, } = action

        if (submitting) { return <ActivityIndicator /> }
        const isSaved = this.isSaved()

        return(
          <TouchableOpacity style={ styleContainer } onPress={ () => this.onPress(isSaved)}>
            {  isSaved ? this.iconSaved() : this.icon() }
          </TouchableOpacity>
        )
      } catch (err) {
        console.tron.log('ERROR BtnFavorite ', err.message)
        return null
      }
    }
}

const styles = {
  container: {
    padding: 10
  }
}

BtnFavorite.defaultProps = {
  style: styles.container,
  size: 25,
  colorIcon: Colors.darkBlue,
  colorIconSaved: Colors.darkRed,
  movie: null
}

const mapStateToProps = state => {
  return {
    favorite: state.favorite.favorite,
    action: state.favorite.action,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addFavorite: (movie) =>
      dispatch(FavoriteActions.addFavoriteRequest(movie)),
    deleteFavorite: (movieId) =>
      dispatch(FavoriteActions.removeFavoriteRequest(movieId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BtnFavorite)
