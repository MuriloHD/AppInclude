import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack";
import Loading from './src/Views/Loading'
import Login from './src/Views/Login'

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{headerShown:false}} initialRouteName = "Login" >
        <Stack.Screen name = "Loading"  component ={Loading}></Stack.Screen>
        <Stack.Screen name = "Login" component = {Login}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
     
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
