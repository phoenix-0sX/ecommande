import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, ForgottenPasswordPages, SingUpPages, CreditPages, FeedbackPages, CodePages, PasswordPages } from './routesName';
import Login from '../../screens/login';
import Credit from "../../screens/login/credit";
import SingUp from "../../screens/login/singUp";
import ForgottenPassword from "../../screens/login/forgottenPassword";
import Feedback from "../../screens/login/feedback";
import Code from '../../screens/login/code';
import Password from '../../screens/login/password';

const Stack = createStackNavigator();

export default function LogiNavigator() {

  return (
    <Stack.Navigator
      initialRouteName={LoginScreen}
      detachInactiveScreens={ true }>
      <Stack.Screen name={LoginScreen} component={Login} options={{  header: () => null }}/>
      <Stack.Screen name={ForgottenPasswordPages} component={ForgottenPassword} options={{  headerTitle: '', headerStyle: { height: 40 } }}/>
      <Stack.Screen name={CodePages} component={Code} options={{  headerTitle: '', headerStyle: { height: 40 } }}/>
      <Stack.Screen name={PasswordPages} component={Password} options={{  headerTitle: '', headerStyle: { height: 40 } }}/>
      <Stack.Screen name={SingUpPages} component={SingUp} options={{  headerTitle: '', headerStyle: { height: 40 } }}/>
      <Stack.Screen name={CreditPages} component={Credit} options={{  headerTitle: '', headerStyle: { height: 40 } }}/>
      <Stack.Screen name={FeedbackPages} component={Feedback} options={{  headerTitle: '', headerStyle: { height: 40 } }}/>
    </Stack.Navigator>
  );
}