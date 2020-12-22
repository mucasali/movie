import React, { Component } from 'react'
import { View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/AntDesign'
import { connect } from 'react-redux'

import { Colors } from '../../Themes'
import WishlistActions from '../../Redux/WishlistRedux'
// import ProfileActions from '../../Redux/ProfileRedux'

class BtnWishlist extends Component {

    icon = () =>
        <Icon name="hearto" color={ this.props.colorIcon } size={this.props.size} />
    iconSaved = () =>
        <Icon name="heart" color={ this.props.colorIconSaved } size={this.props.size} />

    isSaved(){
        const { wishlistIds, productStoreId } = this.props
        // console.tron.log("== isSaved == ", productStoreId, wishlistIds)
        if ( !wishlistIds || !Array.isArray(wishlistIds) || wishlistIds.length < 1 ){
            return false
        }
        return (wishlistIds.indexOf( productStoreId ) > -1 )
    }

    onPress = (isSaved) => {
        const {
            productStoreId, isLoggedIn, navigation,
            deleteWishlist, addWishlist
        } = this.props
        if (!isLoggedIn){
            navigation.navigate( "LoginScreen" )
        } else if (isSaved){
            deleteWishlist(productStoreId)
        } else {
            addWishlist(productStoreId)
        }
    }

    render() {
        const { styleContainer, size, colorSaved, fetching, productStoreId, productStoreIdState } = this.props
        if (fetching && ( productStoreId == productStoreIdState )) { return <ActivityIndicator /> }
        const isSaved = this.isSaved()
        // console.tron.log('renderBtnWishlist ', adsIds, isSaved)
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

BtnWishlist.defaultProps = {
    style: styles.container,
    size: 25,
    colorIcon: Colors.darkBlue,
    colorIconSaved: Colors.darkRed,
    productStoreId: ''
}

const mapStateToProps = state => {
    return {
        fetching: state.wishlist.actionWishlist.fetching,
        productStoreIdState: state.wishlist.actionWishlist.productStoreId,
        wishlistIds: state.session.wishlistIds,
        isLoggedIn: state.session.isLoggedIn,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addWishlist: (productStoreId) =>
          dispatch(WishlistActions.addWishlistRequest(productStoreId)),
        deleteWishlist: (productStoreId) =>
          dispatch(WishlistActions.deleteWishlistRequest(productStoreId))
    }
}

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(BtnWishlist))
