import React from 'react';
import { TouchableOpacity,View,Image ,FlatList , SafeAreaView,NativeModules, Text,StyleSheet} from 'react-native';
import { styled } from "nativewind";
// import { Icon } from 'react-native-elements';


export const StyledView = styled(View);
export const StyledImage = styled(Image);
export const StyledText = styled(Text);
export const StyledFlatlist = styled(FlatList);
export const StyledTouchableOpacity = styled(TouchableOpacity);
// export const StyledIcon = styled(Icon);
const { StatusBarManager } = NativeModules;
const notchHeight = StatusBarManager.HEIGHT;
const customSafeAreaViewWithNotchFromStatusBar = ({children}) => {

    return (
            <SafeAreaView
            style={styles.safeArea}
            >
                {children}
            </SafeAreaView  >
   
    )
}

const styles =  StyleSheet.create({
    safeArea: {
        marginTop: notchHeight,
    },
});



export const StyledSafeAreaView = styled(customSafeAreaViewWithNotchFromStatusBar);




