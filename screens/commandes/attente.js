import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { commande } from '../../components/data/commandeData';
import { AttenteStyles } from '../../styles/attenteStyle';
import { GlobalStyles } from '../../styles/global';
import { CommandeDetailsPages } from "../../components/routes/routesName";
import { Color3 } from '../../components/colors/colors';
import { Icon } from 'react-native-elements';

export default function Attente({navigation}){

  return(
    <View style={GlobalStyles.container}>
      <View style={AttenteStyles.header}>
        <TouchableOpacity style={AttenteStyles.menuBtn} onPress={() => navigation.openDrawer()}>
          <Icon name='list' type='font-awesome' color={ Color3 }/>
        </TouchableOpacity>
        <View style={AttenteStyles.headerTextView}>
          <Text style={AttenteStyles.headerText}>Commande en attente</Text>
        </View>
      </View>
      <View style={AttenteStyles.body}>
          <FlatList 
            data={commande}
            keyExtractor={(item) => item.id }
            renderItem= {({ item }) => (
              <TouchableOpacity style={AttenteStyles.Touchable} onPress={() => navigation.navigate( CommandeDetailsPages, item)}>
                <Image style={AttenteStyles.Avatar} source={ item.imgUrl }/>
                <View style={AttenteStyles.ListView}>
                  <Text style={AttenteStyles.ListTitle}> { item.title } </Text>
                  <Text style={AttenteStyles.ListHour}> { item.hour } </Text>
                </View>
              </TouchableOpacity>
            )}
          />
      </View>
    </View>
  );
}