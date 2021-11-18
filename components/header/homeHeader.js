import React, { useState } from 'react';
import {View, Text, TextInput, Button, TouchableOpacity, Image} from 'react-native';
import { Icon } from 'react-native-elements';
import { GlobalStyles } from '../../styles/global';
import { HomeHeaderstyles } from '../../styles/homeHeaderStyle';
import { Color1, Color2, Color3 } from '../colors/colors';
import { ClientsPages } from "../routes/routesName";

export default function HeaderHome({navigation, route }){

    const { id, name, forname, username, login, mdp, bio, domicile, fone, imgProfil } = route.params;
    return(
        <View style={HomeHeaderstyles.header}>
            <View style={HomeHeaderstyles.searchView}>
                <TouchableOpacity style={HomeHeaderstyles.menuBtn} onPress={() => navigation.openDrawer()}>
                    <Icon name='list' type='font-awesome' color={ Color3 }/>
                </TouchableOpacity>
                <TouchableOpacity style={HomeHeaderstyles.profilBtn} onPress={() => navigation.navigate( ClientsPages )}>
                    <Image style={HomeHeaderstyles.Image} source={ require('../../assets/images/businessman.png') }/>
                </TouchableOpacity>
                <View style={HomeHeaderstyles.searchForm}>
                    <TextInput style={HomeHeaderstyles.searchInput} placeholder='Rechercher...'/>
                    <Button title='search' color={ Color2 }/>
                </View>
            </View>
            <View style={HomeHeaderstyles.headerTitle}>
                <Text style={HomeHeaderstyles.headerText}>Nos services</Text>
            </View>
        </View>
    )
}