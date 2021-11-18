import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Color2, FormBorder } from '../../components/colors/colors';
import { GlobalStyles } from '../../styles/global';
import { LoginScreen } from "../../components/routes/routesName";

export default function Feedback({ navigation }){

  return(
    <View style={GlobalStyles.container}>
      <ScrollView>
        <View style={GlobalStyles.bodyForm}>
            <View style={GlobalStyles.formContent}>
              <Text>If you there is a problem about the app, Write Us </Text>
            </View>
            <View style={FeedbackStyles.formContent}>
              <Text style={FeedbackStyles.formLabel}>Your Feedback : </Text>
              <TextInput style={FeedbackStyles.formInput} multiline placeholder='......................'/>
            </View>
        </View>
        <View style={GlobalStyles.footer}>
            <View style={GlobalStyles.footerBtn} >
                <Button title='envoyer' color={ Color2 } onPress={ () => navigation.navigate( LoginScreen ) }/>
            </View>
        </View>
      </ScrollView>
    </View>
  );
}

export const FeedbackStyles = StyleSheet.create({
  formContent: {
    width: '100%',
    height: 200,
    margin: 5,
    padding: 5,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  formLabel: {
    padding: 10,
    fontWeight: 'bold',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  formInput: {
    flex: 1,
    width: '100%',
    borderWidth: 1,
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    borderColor: FormBorder,
    borderRadius: 15
  }
})