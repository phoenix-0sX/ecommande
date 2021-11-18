import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Color2 } from '../colors/colors';
import Profil from '../../screens/clients/profil';
import Update from '../../screens/clients/update';
import { ProfilPages, UpdateProfilPages } from './routesName';

const Stack = createStackNavigator();

export default function ClientStackNavigator({ route }) {

  return (
    <Stack.Navigator
      initialRouteName={ProfilPages}
      detachInactiveScreens={ true }>
      <Stack.Screen  initialParams={ route.params } name={ProfilPages} component={Profil} options={{  header: () => null }}/>
      <Stack.Screen  initialParams={ route.params } name={UpdateProfilPages} component={Update}
        options={{
          headerTitle: 'Profil Update', 
          headerTintColor:  Color2,
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          headerStyle: {
            height: 50,
          },
        }}
      />
    </Stack.Navigator>
  );
}