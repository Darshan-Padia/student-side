import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Keyboard,
  Alert,
  Button,
} from "react-native";
import {auth,dbdb} from "../firebase"

// import { CTAButton } from "../Components/CTAButton/CTAButton";
import  { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const Register = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const nav = useNavigation();

  const createProfile = async (response) => {
    // Create Profile Query Here
   dbdb.ref(`users/${response.user.uid}`).set({
        name: name,
        email: email,
        uid: response.user.uid,
        createdAt: new Date().toISOString(),
        });
  };

  const registerAndGoToMainFlow = async () => {
    // Register User Query Here
    if (email && password) {
        try {
            const response = await auth.createUserWithEmailAndPassword(email, password);
            if (response.user) {
              await createProfile(response);
              nav.replace("Main");
            }
          } catch (error) {
            Alert.alert("Error", error.message);
          }
        
    }
  };

  return (
    <Pressable style={styles.contentView} onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.contentView}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Register</Text>
          </View>
          <View style={styles.mainContent}>
            <TextInput
              style={styles.loginTextField}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.loginTextField}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              inputMode="email"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.loginTextField}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <Button
            title="Sign Up"
            onPress={registerAndGoToMainFlow}
            variant="primary"
          />
          <Button title="Go Back" onPress={nav.goBack} variant="secondary" />
        </View>
      </SafeAreaView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    marginHorizontal: 50,
    backgroundColor: "white",
    paddingTop: 20,
  },
  titleContainer: {
    flex: 1.2,
    justifyContent: "center",
  },
  titleText: {
    fontSize: 45,
    textAlign: "center",
    fontWeight: "200",
  },
  loginTextField: {
    borderBottomWidth: 1,
    height: 60,
    fontSize: 30,
    marginVertical: 10,
    fontWeight: "300",
  },
  mainContent: {
    flex: 6,
  },
});
