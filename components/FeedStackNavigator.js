import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DiscoverScreen from '../screens/DiscoverScreen';
import EventsScreen from '../screens/EventsScreen';
import EventScreen from '../screens/EventScreen';
import HomeScreen from '../screens/HomeScreen';
import FeedScreen from '../screens/FeedScreen';

const Stack = createNativeStackNavigator();

export default function EventStackNavigator() {
    
    return (

        
        <Stack.Navigator screenOptions={({ route }) => ({
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
            
            <Stack.Screen name="HOMESCREEN" component={HomeScreen} options={{ title: 'FEED', }} />
            <Stack.Screen name="FEEDSCREEN" component={FeedScreen} options={{ title: 'EVENT' }} />
            {/*  <Stack.Screen name="Event" component={EventScreen} options={{ title: `${singleEvent.eventType},` }} />  */}
        </Stack.Navigator>
    )
};