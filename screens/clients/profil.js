import React from 'react';
import { Button, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ProfilStyles } from "../../styles/profilStyle";
import { Color2, Color3 } from '../../components/colors/colors';
import { GlobalStyles } from '../../styles/global';
import { UpdateProfilPages } from "../../components/routes/routesName";
import { Icon } from 'react-native-elements';

export default function Profil({ navigation, route }){

  const { id, name, forname, username, login, mdp, bio, domicile, fone, imgProfil } = route.params;
    
  return(
    <View style={GlobalStyles.container}>
      <ScrollView>
        {/* HEADER */}
        <View style={ProfilStyles.header}>
            <TouchableOpacity style={ProfilStyles.menuBtn} onPress={() => navigation.openDrawer()}>
                <Icon name='list' type='font-awesome' color={ Color3 }/>
            </TouchableOpacity>
            <View style={ProfilStyles.headerTextView}>
                <Text style={ProfilStyles.headerText}>PROFIL</Text>
            </View>
        </View>

        {/* BODY */}
        <View style={ProfilStyles.body}>
            <View style={ProfilStyles.bodyHeader}>
                <View style={ProfilStyles.nameView}>
                    <Text style={ProfilStyles.nameText}>{ name }</Text>
                    <Text style={ProfilStyles.fornameText}>{ forname }</Text>
                    <Text style={ProfilStyles.fornameText}>id : { id }</Text>
                </View>
                <View style={ProfilStyles.profilView}>
                    <Image  style={ProfilStyles.profilImage} source={ imgProfil }/>
                    <Text style={ProfilStyles.usernameText}>{ username }</Text>
                </View>
            </View>
            <View style={ProfilStyles.infoView}>
                <Text style={ProfilStyles.infoTitle}>BIO :</Text>
                <Text style={ProfilStyles.infoText}>{ bio }</Text>
            </View>
            <View style={ProfilStyles.infoView}>
                <Text style={ProfilStyles.infoTitle}>ADRESSE MAIL :</Text>
                <Text style={ProfilStyles.infoText}>{ login }</Text>
            </View>
            <View style={ProfilStyles.infoView}>
                <Text style={ProfilStyles.infoTitle}>TELEFONE :</Text>
                <Text style={ProfilStyles.infoText}>{ fone }</Text>
            </View>
            <View style={ProfilStyles.infoView}>
                <Text style={ProfilStyles.infoTitle}>DOMICILE :</Text>
                <Text style={ProfilStyles.infoText}>{ domicile }</Text>
            </View>
            <View style={GlobalStyles.footer}>
                <View style={GlobalStyles.footerBtn} >
                    <Button title='update' color={ Color2 } onPress={() => navigation.navigate( UpdateProfilPages, route.params)} />
                </View>
            </View>
        </View>
      </ScrollView>
    </View>
  );
}