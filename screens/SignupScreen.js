import React from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'
import * as Yup from 'yup'
import AppText from '../components/AppText'
import {AppForm,AppFormField,SubmitButton} from '../components/forms'
import Screen from '../components/Screen'
import colors from '../config/colors'

const validationSchema = Yup.object().shape({
 firstName: Yup.string().required().label("FirstName"),
 lastName: Yup.string().required().label("LastName"),
 email: Yup.string().required().email().label("Email"),
 password: Yup.string().required().min(5).label("Password"),
 confirmPassword: Yup.string().required().min(5).label("ConfirmPassword"),
 phone: Yup.string().required().min(10).label("Phone")
})

function LoginScreen({ navigation }) {
 return (
  <KeyboardAvoidingView behavior="height" style={{flex:1}}>
   <ScrollView>
    <Screen style={styles.container}>
     <AppText style={styles.subHead}>Create account</AppText>
     <AppForm
      initialValues={{firstName: '', email:'', password:'', confirmPassword: '', phone: ''}}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
     >
        <AppFormField
         autoCorrect={false}
         icon="account"
         name="firstName"
         placeholder="First name"
         autoCapitalize
        />
        <AppFormField
         autoCorrect={false}
         icon="account"
         name="lastName"
         placeholder="Last name"
         autoCapitalize
        />
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
        <AppFormField
         autoCapitalize="none"
         autoCorrect={false}
         icon="lock"
         name="confirmPassword"
         placeholder="Confirm Password"
         secureTextEntry
         textContentType="password"
        />
        <AppFormField 
         icon="phone"
         placeholder="Mobile No."
         name="phone"
         keyboardType = "numeric"
        />
        <SubmitButton title="Sign Up"/>
        <AppText style={styles.last}>Already have an account?<AppText style={styles.signin}> SIGN IN</AppText></AppText>
     </AppForm>
    </Screen>
   </ScrollView>
  </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
 container:{
  padding:10,
 },
 subHead:{
  fontWeight: '500',
  fontSize: 27,
  textAlign: 'center',
  color: colors.primary,
  marginTop: 45,
  marginBottom: 15
 },
 last:{
  textAlign: 'center',
  color: colors.medium,
 },
 signin:{
  fontWeight: '500',
  color: colors.primary
 }
})


export default LoginScreen;