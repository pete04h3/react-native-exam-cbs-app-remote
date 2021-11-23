import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatStackNavigator from './ChatStackNavigator';
import HomeScreen from './../screens/HomeScreen';
import EventStackNavigator from './EventStackNavigator';
import MenuScreen from './../screens/MenuScreen';
import NotificationScreen from './../screens/NotificationScreen';
import { HeaderShownContext } from '@react-navigation/elements';
import SignupScreen from './../screens/SignupScreen';
import LoginScreen from './../screens/LoginScreen';
import { useSelector } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
// remember this when using fonts!!
import { useFonts } from 'expo-font';


const Navigation = props => {
    
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    const loggedInUser = useSelector(state => state.user.loggedInUser);

    // remember this when using fonts!!
    const [loaded] = useFonts({Teko: require('../assets/fonts/Teko-Medium.ttf'),});
      if (!loaded) {return null;}

    return (
    <NavigationContainer>
        {loggedInUser !== undefined ? (
        
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'HOME') {
                iconName = focused
                  ? 'home-outline'
                  : 'home-outline';
              } else if (route.name === 'DISCOVEROUTER') {
                iconName = focused ? 'search-outline' : 'search-outline';
              } else if (route.name === 'CHATOUTER') {
                iconName = focused ? 'chatbubble-outline' : 'chatbubble-outline';
            } else if (route.name === 'NOTIFCATIONS') {
                iconName = focused ? 'notifications-outline' : 'notifications-outline';
              }  else if (route.name === 'MENU') {
                iconName = focused ? 'menu-outline' : 'menu-outline';
              } 
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#5050A5',
            tabBarInactiveTintColor: 'gray',
            
            tabBarStyle: { 
            height: 60,
            
           
            backgroundColor: 'white',
            },
            tabBarLabelStyle: {
              fontFamily: "Teko",
              fontSize: 16,
              textTransform: 'uppercase'
            },
            headerTitleStyle: {
              fontFamily: "Teko",
              fontSize: 26,
              color: '#5050A5',
              textTransform: 'uppercase'
            },
            headerStyle: {
             
            }
          })}
        >
        <Tab.Screen name="HOME" component={HomeScreen} />
        <Tab.Screen name="DISCOVEROUTER" component={EventStackNavigator} options={{ title: 'DISCOVER', headerShown: false }} />
        <Tab.Screen name="CHATOUTER" component={ChatStackNavigator} options={{ title: 'CHAT' , headerShown: false }} />
        <Tab.Screen name="NOTIFCATIONS" component={NotificationScreen} />
        <Tab.Screen name="MENU" component={MenuScreen} />
        </Tab.Navigator>

    ) : (

        <Stack.Navigator>
            <Stack.Screen name="SIGNUP" component={SignupScreen} />
            <Stack.Screen name="LOGIN" component={LoginScreen} />
        </Stack.Navigator>
    
    )}
    </NavigationContainer>
 );
}

const styles = StyleSheet.create({
   
});

export default Navigation;