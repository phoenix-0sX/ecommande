import React, { useState } from 'react';
import { Button, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RougeAnnuler,Color2 } from '../../components/colors/colors';
import { GlobalStyles } from '../../styles/global';
import { Icon } from 'react-native-elements';

export default function Update({ navigation, route }){

  const [toogle, setToggle] = useState(false);
  const { id, name, forname, username, login, mdp, bio, domicile, fone, imgProfil } = route.params;

  return(
    <View style={GlobalStyles.container}>
      <ScrollView>
        {/* BODY */}
        <View style={GlobalStyles.bodyForm}>
          <View style={GlobalStyles.profilImageView}>
            <Image style={GlobalStyles.profilImage} source={ imgProfil }/>
          </View>
          <TouchableOpacity>
              <Text style={GlobalStyles.profilImageChange}> # Changer photo de profil</Text>
          </TouchableOpacity>
          <View style={GlobalStyles.form}>
            <View style={GlobalStyles.formContent}>
              <Text style={GlobalStyles.formLabel}>Nom : </Text>
              <TextInput style={GlobalStyles.formInput} placeholder='name...' value={ name }/>
            </View>
            <View style={GlobalStyles.formContent}>
              <Text style={GlobalStyles.formLabel}>Prenoms : </Text>
              <TextInput style={GlobalStyles.formInput} placeholder='forname...' value={ forname }/>
            </View>
            <View style={GlobalStyles.formContent}>
              <Text style={GlobalStyles.formLabel}>Pseudo : </Text>
              <TextInput style={GlobalStyles.formInput} placeholder='username...' value={ username }/>
            </View>
            <View style={GlobalStyles.formContent}>
              <Text style={GlobalStyles.formLabel}>Domicile : </Text>
              <TextInput style={GlobalStyles.formInput} placeholder='domicile...' value={ domicile }/>
            </View>
            <View style={GlobalStyles.formContent}>
              <Text style={GlobalStyles.formLabel}>Biographie : </Text>
              <TextInput style={GlobalStyles.formInput} multiline placeholder='bio...' value={ bio }/>
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
                  <TextInput style={GlobalStyles.formInput} placeholder='Your Adress Mail...' value={login}/>
                </View> : null
            }
            {
              toogle?
              <View style={GlobalStyles.formContent}>
                <Text style={GlobalStyles.formLabel}>Telefone : </Text>
                <TextInput style={GlobalStyles.formInput} keyboardType='number-pad' placeholder='Your fone number...' value={fone}/>
              </View> : null
            }
            {
              toogle?
              <View style={GlobalStyles.formContent}>
                <Text style={GlobalStyles.formLabel}>Mot de passe : </Text>
                <TextInput style={GlobalStyles.formInput} secureTextEntry={true} placeholder='Your new password...' value={mdp}/>
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
                <Button title='sauvegarder' color={ Color2 } />
            </View>
        </View>
      </ScrollView>
    </View>
  );
}