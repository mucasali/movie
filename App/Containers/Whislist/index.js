import React, { Component } from 'react'
import { View, FlatList, Text, ActivityIndicator, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'

import { Colors, Styles } from '../../Themes'
import { InputSearch, CustomFlatList } from '../../Components'
import ProductItem from '../Products/ItemWhislist'
import WishlistActions from '../../Redux/WishlistRedux'

class Wishlist extends Component{

    static navigationOptions = ({ navigation }) => ({
        headerTitle: "Barang Favorit"
    })

    toDetail = ( product )=>{
        console.tron.log('toDetail ', this.props, product)
        this.props.navigation.navigate("ProductDetailScreen", { product: product })
    }

    param = {}
    categoryParent = {}

    componentDidMount(){
      const loadWishlist = this.props.navigation.getParam('loadWishlist', false)
      if(loadWishlist){
        this.props.getData(true)
      }
    }

    renderSearch(){
      return (
        <View style={{height: 60, padding: 10}}>
          <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.lightGrey,
              borderRadius: 5,
              paddingHorizontal: 5
            }}>
            <TextInput
              placeholder="Pencarian Barang Favorit"
              style={{
                flex:1
              }}
            />
          <Icon name="search" size={30}/>
          </View>
        </View>
      )
    }

    renderItem({ item, index }){
        return <ProductItem
                wihslist={ item }
                key={ index }
               />
    }

    renderLoading = () => {
        if(this.props.fetching){
            return (
                <View style={{alignItems: 'center', margin: 10}}>
                    <ActivityIndicator />
                </View>
            )
        }
        return null
    }

    _keyExtractor = (item, index) => index.toString()

    render(){
      const { fetchingReset, fetching, data, loadMore, getData } = this.props
      console.tron.log('ProductScreen.render ', this.props)
      return(
        <View style={ Styles.container }>
          { this.renderSearch() }
          <CustomFlatList
              data= { data }
              renderItem= { this.renderItem.bind(this) }
              numColumns={ 2 }
              refreshing={ fetchingReset }
              onRefresh={ () => this.props.getData( true, this.param ) }
    					keyExtractor={ this._keyExtractor }
              ListFooterComponent={this.renderLoading}
              onEndReachedThreshold={1}
              onEndReached={(distance)=>{
                  console.log('onEndReached ', distance)
                  if(distance.distanceFromEnd > 0 && loadMore){
                      this.props.getData(false, this.param)
                  }
              }}
          />
        </View>
      )
    }
}

Wishlist.defaultProps = {
    navigator: {}
}

const mapStateToProps = state => ({
    fetchingReset: state.wishlist.wishlists.fetchingReset,
    fetching: state.wishlist.wishlists.fetching,
    data: state.wishlist.wishlists.data,
    loadMore: state.wishlist.wishlists.loadMore
})

const mapDispatchToProps = dispatch => {
    return {
        getData: (reset) => dispatch(WishlistActions.getWishlistRequest(reset))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);

const styles = {
    content: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentCategory: {
        padding: 10
    },
    textCategory: {
        fontSize: 16,
        color: Colors.darkBlue,
        fontWeight: '500'
    }
}
