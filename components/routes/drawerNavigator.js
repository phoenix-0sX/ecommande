import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductStackNavigator from './productNavigator';
import CommandeStackNavigator from './commandeNavigator';
import ClientStackNavigator from './clientNavigator';
import LogiNavigator from './loginNavigator';
import { LoginPages, ClientsPages, ProductsPages, CommandesPages } from './routesName';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ route }) {

    return (
        <Drawer.Navigator
            initialRouteName={ProductsPages}
            backBehavior='initialRoute'
            detachInactiveScreens={ true }
            drawerPosition='right'
            drawerType='slide'
            >
            <Drawer.Screen initialParams={ route.params } name={ClientsPages} component={ClientStackNavigator} options={{ header: () => null }}/>
            <Drawer.Screen initialParams={ route.params } name={ProductsPages} component={ProductStackNavigator} options={{  header: () => null }}/>
            <Drawer.Screen initialParams={ route.params } name={CommandesPages} component={CommandeStackNavigator} options={{  header: () => null }}/>
            <Drawer.Screen name={LoginPages} component={LogiNavigator} options={{  header: () => null }}/>
        </Drawer.Navigator>
      );

}