import React, { useState } from 'react';
import { Button, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RougeAnnuler, Color2 } from '../../components/colors/colors';
import { LoginScreen } from '../../components/routes/routesName';
import { GlobalStyles } from '../../styles/global';
import { Icon } from 'react-native-elements';

export default function SingUp({ navigation }){

  const [toogle, setToggle] = useState(true);
  return(
    <View style={GlobalStyles.container}>
      <ScrollView>
        {/* BODY */}
        <View style={GlobalStyles.bodyForm}>
          <View style={GlobalStyles.profilImageView}>
            <Image style={GlobalStyles.profilImage} source={ require('../../assets/images/person.png') }/>
          </View>
          <TouchableOpacity>
            <Text style={GlobalStyles.profilImageChange}> # Changer photo de profil</Text>
          </TouchableOpacity>
          <View style={GlobalStyles.form}>
            <View style={GlobalStyles.formContent}>
              <Text style={GlobalStyles.formLabel}>Nom : </Text>
              <TextInput style={GlobalStyles.formInput} placeholder='enter name...'/>
            </View>
            <View style={GlobalStyles.formContent}>
              <Text style={GlobalStyles.formLabel}>Prenoms : </Text>
              <TextInput style={GlobalStyles.formInput} placeholder='enter forname...'/>
            </View>
            <View style={GlobalStyles.formContent}>
              <Text style={GlobalStyles.formLabel}>Pseudo : </Text>
              <TextInput style={GlobalStyles.formInput} placeholder='enter pseudo you like...'/>
            </View>
            <View style={GlobalStyles.formContent}>
              <Text style={GlobalStyles.formLabel}>Domicile : </Text>
              <TextInput style={GlobalStyles.formInput} placeholder='where do you live?...'/>
            </View>
            <View style={GlobalStyles.formContent}>
              <Text style={GlobalStyles.formLabel}>Biographie : </Text>
              <TextInput style={GlobalStyles.formInput} multiline placeholder='Talk about you in a few line...'/>
            </View>
            <TouchableOpacity style={GlobalStyles.formContent2} onPress={() => setToggle(!toogle)}>
                  <Icon style={GlobalStyles.formLabel} name='chevron-down' type='font-awesome' color={ RougeAnnuler }/>
                  <Text style={GlobalStyles.formLabelCritique}>
                    Critique Zone ... </Text>
            </TouchableOpacity>
            {
              toogle?
                <View style={GlobalStyles.formContent}>
                  <Text style={GlobalStyles.formLabel}>Login : </Text>
                  <TextInput style={GlobalStyles.formInput} placeholder='Your Adress Mail...'/>
                </View> : null
            }
            {
              toogle?
              <View style={GlobalStyles.formContent}>
                <Text style={GlobalStyles.formLabel}>Telefone : </Text>
                <TextInput style={GlobalStyles.formInput} keyboardType='number-pad' placeholder='Your fone number...'/>
              </View> : null
            }
            {
              toogle?
              <View style={GlobalStyles.formContent}>
                <Text style={GlobalStyles.formLabel}>Mot de passe : </Text>
                <TextInput style={GlobalStyles.formInput} secureTextEntry={true} placeholder='Your new password...'/>
              </View> : null
            }
            {
              toogle?
              <View style={GlobalStyles.formContent}>
                <Text style={GlobalStyles.formLabel}>Confirmer Password : </Text>
                <TextInput style={GlobalStyles.formInput} secureTextEntry={true} placeholder='Repeat the password...'/>
              </View> : null
            }
          </View>
        </View>
        <View style={GlobalStyles.footer}>
            <View style={GlobalStyles.footerBtn} >
                <Button title='sauvegarder' color={ Color2 } onPress={ () => navigation.navigate( LoginScreen ) }/>
            </View>
        </View>
      </ScrollView>
    </View>
  );
}