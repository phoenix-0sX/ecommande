import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../styles/global';
import { CommandeDetailStyles } from '../../styles/commandeDetailStyle';
import { RougeAnnuler } from '../../components/colors/colors';

export default function CommandeDetails({ route }){

  const { id, title, hour, qte, place, imgUrl } = route.params;

  return(
    <View style={GlobalStyles.container}>
      <ScrollView>

        {/* BODY */}
        <View style={CommandeDetailStyles.body}>
          <View style={CommandeDetailStyles.bodyTitle}>
            <Image style={CommandeDetailStyles.Avatar} source={ imgUrl }/>
            <View style={CommandeDetailStyles.titleView}>
              <Text style={CommandeDetailStyles.titleValue}> { title } </Text>
              <Text style={CommandeDetailStyles.titleHour}>deliver après : { hour } </Text>
            </View>
          </View>
          <View style={CommandeDetailStyles.bodyContent}>
            <Text style={CommandeDetailStyles.bodyContentLabel}>Quantité commandé :</Text>
            <Text style={CommandeDetailStyles.bodyContentValue}> {qte} </Text>
          </View>
          <View style={CommandeDetailStyles.bodyContent}>
            <Text style={CommandeDetailStyles.bodyContentLabel}>Place pour le deliver :</Text>
            <Text style={CommandeDetailStyles.bodyContentValue}> {place} </Text>
          </View>
        </View>

        {/* FOOTER */}
        <View style={GlobalStyles.footer}>
          <View style={GlobalStyles.footerBtn} >
            <Button title='Annuler la commande ?' color={ RougeAnnuler }/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}