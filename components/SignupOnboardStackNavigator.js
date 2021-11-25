import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from '../screens/SignupScreen';
import OnboardUserinfoScreen from '../screens/OnboardUserinfoScreen';

const Stack = createNativeStackNavigator();

export default function SignupOnboardStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SIGNUP" component={SignupScreen}  />
            <Stack.Screen name="OnboardUserinfoScreen" component={OnboardUserinfoScreen} options={{ title: 'User info' }} />
        </Stack.Navigator>
    )
};