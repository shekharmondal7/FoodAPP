import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import { View, Text } from 'react-native'
import React from 'react'
import RestaurantScreen from './screens/RestaurantScreen';
import HomeScreens from './screens/HomeScreens';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="HomeScreen" component={HomeScreens} />
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}