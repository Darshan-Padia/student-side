import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { dbdb } from "../firebase";
import * as Location from "expo-location";
const Main = ({ navigation }) => {
    const [busNumber, setBusNumber] = useState("");
    const [driverLocation, setDriverLocation] = useState(null);
    const [studentLocation, setStudentLocation] = useState(null);
    let studentLoca;
    let driverLoca;
    const checkBusExists = async () => {
        let busExists = false;
        const busRef = dbdb.ref(`buses/${busNumber}`);
        busRef.on("value", (snapshot) => {
            const bus = snapshot.val();
            console.log(bus, "bus");
            if (bus === null || bus === undefined ) {
                busExists= false;
            }else{
                busExists = true;
            }
        });
        return busExists;
    };

    const handleOpenMapScreen = async () => {
        
        if (await checkBusExists()) {
            console.log("Bus exists");
            // const fetchLocation = async () => {
            const locationRef = dbdb.ref(`buses/${busNumber}/location`);
            console.log(locationRef);
            locationRef.on("value", (snapshot) => {
                const location = snapshot.val();
                console.log(location);
                setDriverLocation(location);
                driverLoca = location;
            });

            // const fetchStudentLocation = async () => {
            const { status } =
                await Location.requestForegroundPermissionsAsync();

            if (status !== "granted") {
                console.log("Location permission denied");
                return;
            }

            const location = await Location.getCurrentPositionAsync({});
            setStudentLocation(location.coords);
            studentLoca = location.coords;
            // };
            console.log(location.coords, "location");
            // fetchStudentLocation();

            console.log(studentLoca, "studentLoca");
            navigation.navigate("MapScreen", {
                studentLoca,
                driverLoca,
                busNumber,
            });

        } else {
            alert("No such bus exists");
        }
    };

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Enter Bus Number:</Text>
            <TextInput
                value={busNumber}
                onChangeText={setBusNumber}
                placeholder="Enter bus number"
                style={{ borderWidth: 1, padding: 5 }}
            />
            <TouchableOpacity
                onPress={handleOpenMapScreen}
                style={{ backgroundColor: "green", padding: 10, marginTop: 10 }}
            >
                <Text style={{ color: "white" }}>Open Map</Text>
            </TouchableOpacity>
        </View>
    );
};

export { Main };
