import React, { Component } from 'react'
import { View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/AntDesign'
import { connect } from 'react-redux'

import { Colors } from '../../Themes'
import FavoriteActions from '../../Redux/FavoriteRedux'
// import ProfileActions from '../../Redux/ProfileRedux'

class BtnFavorite extends Component {

    icon = () =>
        <Icon name="hearto" color={ this.props.colorIcon } size={this.props.size} />
    iconSaved = () =>
        <Icon name="heart" color={ this.props.colorIconSaved } size={this.props.size} />

    isSaved(){
        const { favoriteIds, productStoreId } = this.props
        // console.tron.log("== isSaved == ", productStoreId, favoriteIds)
        if ( !favoriteIds || !Array.isArray(favoriteIds) || favoriteIds.length < 1 ){
            return false
        }
        return (favoriteIds.indexOf( productStoreId ) > -1 )
    }

    onPress = (isSaved) => {
        const {
            productStoreId, isLoggedIn, navigation,
            deleteFavorite, addFavorite
        } = this.props
        if (!isLoggedIn){
            navigation.navigate( "LoginScreen" )
        } else if (isSaved){
            deleteFavorite(productStoreId)
        } else {
            addFavorite(productStoreId)
        }
    }

    render() {
        const { styleContainer, size, colorSaved, fetching, productStoreId, productStoreIdState } = this.props
        if (fetching && ( productStoreId == productStoreIdState )) { return <ActivityIndicator /> }
        const isSaved = this.isSaved()
        // console.tron.log('renderBtnFavorite ', adsIds, isSaved)
        return(
            <TouchableOpacity style={ styleContainer } onPress={ () => this.onPress(isSaved)}>
                {  isSaved ? this.iconSaved() : this.icon() }
            </TouchableOpacity>
        )
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
    productStoreId: ''
}

const mapStateToProps = state => {
    return {
        fetching: state.favorite.actionFavorite.fetching,
        productStoreIdState: state.favorite.actionFavorite.productStoreId,
        favoriteIds: state.session.favoriteIds,
        isLoggedIn: state.session.isLoggedIn,
    }
}


const mapDispatchToProps = dispatch => {
  return {
      addFavorite: (productStoreId) =>
        dispatch(FavoriteActions.addFavoriteRequest(productStoreId)),
      deleteFavorite: (productStoreId) =>
        dispatch(FavoriteActions.deleteFavoriteRequest(productStoreId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BtnFavorite)
