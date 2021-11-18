import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Color2 } from '../../components/colors/colors';
import { GlobalStyles } from '../../styles/global';
import { codeData } from "../../components/data/codeData";
import { verifyCodeHandler } from '../../components/handler/verifyCodeHandler';

export default function Code({ navigation, route }){
  
  const { fone, id } = route.params;
  const [code, setCode] = useState('');
  return(
    <View style={GlobalStyles.container}>
        <View style={GlobalStyles.bodyForm}>
            <View style={GlobalStyles.formContent}>
              <Text>Votre telefone est il le : </Text>
            </View>
            <View style={GlobalStyles.formContent}>
              <TextInput style={GlobalStyles.formInput} value={ fone }/>
            </View>
            <View style={GlobalStyles.formContent}>
              <Text>Un code à ete envoyer vers ce numero</Text>
            </View>
            <View style={GlobalStyles.formContent}>
              <Text style={ StyleSheet.create({ fontSize: 16, letterSpacing:2 }) }>verifier et tapez ce code ici:</Text>
            </View>
            <View style={GlobalStyles.formContent}>
              <Text style={GlobalStyles.formLabel}>Code : </Text>
              <TextInput style={GlobalStyles.formInput} keyboardType='number-pad' onChangeText={(val) => setCode(val)}/>
            </View>
            <View style={GlobalStyles.footer}>
              <View style={GlobalStyles.footerBtn} >
                <Button title='confirmer' color={ Color2 } onPress={ () =>  verifyCodeHandler(id, code, codeData, navigation)}/>
              </View>
            </View>
        </View>
    </View>
  );
}