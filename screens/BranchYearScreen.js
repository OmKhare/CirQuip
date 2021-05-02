import React from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native'
import * as Yup from 'yup'
import AppText from '../components/AppText'
import {AppForm,AppFormField,SubmitButton} from '../components/forms'
import Screen from '../components/Screen'
import colors from '../config/colors'
import AppPicker from '../components/AppPicker'

const validationSchema = Yup.object().shape({
 year: Yup.string().required().label("Year")
})

function BranchYearScreen() {
 return (
    <KeyboardAvoidingView behavior="height" style={{flex:1}}>
      <ScrollView>
         <Screen style={styles.container}>
            <AppText style={styles.subHead}>Congratulations, You Are Just A Step Away To Connect To Your College Remotely!</AppText>
            <AppForm
            initialValues={{ year:''}}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
            >
               <AppPicker text="Select Your Branch" options={['Computer Engineering','Mechanical Engineering','Electrical Engineering', 'Instrumentation', 'Metallurgy', 'Production', 'EnTC']}/>
               <AppFormField
               icon="school"
               name="year"
               placeholder="Admission Year"
               keyboardType = "numeric"
               />
               <View style={styles.button}>
                  <SubmitButton title="Finish"/>
               </View>
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