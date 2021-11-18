//import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './components/routes/stackNavigator';

export default function App(){

  return(
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}