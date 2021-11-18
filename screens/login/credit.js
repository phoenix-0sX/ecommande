import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { CreditStyles } from "../../styles/creditStyle";
import { GlobalStyles } from '../../styles/global';

export default function Credit(){
    
  return(
    <View style={GlobalStyles.container}>
      <ScrollView>
        {/* BODY */}
        <View style={CreditStyles.body}>
            <View style={CreditStyles.bodyHeader}>
                <Text style={CreditStyles.bodyHeaderText}>CREDIT</Text>
            </View>
            <View style={CreditStyles.infoView}>
                <Text style={CreditStyles.infoTitle}>About the app :</Text>
                <Text style={CreditStyles.infoText}>
                  E-commande est un application de gestion de livraison des produits consommables,
                  faits pour facilité la commande des clients.
                  Permet de vous beneficier des services de qualité, et un gain considérable de temps.
                  Heureux que cela vous faits plaisir
                </Text>
            </View>
            <View style={CreditStyles.infoView}>
                <Text style={CreditStyles.infoTitle}>Credit origins :</Text>
                <Text style={CreditStyles.infoText}>ECOLE : ENI Fianarantsoa</Text>
                <Text style={CreditStyles.infoText}>CLASSE : M1 PRO GB</Text>
            </View>
            <View style={CreditStyles.infoView}>
                <Text style={CreditStyles.infoTitle}>Credit developpeurs :</Text>
                <Text style={CreditStyles.infoSubtitle}>Responsable backend :</Text>
                <Text style={CreditStyles.infoText}>Botosambatra Angelio N. 01</Text>
                <Text>and</Text>
                <Text style={CreditStyles.infoText}>Marky Zivanno N. 02</Text>
                <Text style={CreditStyles.infoSubtitle}>Responsable frontend :</Text>
                <Text style={CreditStyles.infoText}>Tsitohaina Manohisoa N. 03</Text>
                <Text>and</Text>
                <Text style={CreditStyles.infoText}>Faniry Harilanja N. 04</Text>
            </View>
            <View style={CreditStyles.infoView}>
                <Text style={CreditStyles.infoTitle}>Copyright :</Text>
                <Text style={CreditStyles.infoText}>@2021</Text>
            </View>
            <View style={CreditStyles.infoView}>
                <Text style={CreditStyles.infoTitle}>Siège :</Text>
                <Text style={CreditStyles.infoText}>Fianarantsoa 301, Tanambao</Text>
            </View>
        </View>
      </ScrollView>
    </View>
  );
}