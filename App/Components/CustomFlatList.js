import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'

import { EmptyContent } from './EmptyContent'
import { ErrorContent } from './ErrorContent'

export default class CustomFlatList extends Component{

  render(){

    if(this.props.error){
      return (
        <ErrorContent
          title={this.props.errorTitle}
          message={this.props.errorMessage}
          refreshing={this.props.refreshing}
          onRefresh={this.props.onRefresh}
        />
      )
    }
    try{
      return(
        <View style={[styles.container, this.props.styleContainer]}>
          <FlatList
            data={this.props.data}
            renderItem={this.props.renderItem}
            refreshing={this.props.refreshing}
            onRefresh={this.props.onRefresh}
            numColumns={this.props.numColumns}
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent={this.props.ListFooterComponent}
            ListEmptyComponent={ () => {
              if(this.props.renderEmpty){
                return this.props.renderEmpty()
              }
              return <EmptyContent title={this.props.emptyTitle} message={this.props.emptyMessage}/>
            }}
            contentContainerStyle={{ flexGrow: 1 }}
            onEndReached={this.props.onEndReached}
          />
        </View>
      )
    }catch(err){
      console.tron.error('CustomFlatList.render.error ')
      console.tron.log('CustomFlatList.render.error ', err.message)
      return null
    }
  }
}

CustomFlatList.defaultProps = {
  data: [],
  renderItem: ({item, index}) => { return null },
  renderEmpty: null,
  onRefresh: () => {},
  refreshing: false,
  onEndReached: distance => {},
  emptyTitle: "No Item Found",
  emptyMessage: "We don't have any item that you request",
  error: false,
  errorTitle: "Sorry something went wrong",
  errorMessage: "We appologize for the incovenience. please try again later.",
  errorTextButton: "Try again",
  ListFooterComponent: null,
  numColumns: 1
}

const styles = {
  container: {
    flex: 1
  }
}
