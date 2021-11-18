import React from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import { Color2 } from '../../components/colors/colors';
import { DetailStyles } from '../../styles/detailStyle';
import { GlobalStyles } from '../../styles/global';
import { FormProductCommandePages } from "../../components/routes/routesName";

export default function Details({ navigation, route }){

  const coor = {
    latitude: 0.0,
    longitude: 0.0,
  };

  const { id, title, details, prix, imgUrl } = route.params;

  return(
    <View style={GlobalStyles.container}>
      <ScrollView>
        {/* HEADER */}
        <View style={DetailStyles.header}>
          <Image  style={GlobalStyles.bgImage} source={ imgUrl }/>
        </View>

        {/* BODY */}
        <View style={DetailStyles.body}>
          <View style={DetailStyles.bodyTitle}>
              <Text style={DetailStyles.bodyLabel}>Title :</Text>
              <Text style={DetailStyles.bodyContent}>{title}</Text>
          </View>
          <View style={DetailStyles.bodyTitle}>
              <Text style={DetailStyles.bodyLabel}>Prix :</Text>
              <Text style={DetailStyles.bodyContent}>{prix} Ar</Text>
          </View>
          <View style={DetailStyles.bodyTitle}>
              <Text style={DetailStyles.bodyLabel}>Description :</Text>
              <Text style={DetailStyles.bodyContent}> {details} </Text>
          </View>
        </View>

        {/* FOOTER */}
        <View style={GlobalStyles.footer}>
          <View style={GlobalStyles.footerBtn} >
            <Button title='Commander' color={ Color2 } onPress={() => navigation.navigate( FormProductCommandePages, {id, title, coor})}/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}