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
            <Stack.Screen name="SIGNUP" component={SignupScreen}  />
            <Stack.Screen name="OnboardUserinfoScreen" component={OnboardUserinfoScreen} options={{ headerShown: false }}  />
            <Stack.Screen name="NOTIFICATIONS" component={NotificationScreen} options={{ headerShown: false }}  />
            <Stack.Screen name="ONBOARDINGSCREEN1" component={OnboardingScreen1} options={{ headerShown: false }} />
            <Stack.Screen name="ONBOARDINGSCREEN2" component={OnboardingScreen2} options={{ headerShown: false }} />
            <Stack.Screen name="ONBOARDINGSCREEN3" component={OnboardingScreen3} options={{ headerShown: false }} />
            <Stack.Screen name="ONBOARDINGSCREEN4" component={OnboardingScreen4} options={{ headerShown: false }} /> 
        </Stack.Navigator>
    )
};