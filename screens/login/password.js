import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Color2 } from '../../components/colors/colors';
import { GlobalStyles } from '../../styles/global';
import { LoginScreen } from '../../components/routes/routesName';

export default function Password({ navigation, route }){
  
  const id = route.params;
  return(
    <View style={GlobalStyles.container}>
        <View style={GlobalStyles.bodyForm}>
            <View style={GlobalStyles.formContent}>
              <Text>You can now provide a new password </Text>
            </View>
            <View style={GlobalStyles.formContent}>
              <Text style={ StyleSheet.create({ fontSize: 16, letterSpacing:2 }) }>Enter Your new password </Text>
            </View>
            <View style={GlobalStyles.formContent}>
              <Text style={GlobalStyles.formLabel}>Mot de passe : </Text>
              <TextInput style={GlobalStyles.formInput} secureTextEntry={true} placeholder='Password...'/>
            </View>
            <View style={GlobalStyles.formContent}>
              <Text style={GlobalStyles.formLabel}>Confirm password : </Text>
              <TextInput style={GlobalStyles.formInput} secureTextEntry={true}/>
            </View>
            <View style={GlobalStyles.footer}>
              <View style={GlobalStyles.footerBtn} >
                <Button title='Terminer' color={ Color2 } onPress={ () => navigation.navigate(LoginScreen) }/>
              </View>
            </View>
        </View>
    </View>
  );
}