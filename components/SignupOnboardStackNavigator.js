import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// ONBOARDING SCREENS
import OnboardingScreen1 from '../screens/onBoardingScreen1';
import OnboardingScreen2 from '../screens/onBoardingScreen2';
import OnboardingScreen3 from '../screens/onBoardingScreen3';
import OnboardingScreen4 from '../screens/onBoardingScreen4';

// USER-INFO
import OnboardUserinfoScreen from '../screens/OnboardUserinfoScreen';

// SIGNUPSCREEN
import SignupScreen from '../screens/SignupScreen';
import NotificationScreen from '../screens/NotificationScreen';

const Stack = createNativeStackNavigator();

export default function SignupOnboardStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SIGNUP" component={SignupScreen}  />
            <Stack.Screen name="OnboardUserinfoScreen" component={OnboardUserinfoScreen} options={{ title: 'User info' }} />
            <Stack.Screen name="NOTIFICATIONS" component={NotificationScreen} />
            <Stack.Screen name="ONBOARDINGSCREEN1" component={OnboardingScreen1} options={{ headerShown: false }} />
            <Stack.Screen name="ONBOARDINGSCREEN2" component={OnboardingScreen2} options={{ headerShown: false }} />
            <Stack.Screen name="ONBOARDINGSCREEN3" component={OnboardingScreen3} options={{ headerShown: false }} />
            <Stack.Screen name="ONBOARDINGSCREEN4" component={OnboardingScreen4} options={{ headerShown: false }} /> 
        </Stack.Navigator>
    )
};