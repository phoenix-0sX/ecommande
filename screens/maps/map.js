import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { GlobalStyles } from '../../styles/global';
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { Color2 } from '../../components/colors/colors';
import { Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { FormProductCommandePages } from '../../components/routes/routesName';

export default function Maps({navigation, route}){

    const { id, title } = route.params;

    const [coor, setCoor] = useState({
        latitude: -21.453611,
        longitude: 47.085833,
    });

  return(
    <View style={GlobalStyles.container}>
        <Text style={MapStyles.HeaderText}>Veuillez indiquer le point de livraison de votre choix</Text>
        <MapView 
            style={GlobalStyles.maps}
            initialRegion={{
                latitude: -21.453611,
                longitude: 47.085833,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            provider="google"
            onPoiClick={(e) =>
                setCoor({
                    latitude: e.nativeEvent.coordinate.latitude,
                    longitude: e.nativeEvent.coordinate.longitude,
                })
            }
            onAccessibilityTap={(e) =>
                setCoor({
                    latitude: e.nativeEvent.coordinate.latitude,
                    longitude: e.nativeEvent.coordinate.longitude,
                })
            }
            onPress={(e) =>
                setCoor({
                    latitude: e.nativeEvent.coordinate.latitude,
                    longitude: e.nativeEvent.coordinate.longitude,
                })
            }
            onCalloutPress={ () => navigation.navigate( FormProductCommandePages, {id, title, coor} ) }
        >
            <Marker 
                coordinate={coor}
                pinColor={ Color2 }
                draggable={true}
                onDragEnd={ (e) =>
                    setCoor({
                        latitude: e.nativeEvent.coordinate.latitude,
                        longitude: e.nativeEvent.coordinate.longitude,
                    })
                }
            >
                <Callout style={MapStyles.calloutView}>
                    <Text style={MapStyles.calloutText}>Livrer Ici</Text>
                    <Button title='Indiquer' color={ Color2 } onPress={ () => navigation.navigate( FormProductCommandePages, {id, title, coor} ) }/>
                </Callout>
            </Marker>
            <Circle center={coor} radius={50} strokeColor={ Color2 } strokeWidth={1.5}/>
        </MapView>
    </View>
  );
}

const MapStyles = StyleSheet.create({
    HeaderText: {
        padding: 10,
        fontSize: 20,
        letterSpacing: 1,
        alignContent: 'center',
        alignItems: 'center'
    },
    calloutView: {
        padding: 5,
        alignContent: 'center',
        alignItems: 'center'
    },
    calloutText: {
        margin: 5,
        fontSize: 16,
        alignItems: 'center',
        fontStyle: 'italic',
        fontWeight: 'bold',
        letterSpacing: 1
    }
})