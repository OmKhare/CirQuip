import React from 'react'
import {TouchableOpacity, StyleSheet, Text} from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function AppButton({ options, text, icon }){
 return(
  <TouchableOpacity style={styles.AppButton}>
   <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon}/>
   <ModalDropdown 
   style={styles.modal}
   options={options} 
   defaultValue={text} 
   textStyle={styles.text}
   dropdownStyle={{borderRadius:10 ,marginTop:5 , paddingRight:10 ,width:320, height:200, borderWidth:1, borderColor: colors.primary }}
   dropdownTextStyle={{height:46, borderColor:colors.primary, alignItems:'center', justifyContent:'center',fontSize:17, fontWeight: '300', color:colors.medium, marginHorizontal: 5}}
   />
  </TouchableOpacity>
 )
}

const styles = StyleSheet.create({
 AppButton:{
  flexDirection: 'row',
  backgroundColor: 'white',
  borderRadius: 10,
  padding: 15,
  marginVertical:10,
  marginHorizontal:10,
  borderWidth: 1,
  borderColor: colors.primary
 },
 text:{
  color: colors.medium,
  fontSize: 17, 
  fontWeight: '300',
  marginLeft:10,
  flex:1
 },
 modal:{
  flex:1
 }
})

export default AppButton;
