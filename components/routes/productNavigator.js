import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/products/home';
import Details from '../../screens/products/details';
import Form from '../../screens/products/form';
import Maps from '../../screens/maps/map';
import { Color2 } from '../colors/colors';
import { FormProductCommandePages, HomePages, MapPages, ProductDetailsPages } from './routesName';

const Stack = createStackNavigator();

export default function ProductStackNavigator({ route }) {

  return (
    <Stack.Navigator
      initialRouteName={HomePages}
      detachInactiveScreens={ true }>
        <Stack.Screen initialParams={ route.params } name={HomePages} component={Home} options={{  header: () => null }}/>
        <Stack.Screen initialParams={ route.params } name={ProductDetailsPages} component={Details} 
          options={{
            headerTitle: 'Details du service', 
            headerTintColor:  Color2,
            headerTitleAlign: 'center',
            headerStyle: {
              height: 50
            },
          }}
        /> 
        <Stack.Screen initialParams={ route.params } name={FormProductCommandePages} component={Form} 
          options={{
            headerTitle: 'Formulaire de commande',
            headerTintColor:  Color2,
            headerTitleAlign: 'center',
            headerStyle: {
              height: 50
            },
          }}
        />
        <Stack.Screen name={ MapPages } component={ Maps }
          options={{
            headerTitle: 'Cartes',
            headerTintColor:  Color2,
            headerTitleAlign: 'center',
            headerStyle: {
              height: 50
            },
          }}
        />
    </Stack.Navigator>
  );
}