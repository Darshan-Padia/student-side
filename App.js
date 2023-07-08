import { StatusBar } from 'expo-status-bar';
import { StyledView , StyledText } from './helper';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoadingScreen } from './screen/LoadingScreen';
import { Login } from './screen/Login';
import { Register } from './screen/Register';
import {Main} from './screen/Main'
import {MapScreen} from './screen/MapScreen'
export default function App() {
    const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoadingScreen"
            component={LoadingScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              headerShown: false,
            }}
          />
           <Stack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{
                headerShown: false,
                }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
}


