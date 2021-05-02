import React, { useState, useRef, useEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import AppText from '../components/AppText'
import Screen from '../components/Screen'
import colors from '../config/colors'

export default function OtpScreen({email}) {
 const defaultCountdown = 30;
 let clockCall = null
  let textInput = useRef(null)
 const lengthInput = 4;
 const [internalVal, setInternalVal] = useState("")
 const onChangeText = (val) => {
  setInternalVal(val)
 }
 const [countdown, setCountdown] = useState(defaultCountdown)
 const [enableResend, setEnableResend] = useState(false)
 const onResendOTP = () => {
   if(enableResend){
     setCountdown(defaultCountdown)
     setEnableResend(false)
     clearInterval(clockCall)
     clockCall = setInterval(() => {
       decrementClock()
     },1000)
   }
 }
 useEffect(()=>{
   clockCall = setInterval(()=>{
     decrementClock();
   },1000)
   return () => {
     clearInterval(clockCall)
   }
 })

 const decrementClock = () => {
   if(countdown===0){
     setEnableResend(true)
     setCountdown(0)
     clearInterval(clockCall)
   }
   else{
     setCountdown(countdown-1)
   }
 }

 useEffect(() => {
  textInput.focus()
 }, [])

 return (
  <Screen>
   <View style={styles.container}>
    <KeyboardAvoidingView
     keyboardVerticalOffset={50}
     behavior="height"
     style={styles.containerAvoidingView}
    >
     <AppText style={styles.text}>{"Enter the 4 digit code sent to:"}</AppText>
     <AppText style={styles.email}>{email}</AppText>
     <AppText style={styles.subtext}>We've sent a 4 digit code to your email address. Please enter the verification code.</AppText>
     <View>
      <TextInput
       ref = {(input) => textInput = input}
       onChangeText={onChangeText}
       style={{width:0,height:0}}
       value={internalVal}
       maxLength={lengthInput}
       returnKeyType="done"
       keyboardType="numeric"
      />
      <View style={styles.containerInput}>
       {
        Array(lengthInput).fill().map((data, index)=> (
         <View 
          key={index}
          style={[styles.cellView,  {borderBottomColor: index === internalVal.length ? colors.primary: colors.medium}]}
          >
          <Text 
           style={styles.cellText} 
           onPress={()=> textInput.focus()}
           >
            {internalVal && internalVal.length > 0 ? internalVal[index] : ""}
           </Text>
         </View>
        ))
       }
      </View>
     </View>
     <View style={styles.bottomView}>
       <TouchableOpacity onPress={onResendOTP}>
         <View styles={styles.btnResend}>
           <AppText 
           style={[styles.textResend,
           {
             color: enableResend ? colors.primary: 'gray'
           }]}
           >Resend OTP ({countdown})</AppText>
         </View>
       </TouchableOpacity>
     </View>
    </KeyboardAvoidingView>
   </View>
  </Screen>
 )
}

const styles = StyleSheet.create({
 container:{
  flex:1
 },
 containerAvoidingView:{
  flex:1,
  alignItems: 'center',
  padding:10,
 },
 text:{
  marginTop: 30,
  fontSize:25
 },
 containerInput:{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
 },
 cellView:{
  paddingVertical: 11,
  width: 40,
  margin: 5,
  justifyContent: 'center',
  alignItems: 'center',
  borderBottomWidth: 1.5,
 },
 cellText:{
  textAlign: 'center',
  fontSize: 20
 },
 email:{
  fontSize:20,
  color: colors.primary,
  marginVertical: 20,
  fontWeight: '500'
 },
 subtext:{
  fontSize: 19,
  marginBottom: 80,
  color: colors.medium,
  textAlign: 'center'
 },
 bottomView: {
   flexDirection: 'row',
   flex:1,
  //  justifyContent: 'flex-end',
   marginBottom: 20,
   alignItems: 'center',
   alignItems: 'flex-end'
 },
 btnResend:{
   width: 150,
   height:50,
   borderRadius: 10,
   alignItems: 'flex-end',
   justifyContent: 'center'
 },
 textResend:{
   alignItems: 'center',
   fontSize: 20
 }
})

