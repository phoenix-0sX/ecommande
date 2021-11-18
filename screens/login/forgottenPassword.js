import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { verifyMailHandler } from "../../components/handler/verifyMailHandler";
import { clientData } from "../../components/data/clientsData";
import { Color2 } from '../../components/colors/colors';
import { GlobalStyles } from '../../styles/global';

export default function ForgottenPassword({ navigation }){
  
  const [mailText, setMailText] = useState('');
  return(
    <View style={GlobalStyles.container}>
        <View style={GlobalStyles.bodyForm}>
            <View style={GlobalStyles.formContent}>
              <Text>If you are shure to forgot your password, follow bellow instruction please </Text>
            </View>
            <View style={GlobalStyles.formContent}>
              <Text style={ StyleSheet.create({ fontSize: 16, letterSpacing:2 }) }>Enter Your Login </Text>
            </View>
            <View style={GlobalStyles.formContent}>
              <Text style={GlobalStyles.formLabel}>Adress Mail : </Text>
              <TextInput style={GlobalStyles.formInput} placeholder='Adress Mail...' onChangeText={(val) => setMailText(val)}/>
            </View>
            <View style={GlobalStyles.footer}>
              <View style={GlobalStyles.footerBtn} >
                <Button title='confirmer' color={ Color2 } onPress={ () => verifyMailHandler(mailText, clientData, navigation)}/>
              </View>
            </View>
        </View>
    </View>
  );
}