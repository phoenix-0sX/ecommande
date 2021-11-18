import React, { useState } from 'react';
import {
  View, 
  ScrollView, 
  Text, Button, 
  TextInput,
  TouchableWithoutFeedback, 
  Keyboard, 
  TouchableOpacity,
  ImageBackground, }
  from 'react-native';
import { LoginStyles } from "../styles/loginStyle";
import { submitHandler } from "../components/handler/submitHandler";
import { clientData } from "../components/data/clientsData";
import { GlobalStyles } from '../styles/global';
import { Color1, Color2, Placeholder1 } from '../components/colors/colors';
import { CreditPages, FeedbackPages, ForgottenPasswordPages, SingUpPages } from '../components/routes/routesName';
import { Icon } from 'react-native-elements';

export default function Login({ navigation }){
  
  const [loginText, setLoginText] = useState('');
  const [mdpText, setmdpText] = useState('');

  return(
    <TouchableWithoutFeedback onPress={ () => { Keyboard.dismiss() }}>

      { /* CONTAINER */ }
      <ScrollView style={GlobalStyles.container}>
      <ImageBackground source={require('../assets/images/goute.jpg')} style={GlobalStyles.bgImage}>

        {/* HEADER SECTION */}
        <View style={LoginStyles.header}>
          <Text style={LoginStyles.headerText}>Hello To E-Commande</Text>
          <Text style={LoginStyles.headerText1}>Veuillez vous identifier!</Text>
        </View>

        {/* BODY SECTION */}
        <View style={LoginStyles.body}>

          {/* LOGIN FORM */}
          <View style={LoginStyles.form}>
            <Text style={LoginStyles.formText}>Login</Text>
            <TextInput 
              placeholder='Login'
              placeholderTextColor={Placeholder1}
              style={LoginStyles.formTextInput}
              onChangeText={ (val) => setLoginText(val) }/>
            <Text style={LoginStyles.formText}>Mot de Passe</Text>
            <TextInput 
              placeholder='Mot de Passe'
              placeholderTextColor={Placeholder1}
              secureTextEntry= {true}
              style={LoginStyles.formTextInput} 
              onChangeText={ (val) => setmdpText(val) }/>
            <View style={LoginStyles.buttonStyle}>
              <Button title='Se Connecter' color={ Color2 }  onPress={ () => submitHandler(loginText, mdpText, clientData, navigation)} />
            </View>
          </View>

          {/* OTHER LINK FORM */}
          <View style={LoginStyles.other}>
            <TouchableOpacity style={LoginStyles.otherComponent} onPress={() => navigation.navigate( ForgottenPasswordPages ) }>
              <Icon style={LoginStyles.otherIcon} name='exclamation-circle' type='font-awesome' color={ Color1 }/>
              <Text style={LoginStyles.otherText}>Mot de passe oublier</Text>
            </TouchableOpacity>
            <TouchableOpacity style={LoginStyles.otherComponent} onPress={() => navigation.navigate( SingUpPages ) }>
              <Icon style={LoginStyles.otherIcon} name='group' type='font-awesome' color={ Color1 }/>
              <Text style={LoginStyles.otherText}>Créer un compte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={LoginStyles.otherComponent} onPress={() => navigation.navigate( CreditPages ) }>
              <Icon style={LoginStyles.otherIcon} name='star' type='font-awesome' color={ Color1 }/>
              <Text style={LoginStyles.otherText}>A propos de nous</Text>
            </TouchableOpacity>
            <TouchableOpacity style={LoginStyles.otherComponent} onPress={() => navigation.navigate( FeedbackPages ) }>
              <Icon style={LoginStyles.otherIcon} name='comment' type='font-awesome' color={ Color1 }/>
              <Text style={LoginStyles.otherText}>Nous signaler un problème</Text>
            </TouchableOpacity>
          </View>
        </View>
      
      </ImageBackground>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}