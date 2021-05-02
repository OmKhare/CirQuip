import React from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'
import * as Yup from 'yup'
import AppText from '../components/AppText'
import {AppForm,AppFormField,SubmitButton} from '../components/forms'
import Screen from '../components/Screen'
import colors from '../config/colors'

const validationSchema = Yup.object().shape({
 email: Yup.string().required().email().label("Email")
})

function LoginScreen() {
 return (
    <KeyboardAvoidingView>
      <ScrollView>
         <Screen style={styles.container}>
            <AppText style={styles.subHead}>Enter your College Email Id</AppText>
            <AppForm
            initialValues={{email:''}}
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
               <SubmitButton title="Next"/>
            </AppForm>

         </Screen>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
 container:{
  padding:10,
  justifyContent: 'center'
 },
 subHead:{
  fontSize: 27,
  textAlign: 'center',
  color: colors.primary,
  marginBottom: 30
 },
})


export default LoginScreen;