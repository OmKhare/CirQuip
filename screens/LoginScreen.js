import React from 'react'
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import * as Yup from 'yup'
import AppText from '../components/AppText'
import {AppForm,AppFormField,SubmitButton} from '../components/forms'
import Screen from '../components/Screen'
import colors from '../config/colors'

const validationSchema = Yup.object().shape({
 email: Yup.string().required().email().label("Email"),
 password: Yup.string().required().min(5).label("Password")
})

function LoginScreen({ navigation }) {
 return (
 <KeyboardAvoidingView behavior="height" style={{flex:1}}>
 <ScrollView>

   <Screen style={styles.container}>
      <Image
      style = {styles.logo}
      source = {require("../assets/logo.png")}
      />
      <AppText style={styles.subHead}>Login to your account</AppText>
      <AppForm
      initialValues={{email:'', password:''}}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
      >
      <AppFormField 
         icon="email"
         placeholder="Email Id"
         autoCorrect={false}
         autoCapitalize="none"
         name="email"
         keyboardType = "email-address"
         textContentType="emailAddress"
         />
         <AppFormField
         autoCapitalize="none"
         autoCorrect={false}
         icon="lock"
         name="password"
         placeholder="Password"
         secureTextEntry
         textContentType="password"
         />
         <AppText style={styles.forget}>Forgot Password?</AppText>
         <SubmitButton title="Login" />
         <AppText style={styles.last}>Don't have an account?<TouchableOpacity onPress={()=> navigation.navigate('Signup')}><AppText style={styles.signup}>  SIGN UP</AppText></TouchableOpacity></AppText>
      </AppForm>

   </Screen>
 </ScrollView>
 </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
 container:{
  padding:10
 },
 logo:{
  marginTop: 40,
  width: 255,
  height: 140,
  alignSelf: 'center',
  margin: 10,
  marginBottom: 10,
 },
 subHead:{
  fontSize: 27,
  textAlign: 'center',
  color: colors.primary,
  marginTop: 45,
  marginBottom: 15
 },
 forget:{
  marginHorizontal: 10,
  color: colors.medium,
  paddingTop: 20,

 },
 last:{
  textAlign: 'center',
  color: colors.medium,
 },
 signup:{
  fontWeight:"500",
  color: colors.primary
 }
})


export default LoginScreen;