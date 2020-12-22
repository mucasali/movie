import React, {Component} from 'react'
import {View, ScrollView, TouchableOpacity, Text} from 'react-native'
import {connect} from 'react-redux'

import PlaceHolder from '../Products/ItemPlaceholder'
import Product from '../Products/ItemWhislist'
import {Colors} from '../../Themes'
import WishlistActions from '../../Redux/WishlistRedux'

class Favorite extends Component{

    componentDidMount(){
        this.props.getData(true)
    }

    renderItem = (item, index) =>
      <View style={{width: 160}}>
          <Product wihslist={item} key={index} />
      </View>

    renderContent = (products) => (
        <ScrollView horizontal>
            {
                products && products.map(this.renderItem)
            }
        </ScrollView>
    )

    renderPlaceHolder = () => (
        <ScrollView horizontal>
            <View style={{width: 160}}>
                <PlaceHolder />
            </View>
            <View style={{width: 160}}>
                <PlaceHolder />
            </View>
            <View style={{width: 160}}>
                <PlaceHolder />
            </View>
        </ScrollView>
    )

    render(){
        const {data, fetchingReset} = this.props
        console.tron.log('ProductGrouping.render ', data)

        return(
            <View style={styles.container}>
                <View style={styles.contentRow}>
                    <Text style={styles.textTitle}>Favorite</Text>
                    <TouchableOpacity>
                        <Text style={styles.textShowAll}>Lihat Semua</Text>
                    </TouchableOpacity>
                </View>
                {
                    fetchingReset
                    ? this.renderPlaceHolder()
                    : this.renderContent(data)
                }
            </View>
        )
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Favorite)

const styles = {
    container: {
        flex: 1,
        padding: 10
    },
    contentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    textTitle: {
        fontSize: 14,
        color: Colors.purple,
        fontWeight:  '400'
    },
    textShowAll: {
        fontSize: 12,
        color: Colors.purple
    }
}
