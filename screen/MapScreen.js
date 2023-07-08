import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import MapView, { Marker } from "react-native-maps";
const MapScreen = ({route,navigation}) => {
    // getting the params
    const{studentLoca,driverLoca,busNumber}=route.params
    console.log(studentLoca,driverLoca,busNumber,'mapscreen');
    const handleOpenGoogleMaps = () => {
        const { latitude, longitude } = studentLoca;
        const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${driverLoca.latitude},${driverLoca.longitude}`;
        Linking.openURL(url);
    };

    return (
        <View style={{ flex: 1 }}>
            {driverLoca && studentLoca ? (
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: driverLoca.latitude,
                        longitude: driverLoca.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: driverLoca.latitude,
                            longitude: driverLoca.longitude,
                        }}
                        title={`Bus Number: ${busNumber}`}
                    />
                    <Marker
                        coordinate={{
                            latitude: studentLoca.latitude,
                            longitude: studentLoca.longitude,
                        }}
                        title="Current Location"
                    />
                </MapView>
            ) : (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text>Loading...</Text>
                </View>
            )}
            <TouchableOpacity
                onPress={handleOpenGoogleMaps}
                style={{
                    backgroundColor: "blue",
                    padding: 10,
                    alignItems: "center",
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                    right: 10,
                }}
            >
                <Text style={{ color: "white" }}>Open in Google Maps</Text>
            </TouchableOpacity>
        </View>
    );
};

export { MapScreen };
