import React, { Component } from 'react'
import { View, Text, Modal, TouchableOpacity, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import { connect } from 'react-redux'

import RoundedButton from './RoundedButton'
import { Colors } from '../Themes'
import styles from './Styles/DynamicSelect'

class DynamicOptions extends Component {

    state = {
        showModal: false,
        selectedValue: {},
        values: '',
    }

    setModalVisible() {
        this.setState({ showModal: !this.state.showModal })
    }

    onSubmit() {
      this.setModalVisible()
      this.props.onSubmit( this.state.selectedValue )
    }

    onCancel() {
        this.setState({ selectedValue: this.selectedValueCache })
        this.setModalVisible()
    }

    onSelect(value, index) {
        this.setState({ selectedValue: value })
    }

    _renderModal(){

        return (
            <Modal
                animationType="fade"
                transparent={true}
                onShow={ () => { this.selectedValueCache = this.state.selectedValue }}
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
                            data={ this.props.data }
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
        let selected = false
        if ( this.props.keyValue ){
            selected = ( selectedValue[ this.props.keyValue ] == item[ this.props.keyValue ] )
        } else {
            selected = ( selectedValue == item )
        }

        return (
            <TouchableOpacity key={ index } style={ styles.modalItemContent } onPress={() => this.onSelect(item, index)}>
                <Text style={ styles.modalItemText }>{item.title}</Text>
                <View >
                    {
                        selected
                        ? <Icon name='circle' color={Colors.darkBlue} size={20} />
                        : <Icon name='circle-outline' color={Colors.darkBlue} size={20} />
                    }
                </View>
            </TouchableOpacity>
        )
    }

    _renderTextValue = ( value ) => {
        let val = value
        if ( this.props.keyName ){
            val = value[ this.props.keyName ]
        }

        return <Text style={ styles.textValue }>{ val }</Text>
    }

    render() {
        // console.tron.log('render.DynamicOptions ', this.props)
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
                  { values ? this._renderTextValue( values ) : textPlaceHolder }
                  <Icon name="chevron-right" size={ 25 } color={ Colors.grey } />
                </TouchableOpacity>
                { showError ? <Text style={ styles.textError } >{ errors }</Text> : null}
              </View>
            </View>
            { this._renderModal() }
          </View>
        )
    }
}

DynamicOptions.defaultProps = {
    title: "no-title",
    placeholder: "no-placeholder",
    data: [],
    keyName: "",
    keyValue: "",
    onSubmit: ( selctedValue ) => {},
    values: "",
    errors: "",
    styleInput: styles.input,
    styleInputText: {},
    styleTitle: styles.title,
    styleDesc: styles.desc
}

export default DynamicOptions
