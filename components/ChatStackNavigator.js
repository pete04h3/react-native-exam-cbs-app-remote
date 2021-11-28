import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from './../screens/ChatScreen';
import ChatMessagesScreen from './../screens/ChatMessagesScreen';

const Stack = createNativeStackNavigator();

export default function ChatStackNavigator() {
    return (
        <Stack.Navigator   screenOptions={({ route }) => ({
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
            textTransform: 'uppercase'
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
                textTransform: 'uppercase'
            }
          })}
          >
            <Stack.Screen name="CHAT" component={ChatScreen}  options={{ title: 'CHAT', }} />
            <Stack.Screen name="ChatMessages" component={ChatMessagesScreen} 
            options={{ title: 'MESSAGES', }}/>
        </Stack.Navigator>
    )
};

