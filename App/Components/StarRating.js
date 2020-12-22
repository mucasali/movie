import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const starRating = ({maxStar, countStar = 0, size, showCount}) => {

    var arr = [];
    var i = 0;
    var sumStar = -1;
    const star = countStar ? countStar : 0

    return(
      <View style={{ flexDirection:'row', marginVertical: 5 }}>
        {
          [...Array(maxStar)].map((x, i) => {
            sumStar++;
            return <Icon key={i} name="star" size={size} color={sumStar < countStar ? "#FEC30E" : "#b0acac"}/>
          })
        }
        { showCount ? <Text> {"("+star+")"}</Text> : null }
      </View>
    )
}

starRating.defaultProps = {
    maxStar: 5,
    countStar: 0,
    size: 20,
    showCount: true
}

export default starRating;
