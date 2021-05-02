import React from 'react';
import OtpScreen from './screens/OtpScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen'
import AccountTypeScreen from './screens/AccountTypeScreen'
import BranchYearScreen from './screens/AccountTypeScreen';
import CollegeEmailScreen from './screens/CollegeEmailScreen'


export default function App() {
  return (
    <LoginScreen/>
  );
}

  
