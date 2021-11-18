import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './drawerNavigator';
import LogiNavigator from './loginNavigator';
import { ContentPages, LoginPages } from './routesName';

const Stack = createStackNavigator();

export default function StackNavigator() {

  return (
    <Stack.Navigator
      initialRouteName={LoginPages}
      detachInactiveScreens={ true }
      >
        <Stack.Screen name={LoginPages} component={LogiNavigator} options={{  header: () => null }}/>
        <Stack.Screen name={ContentPages} component={DrawerNavigator} options={{  header: () => null }}/>
    </Stack.Navigator>
  );
}