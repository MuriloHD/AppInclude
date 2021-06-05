import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator, HeaderTitle} from "@react-navigation/stack";
import Loading from './src/Views/Loading'
import Login from './src/Views/Login'
import Cadastro from './src/Views/cadastro'
import { color } from 'react-native-reanimated';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName = "Cadastro" >
        <Stack.Screen name = "Loading"  component ={Loading}></Stack.Screen>
        <Stack.Screen options ={{headerShown:false}} name = "Login" component = {Login}></Stack.Screen>
        <Stack.Screen 
        name="Cadastro" 
        component = {Cadastro}
        options = {({route}) =>{
          return({
            headerTitle:'INCLUDE',
            headerStyle:{backgroundColor:'#191970', },
            headerTitleAlign:'center',
            headerTitleStyle:{color:'#FFF',fontSize:16},
            headerRight:() => (
              <Text style = { {color:"#FFF",paddingRight:12,paddingBottom:1}}>Cadastro</Text>
            )
          })
        }}
        ></Stack.Screen>
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
