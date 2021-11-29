import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DiscoverScreen from '../screens/DiscoverScreen';
import EventsScreen from '../screens/EventsScreen';
import EventScreen from '../screens/EventScreen';

const Stack = createNativeStackNavigator();

export default function EventStackNavigator() {
    return (
        <Stack.Navigator screenOptions={({ route }) => ({
            headerTitleStyle: {
                fontFamily: "Teko",
                fontSize: 26,
                color: '#5050A5',
                textTransform: 'uppercase'
              }
         })} >
            <Stack.Screen name="Discover" component={DiscoverScreen} />
            <Stack.Screen name="Events" component={EventsScreen} />
            <Stack.Screen name="Event" component={EventScreen} />
        </Stack.Navigator>
    )
};