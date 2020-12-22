import React from 'react'
import { Text, Image } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import PopularScreen from '../Containers/Popular'
import FavoriteScreen from '../Containers/Favorite'

import { Images, Colors, Fonts, ApplicationStyles } from '../Themes'

const styles = {
    icon: {
      height: 30,
      width: 30
    },
    iconHome: {
      height: 50,
      width: 50,
      bottom: 5,
      position: 'absolute'
    },
    iconCommunity: {
      height: 25,
      width: 40
    }
}

const TopTab = createMaterialTopTabNavigator({
  Popular: {
    screen: PopularScreen,
    navigationOptions: ( navigation ) => ({
      title: "Popular",
    })
  },
  Favorite: {
    screen: FavoriteScreen,
    navigationOptions: ( navigation ) => ({
      title: "Favorite",
    })
  },
},
{
    initialRouteName: "Popular",
    tabBarOptions: {
      tintColor: Colors.white,
      activeTintColor: Colors.black,
      inactiveTintColor: Colors.grey,
      labelStyle: {
        fontWeight: '600',
        fontFamily: Fonts.type.base,
      },
      indicatorStyle: {
        backgroundColor: Colors.darkYellow,
      },
      style: {
        // height: 40,
        backgroundColor: 'white'
      }
    }
})

export default TopTab;
