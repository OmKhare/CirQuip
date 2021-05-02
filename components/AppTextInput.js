import React from 'react'
import { View,StyleSheet } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TextInput } from 'react-native'
import colors from '../config/colors'
import defaultStyles from '../config/styles'

function AppTextInput({icon,...otherProps}) {
 return (
  <View style={[styles.container]}>
   {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon}/>}
   <TextInput placeholderTextColor={colors.medium} style={defaultStyles.text} {...otherProps}/>
  </View>
 )
}

const styles = StyleSheet.create({
 container:{
  backgroundColor: 'white',
  borderRadius:10,
  flexDirection:'row',
  padding:15,
  marginVertical: 10,
  borderWidth:1,
  borderColor: colors.primary,
  marginHorizontal: 10
 },
 icon:{
  marginRight:10,
 }
})


export default AppTextInput;