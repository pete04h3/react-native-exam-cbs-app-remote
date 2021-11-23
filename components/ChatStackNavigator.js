import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from './../screens/ChatScreen';
import ChatMessagesScreen from './../screens/ChatMessagesScreen';

const Stack = createNativeStackNavigator();

export default function ChatStackNavigator() {
    return (
        <Stack.Navigator  screenOptions={{ headerShown: true }}>
            <Stack.Screen name="CHAT" component={ChatScreen} />
            <Stack.Screen name="ChatMessages" component={ChatMessagesScreen} 
            options={{ title: 'MESSAGES' }}/>
        </Stack.Navigator>
    )
};