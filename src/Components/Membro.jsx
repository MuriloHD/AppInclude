import React from 'react';
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { Container } from './styles';

const Components = (props) => {
    return <TouchableOpacity style ={styles.background} onPress = {()=>props.navigation.navigate('Profile membro')}>
        <Text style = {styles.textId}>{props.id}º</Text> 
        <Text style = {styles.avatar}>Avatar</Text>
        <View style = {styles.viewInfo}>
            <Text style = {styles.nome}>{props.nome}</Text>
            <Text style = {styles.pontuacao}>{props.pontuacao} pts</Text>
        </View>
        
        
    </TouchableOpacity>
}

export default Components;

const styles = StyleSheet.create({
    background:{
        display:'flex',
        flexDirection:'row',
        marginTop:20,
        marginLeft:20
    },
    textId:{
        fontSize:35,
        marginTop:15,
        marginRight:5
    },
    avatar:{
        backgroundColor:'#d3d3d3',
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:40,
        borderRadius:200,
        margin:5,
        elevation:5
        
    },
    viewInfo:{
        marginTop:20,
        marginLeft:10,
    },
    nome:{
        fontSize:25,
        color:'#003057',

    },
    pontuacao:{
        color:'#003057'
    }
})