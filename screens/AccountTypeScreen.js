import React from 'react'
import { StyleSheet, View } from 'react-native'
import * as Yup from 'yup'
import AppText from '../components/AppText'
import {AppForm,AppFormField,SubmitButton} from '../components/forms'
import Screen from '../components/Screen'
import colors from '../config/colors'
import AppPicker from '../components/AppPicker'

const validationSchema = Yup.object().shape({
 college: Yup.string().required().label("College")
})

function BranchYearScreen() {
 return (
  <Screen style={styles.container}>
   <AppText style={styles.subHead}>Please Select Your Account Type</AppText>
   <AppForm
    initialValues={{college:''}}
    onSubmit={(values) => console.log(values)}
    validationSchema={validationSchema}
   >
    <AppPicker text="Account Type" options={['Student', 'Faculty', 'Alumni', 'Admin']} icon="account"/>
      <AppFormField
       icon="school"
       name="college"
       placeholder="College Name"
      />
      <View style={styles.button}>
         <SubmitButton title="Finish"/>
      </View>
   </AppForm>
  </Screen>
  )
}

const styles = StyleSheet.create({
 container:{
  padding:10
 },
 subHead:{
  fontSize: 19,
  textAlign: 'center',
  color: colors.primary,
  marginTop: 150,
  marginHorizontal:5,
  marginBottom: 30
 },
 button:{
    paddingTop:30
 }
})


export default BranchYearScreen;