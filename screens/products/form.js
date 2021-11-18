import React from 'react';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import { VertValider, Color2 } from '../../components/colors/colors';
import { FormStyles } from '../../styles/formStyle';
import { MapPages } from "../../components/routes/routesName";

export default function Form({navigation, route}){

  const { id, title, coor } = route.params;

  return(
    <View style={FormStyles.container}>
      <ScrollView>
        <View style={FormStyles.body}>
          <Text style={FormStyles.greaterText}> /!\ Veuillez remplir les champs s' il vous plait</Text>
          <View style={FormStyles.form}>
            <View style={FormStyles.formLine}>
              <View style={FormStyles.formLabel}>
                <Text style={FormStyles.formLabelText}>ID: </Text>
              </View>
              <TextInput style={FormStyles.formInput} value={id.toString()}/>
            </View>
            <View style={FormStyles.formLine}>
              <View style={FormStyles.formLabel}>
                <Text style={FormStyles.formLabelText}>TITLE: </Text>
              </View>
              <TextInput style={FormStyles.formInput} value={title}/>
            </View>
            <View style={FormStyles.formLine}>
              <View style={FormStyles.formLabel}>
                <Text style={FormStyles.formLabelText}>LIEU: </Text>
              </View>
              <View style={FormStyles.lieuBtn}>
                <Button title='indiquer' color={ VertValider } onPress={ () => navigation.navigate( MapPages, {id, title} ) }/>
              </View>
            </View>
            <View style={FormStyles.formLine}>
              <TextInput style={FormStyles.formInput} value={coor.latitude.toString()} />
            </View>
            <View style={FormStyles.formLine}>
              <TextInput style={FormStyles.formInput} value={coor.longitude.toString()} />
            </View>
            <View style={FormStyles.formLine}>
              <View style={FormStyles.formLabel}>
                <Text style={FormStyles.formLabelText}>Qté: </Text>
              </View>
              <TextInput keyboardType='numeric' style={FormStyles.formInput}/>
            </View>
          </View>
          <View style={FormStyles.effectuerBtn}>
            <Button title='EFFECTUER' color={ Color2 }/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}