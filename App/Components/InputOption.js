import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity, FlatList, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Colors, Fonts } from '../Themes'

const OS = Platform.OS

const sampledata = {
    title: "This property no longer available",
    option: {
        select: true,
        unselect: false
    }
}

export default class InputMultiSelect extends PureComponent {

    state = {
        select: ""
    }

    iconSelect = <Icon name="checkbox-marked" size={20} color={Colors.purple} />
    iconUnSelect = <Icon name="checkbox-blank-outline" size={20} color={Colors.purple} />

    onSelect= () => {
        const { name, values, select, unselect } = this.props
        if(values == select){
            this.props.setFieldValue(name, unselect)
        }else{
            this.props.setFieldValue(name, select)
        }
    }

    render() {
      try{
        const {
            style, styleTitle, title,
            errors, name, values, select
        } = this.props
        const showError = !!(errors && errors.length > 0);

        return(
            <View >
                <TouchableOpacity
                    style={ styles.contentItem }
                    onPress={this.onSelect}
                >
                    { values == select ? this.iconSelect : this.iconUnSelect }
                    <Text style={ styles.textItem }>{title}</Text>
                </TouchableOpacity>
                {
                    showError ? <Text style={styles.textError}>{errors}</Text> : null
                }
            </View>
        )
      }catch(err){
        console.tron.error('InputOption.error')
        console.tron.log('err ', err.message)
        return null
      }
    }
}

const styles = {
    container: {
        marginVertical: OS === 'ios' ? 2 : 3,
    },
    content: {
        paddingVertical: 5
    },
    contentItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        paddingLeft: 0
    },
    title: {
    },
    textItem: {
        fontFamily: Fonts.type.regular,
        fontWeight: '400',
        color: Colors.lightBlack,
        marginLeft: 5
    },
    textError: {
      textAlign: 'left',
      fontSize: 10,
      color: 'red',
      paddingHorizontal: 5,
      fontFamily: Fonts.type.regular,
    },
}

InputMultiSelect.defaultProps = {
    style: styles.container,
    styleTitle: styles.title,
    name: "",
    title: "",
    select: true,
    unselect: false,
    values: false,
    errors: "",
    setFieldValue: (select) => {}
}
