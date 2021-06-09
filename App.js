import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator, HeaderBackButton, HeaderTitle} from "@react-navigation/stack";
import Loading from './src/Views/Loading'
import Login from './src/Views/Login'
import Cadastro from './src/Views/cadastro'
import Home from './src/Views/Home'
import PerfilMenbro from './src/Views/PerfilMenbro.jsx'
import { color } from 'react-native-reanimated';
import imageHome from './src/assets/home.png'

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName = "Login" >
        <Stack.Screen name = "Loading"  component ={Loading}></Stack.Screen>
        <Stack.Screen options ={{headerShown:false}} name = "Login" component = {Login}></Stack.Screen>

        <Stack.Screen 
        name="Cadastro" 
        component = {Cadastro}
        options = {({navigation}) =>{
          return({
            headerTitle:'INCLUDE',
            headerStyle:{backgroundColor:'#003057', },
            headerTitleAlign:'center',
            headerTitleStyle:{color:'#FFF',fontSize:16},
            headerRight:() => (
              <Text style = { {color:"#FFF",paddingRight:12,paddingBottom:1}}>Cadastro</Text>
            ),
            headerLeft:()=>(
              <HeaderBackButton tintColor={'white'} onPress = {()=> navigation.goBack()} />
            )
          })
        }}
        ></Stack.Screen>

        <Stack.Screen 
        name = "Home" 
        component = {Home} 
        options = {({route,navigation})=>{
          return({
            headerTitle:'INCLUDE',
            headerStyle:{backgroundColor:'#003057', },
            headerTitleAlign:'center',
            headerTitleStyle:{color:'#FFF',fontSize:16},
            headerLeft:() =>{
              return(
                <TouchableOpacity 
                onPress = {()=>( 
                  navigation.reset(
                    {
                      index:0,
                      routes:[{name:'Home'}]
                    }
                  )
                  )}>
                  <Image source = {imageHome} style = {{transform:[{scale:0.5}]}} ></Image>
                </TouchableOpacity>
              )
            },
            
          })
        }} ></Stack.Screen>
        
        <Stack.Screen 
        name = "Profile membro" 
        component = {PerfilMenbro}
        options= {({navigation})=>{
          return({
            headerTitle:'INCLUDE',
            headerStyle:{backgroundColor:'#003057', },
            headerTitleAlign:'center',
            headerTitleStyle:{color:'#FFF',fontSize:16},
            headerRight:() => (
              <Text style = { {color:"#FFF",paddingRight:12,paddingBottom:1}}>MEMBRO</Text>
            ),
            headerLeft:()=>(
              <HeaderBackButton tintColor={'white'} onPress = {()=> navigation.goBack()} />
            )
          })
        }}></Stack.Screen>
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
