import React, { Component } from 'react'
import { View, Text, Modal, TouchableOpacity, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
// import { connect } from 'react-redux'

import RoundedButton from './RoundedButton'
import { Colors } from '../Themes'
import styles from './Styles/DynamicSelect'

const extras = [
    { title: "Near LRT / MRT / KTM / BRT", value: "accessibility" },
    { title: "Include Parking", value: "parking" },
    { title: "Pet Friendly", value: "pet" },
    { title: "Eco", value: "eco" }
]

class DynamicSelect extends Component {

    constructor(props){
        super(props)
        this.state = {
            showModal: false,
            selectedValue: props.values,
            values: props.values,
        }
    }

    setModalVisible() {
        this.setState({ showModal: !this.state.showModal })
    }

    onSubmit() {
        this.props.onSubmit( this.state.selectedValue )
        this.setModalVisible()
    }

    onCancel() {
        this.setState({ selectedValue: this.selectedValueCache })
        this.setModalVisible()
    }

    onSelect(value, index) {
        let arr = [...this.state.selectedValue]
        if (arr.indexOf(value) >= 0) {
            arr.splice(arr.indexOf(value), 1)
        } else {
            arr.splice(index, 0, value)
        }
        this.setState({ selectedValue: arr })
    }

    _renderModal(){
        const data = this.props.useExtras ? extras : this.props.data
        return (
            <Modal
                animationType="fade"
                transparent={true}
                onShow={ () => { this.selectedValueCache = [...this.state.selectedValue] }}
                visible={this.state.showModal}
                onRequestClose={() => {
                    this.setModalVisible()
                }}>
                <View style={ styles.modalContainer }>
                    <View style={ styles.modalContent }>
                        <View style={ styles.modalTextContent }>
                            <Text style={styles.modalTitle}>{ this.props.title }</Text>
                        </View>

                        <FlatList
                            data={ data }
                            renderItem={this._renderItem}
                  					keyExtractor={(item, index) => index.toString() }
                            contentContainerStyle={{ padding: 20 }}
                        />

                        <View style={ styles.modalButtonContent }>
                            <RoundedButton
                                onPress={() => this.onCancel()}
                                textStyle={styles.cancelButton}
                                textColor={Colors.darkBlue}
                                backgroundColor={Colors.transparent}
                                containerStyle={styles.buttonContainer}
                                text={'cancel'.toUpperCase()}
                            />
                            <RoundedButton
                                onPress={() => this.onSubmit()}
                                textStyle={styles.selectButton}
                                textColor={Colors.white}
                                backgroundColor={Colors.darkBlue}
                                containerStyle={styles.buttonContainer}
                                text={'select'.toUpperCase()}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }

    _renderItem = ({ item, index }) => {
        const { selectedValue } = this.state
        return (
            <TouchableOpacity key={ index } style={ styles.modalItemContent } onPress={() => this.onSelect(item.value, index)}>
                <Text style={ styles.modalItemText }>{item.title}</Text>
                <View >
                    {
                        selectedValue.indexOf(item.value) >= 0
                        ? <Icon name='check-box' color={Colors.darkBlue} size={20} />
                        : <Icon name='check-box-outline-blank' color={Colors.darkBlue} size={20} />
                    }
                </View>
            </TouchableOpacity>
        )
    }

    getTitleValue = () => {
        const {data, values, keyName, keyValue} = this.props
        let titleValue = ""
        data && data.map((item, index) => {
            const include = values.includes(item[keyValue])
            if(include){
                titleValue += item[keyName]+", "
            }
        })
        return titleValue
    }

    _renderTextValue = ( values ) => {
        let value = ""
        if ( values && values.length >= 4 ){
            value = `${values.length} items selected`
        } else {
            value = this.getTitleValue()
        }
        return <Text style={ styles.textValue }>{ value }</Text>
    }

  render() {
    // console.tron.log('render.DynamicSelect ', this.props)
    const { errors, values, placeholder, title } = this.props
    const showError = errors && errors.length > 0 ? true : false;

    const textPlaceHolder = <Text style={ styles.textPlaceHolder }>{ placeholder }</Text>

    return (
      <View>
        <View style={styles.container}>
          {this.props.label ? <Text style={this.props.styleTitle}>{this.props.title}</Text> : null}
          {this.props.desc ? <Text style={this.props.styleDesc}>{this.props.desc}</Text> : null}
          <View style={[this.props.styleInput]}>
            <TouchableOpacity
              style={[styles.select, this.props.styleInputText]}
              onPress={ () => { this.setModalVisible() } }
            >
                { values && values.length > 0 ? this._renderTextValue( values ) : textPlaceHolder }
                <Icon name="keyboard-arrow-right" size={ 25 } color={ Colors.grey } />
            </TouchableOpacity>
            { showError ? <Text style={ styles.textError } >{ errors }</Text> : null}
          </View>
        </View>
        { this._renderModal() }
      </View>
    )
  }
}

DynamicSelect.defaultProps = {
    useExtras: false,
    title: "no-title",
    placeholder: "no-placeholder",
    data: [],
    onSubmit: ( selctedValue ) => {},
    values: [],
    errors: "",
    styleInput: styles.input,
    styleInputText: {},
    styleTitle: styles.title,
    styleDesc: styles.desc
}

export default DynamicSelect
