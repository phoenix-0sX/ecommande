import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CommandeDetails from '../../screens/commandes/commandeDetails';
import Attente from '../../screens/commandes/attente';
import { Color2 } from '../colors/colors';
import { CommandeAttentePages, CommandeDetailsPages } from './routesName';

const Stack = createStackNavigator();

export default function CommandeStackNavigator() {

  return (
    <Stack.Navigator
      initialRouteName={CommandeAttentePages}
      detachInactiveScreens={ true }>
      <Stack.Screen name={CommandeAttentePages} component={Attente} options={{  header: () => null }}/>
      <Stack.Screen name={CommandeDetailsPages} component={CommandeDetails}
        options={{
          headerTitle: 'Details de votre commande', 
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