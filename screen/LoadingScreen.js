import React, { useEffect, useState } from "react";

import { StyledView, StyledText } from "../helper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { auth } from "../firebase";
export const LoadingScreen = () => {
    const nav = useNavigation();

    function onAuthStateChanges(user) {
        setTimeout(() => {
            if (user) {
                nav.replace("Main");
            } else {
                nav.replace("Login");
            }
        }, 1000);
    }

    useEffect(() => {
        const sub = auth.onAuthStateChanged(onAuthStateChanges);
        return sub;

        // Login Decision Logic Here
    }, []);

    return (
        <StyledView
            className="
    flex-1
    justify-center
    items-center
    bg-white
    "
        >
            <StyledText
                className="
        text-7xl
        font-light
        text-center
      "
            >
                Loading
            </StyledText>
        </StyledView>
    );
};
