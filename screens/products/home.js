import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Image, ImageBackground, FlatList } from 'react-native';
import { product, setProducts } from '../../components/data/productData';
import HeaderHome from '../../components/header/homeHeader';
import { HomeStyles } from '../../styles/homeStyle';
import { GlobalStyles } from '../../styles/global';
import { ProductDetailsPages } from "../../components/routes/routesName";
import { Icon } from 'react-native-elements';
import { Color2 } from '../../components/colors/colors';

export default function Home({navigation, route}){
    return(
        <View style={GlobalStyles.container}>
            <ImageBackground source={require('../../assets/images/goute.jpg')} style={GlobalStyles.bgImage}>
            
            <HeaderHome navigation={ navigation } route={ route }/>
            <TouchableWithoutFeedback onPress={ () => { Keyboard.dismiss() }}>
                <View style={HomeStyles.body}>
                    <FlatList 
                        data={product}
                        keyExtractor={(item) => item.id }
                        renderItem= {({ item }) => (
                            <View style={HomeStyles.contentView}>
                                <Image style={HomeStyles.cotnentImage} source={ item.imgUrl }/>
                                <Text style={HomeStyles.cotnentTitle}> Title : { item.title } </Text>
                                <TouchableOpacity style={HomeStyles.detailsBtn} onPress={() => navigation.navigate( ProductDetailsPages, item)}>
                                    <Icon name='play-circle-o' type='font-awesome' color={ Color2 }/>
                                    <Text style={HomeStyles.detailsBtnText}>Details ...</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
            </TouchableWithoutFeedback>
            </ImageBackground>
        </View>
    )
}