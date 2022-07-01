import { StatusBar } from 'expo-status-bar';
import { DatePickerAndroid, Pressable, StyleSheet, Text, View, Image } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
// import pages 
import BooksThatInspire from "./src/screens/BooksThatInspire";
import ExplorePage from "./src/screens/ExplorePage";
import LandingPage from "./src/screens/LandingPage";
import LoginPage from "./src/screens/LoginPage";
import SettingsPage from "./src/screens/SettingsPage";
import SignUpPage from "./src/screens/SignUpPage";
import ForgotPassword from "./src/screens/ForgotPassword";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function Tabs() {
  return(
      <Tab.Navigator initialRouteName = 'Explore'
        screenOptions={({route}) => ({
          tabBarStyle: {
            paddingTop: 10,
            borderRadius: 200,
            shadowColor: "grey",
            shadowOffset: { width: 0, height: 0 },  // negative values bring shadow up higher
            shadowOpacity: 0.60,
            shadowRadius: 20,
            /*
            backgroundColor: colors.BACKGROUND,
            paddingTop: spacings.MEDIUM,
            borderTopLeftRadius: 20,  // rounded tab bar style
            borderTopRightRadius: 20,  // rounded tab bar style
            borderTopColor: 'transparent',
            shadowColor: colors.SECONDARY,
            shadowOffset: { width: 0, height: 0 },  // negative values bring shadow up higher
            shadowOpacity: 0.75,
            shadowRadius: 20,
            */
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Explore') {
              iconName = focused
                ? 'map'
                : 'map-outline';
            } else if (route.name === 'BooksThatInspire') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#3F73F7',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Explore" component={ExplorePage} options={{headerShown: false}}/>  
        <Tab.Screen name="BooksThatInspire" component={BooksThatInspire} options={{headerShown: false}}/>
        <Tab.Screen name="Settings" component={SettingsPage} options={{headerShown: false}}/>   
      </Tab.Navigator>
  )
}
export default function App() {  

  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName='Landing'>
        <Stack.Screen name="Landing" component={LandingPage} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}}/>      
        <Stack.Screen name="SignUp" component={SignUpPage} options={{headerShown: false}}/> 
        <Stack.Screen name="Forgot" component={ForgotPassword} options={{headerShown: false}}/>   
        <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer> 

  )
}