import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

const starRating = ({
  maxStar,
  countStar,
  size,
  scale,
  title,
  name,
  value,
  error,
  setFieldValue,
  setFieldTouched,
  editable,
  titleColor,
  starColor,
  activeStarColor,
  styleInput
  }) => {

  var arr = [];
  var i = 0;
  var sumStar = -1;

  return(
    <View style={styles.container}>
      {
          title ? <Text style={styles.title}>{title}</Text> : null
      }
      <View style={styleInput}>
        <View style={{flexDirection:'row'}}>
          {
            [...Array(maxStar)].map((x, i) => {
              sumStar++;
              if(!editable){
                return <Icon
                  key={i}
                  name="star"
                  size={size}
                  color={i < value ? activeStarColor : starColor}
                />
              }

              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    setFieldValue(name, (i+1))
                    setFieldTouched(name, true)
                  }}
                >
                  <Icon
                    name="star"
                    size={size}
                    color={i < value ? activeStarColor : starColor}
                  />
                </TouchableOpacity>
              )
            })
          }
        </View>
    </View>
  </View>
  )
}

starRating.defaultProps = {
  maxStar: 5,
  countStar: 0,
  scale: 5,
  size: 12,
  title: "",
  name: "",
  value: "",
  error: "",
  setFieldValue: ()=>{},
  setFieldTouched: () => {},
  editable: true,
  titleColor: '#FFF5',
  starColor: '#C4CAD3',
  activeStarColor: '#FFB055',
  styleInput: styles.input
}

export default starRating;
