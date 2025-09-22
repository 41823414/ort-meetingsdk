import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './screens/login-screen';
import { JoinScreen } from './screens/join-screen';

const Stack = createStackNavigator();

export function Navigation() {
  return (
    <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{
        headerShown: false // Hide header for all screens by default
      }}
    >
      <Stack.Screen 
        name="Login" 
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="JoinMeeting" 
        component={JoinScreen}
        options={{ 
          headerShown: true,
          title: 'Join Meeting',
          // Prevent going back to Login
          gestureEnabled: false
        }}
      />
    </Stack.Navigator>
  );
}
