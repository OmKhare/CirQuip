import React from 'react'
import {TouchableOpacity, StyleSheet, Text} from 'react-native'
import colors from '../config/colors'

function AppButton({title, onPress, color="primary"}){
 return(
  <TouchableOpacity style={[styles.AppButton, {backgroundColor: colors[color]}]} onPress={onPress}>
   <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
 )
}

const styles = StyleSheet.create({
 AppButton:{
  backgroundColor: colors.primary,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems:'center',
  padding: 15,
  marginVertical:10,
  marginHorizontal:10,
 },
 text:{
  color: '#fff',
  fontSize: 18, 
 }
})

export default AppButton;