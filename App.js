import * as React from 'react';
import {TextInput,StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileActivity from './component/ProfileActivity'
import HomeActivity from './component/HomeActivity'
import ListScreen from './component/ListScreen'

  
const Stack = createStackNavigator();

function App() {
  
// Sentry.nativeCrash();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeActivity} />
        <Stack.Screen name="Details" component={ProfileActivity} />
        <Stack.Screen name="List" component ={ListScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;