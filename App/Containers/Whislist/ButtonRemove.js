import React, { Component } from 'react'
import { View, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'

import { Colors } from '../../Themes'
import WishlistActions from '../../Redux/WishlistRedux'
// import ProfileActions from '../../Redux/ProfileRedux'

class BtnWishlist extends Component {

    onPress = () => {
        const {
            productStoreId, isLoggedIn, navigation,
            deleteWishlist, name
        } = this.props
        if (!isLoggedIn){
            navigation.navigate( "LoginScreen" )
        } else {
            Alert.alert(
                "Hapus Favorit",
                `Hapus product ${name} dari Favorite`,
                [
                    {text: 'Batal', style: 'cancel'},
                    {text: 'Hapus', onPress: () => {
                        deleteWishlist(productStoreId)
                    }}
                ]
            )
        }
    }

    render() {
        const { styleContainer, size, fetching, productStoreId, productStoreIdState } = this.props
        if (fetching && ( productStoreId == productStoreIdState )) { return <ActivityIndicator /> }

        // console.tron.log('renderBtnWishlist ', adsIds, isSaved)
        return(
            <TouchableOpacity style={ styleContainer } onPress={ () => this.onPress()}>
                <Icon name="trash" color={ Colors.darkRed } size={this.props.size} />
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
    productStoreId: '',
    name: ''
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
        deleteWishlist: (productStoreId) =>
          dispatch(WishlistActions.deleteWishlistRequest(productStoreId))
    }
}

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(BtnWishlist))
