import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatStackNavigator from './ChatStackNavigator';
import HomeScreen from './../screens/HomeScreen';
import DiscoverScreen from './../screens/DiscoverScreen';
import MenuScreen from './../screens/MenuScreen';
import NotificationScreen from './../screens/NotificationScreen';
import { HeaderShownContext } from '@react-navigation/elements';
import SignupScreen from './../screens/SignupScreen';
import LoginScreen from './../screens/LoginScreen';
import { useSelector } from 'react-redux';

const Navigation = props => {
    
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    const loggedInUser = useSelector(state => state.user.loggedInUser);

    return (
    <NavigationContainer>
        {loggedInUser !== undefined ? (
        
        <Tab.Navigator screenOptions={{ headerShown: true }}>
        <Tab.Screen name="HOME" component={HomeScreen} />
        <Tab.Screen name="DISCOVER" component={DiscoverScreen} />
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