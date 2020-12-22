import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Platform, Modal, DatePickerIOS} from 'react-native'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import moment from 'moment'

import { Colors } from '../Themes'
import styles from './Styles/DynamicSelect'

const OS = Platform.OS

export default class DateTimePicker extends Component{

  constructor(props){
    super(props)
    this.date = new Date()
    this.maxDate = new Date()
    this.state = {
      show: false,
      mode: 'date'
    }
  }

  componentDidMount(){
    if(this.props.maxDate){
      this.maxDate == this.props.maxDate
    }else{
      this.maxDate.setFullYear(this.maxDate.getFullYear()-15)
    }
  }

  show = (mode = 'date') => {
    this.setState({show: true, mode})
  }

  setDate = (event, date) => {
    console.tron.log('on setDate ', date, new Date(date), momentDate)
    const momentDate = moment(date).format('YYYY-MM-DD')
    this.date = new Date(date)
    this.setState({show: false})
    this.props.setFieldValue(this.props.name, momentDate)
  }

  renderDatePickeriOS(){
    if(OS != 'ios'){ return null}
    return (
      <Modal
          style={{flex:1}}
          animationType="slide"
          transparent={false}
          visible={this.state.show}
      >
        <View style={{flex:1, justifyContent:'center', padding: 10, backgroundColor: 'rgba(0,0,0,0.5)'}} >
          <View style={{ justifyContent: 'center', padding: 10, margin: 5, backgroundColor: '#FFF'}}>
            <DatePickerIOS
               date={this.date}
               maximumDate={this.maxDate}
               mode='date'
               onDateChange={ date => {
                 console.tron.log('chooseDate ', date)
                 this.date = date
               }}
            />
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <TouchableOpacity
                style={styles.btnAction}
                onPress={() => { this.setState({show: false }) }}
              >
                <Text style={styles.textCancel}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnAction}
                onPress={() => { this.setDate({}, this.date ) }}
              >
                <Text style={styles.textOk}>Ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )

  }

  render(){
    const {label, title, value, error, styleInput} = this.props
    const showError = error && error.length > 0 ? true : false;
    console.tron.log('DateTimePicker.render ', this.props, this.state, this.date)
    return(
      <View style={styles.container}>
        { label ? <Text style={styles.title}>{title}</Text> : null }
        <View style={styleInput}>
          <TouchableOpacity
            style={[styles.select, this.props.styleInputText]}
            onPress={ this.show }
          >
            {
              value
              ?   <Text style={styles.textValue}>{value}</Text>
              :   <Text style={styles.textPlaceHolder}>{this.props.placeholder}</Text>
            }
            <Icon name="chevron-right" size={ 25 } color={ Colors.grey } />
          </TouchableOpacity>
          {
            (this.state.show && OS == 'android') && <RNDateTimePicker
                value={this.date}
                mode={this.state.mode}
                is24Hour={true}
                display="spinner"
                onChange={this.setDate}
                maximumDate={this.maxDate}
              />
          }
          { this.renderDatePickeriOS() }
        </View>
        { showError ? <Text style={styles.textError} >{error}</Text> : null}
      </View>
    )
  }
}

DateTimePicker.defaultProps = {
  name: '',
  label: false,
  placeholder: '',
  title: '',
  value: '',
  showError: true,
  error: '',
  setFieldValue: () => {},
  styleInput: styles.input,
  maxDate: null
}
