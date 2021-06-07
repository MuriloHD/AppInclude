import React from 'react';
import { useState } from 'react';
import { View,Image, TextInput, Button,StyleSheet ,TouchableOpacity, Text, StatusBar, KeyboardAvoidingView} from 'react-native';
import { color } from 'react-native-reanimated';
import Logo from '../assets/LOGOS/logo-completa.png'




const Views = ({navigation}) => {
    const [usuario,setUsuario] = useState('')
    const [senha,setSenha] = useState('')

    return <KeyboardAvoidingView style ={styles.contentor}>
    <View style = {styles.imageView}>
        <Image source = {Logo} style = {styles.image}  ></Image>
    </View>
    <View style ={styles.inputsView}>
        <TextInput 
        style = {styles.text}
        placeholder = "Usuario" 
        onChangeText = {setUsuario} 
        value = {usuario} 
        textAlign = "center"
        ></TextInput>
        
        <TextInput 
        style ={styles.text}
        placeholder = "Senha"
        onChangeText = {setSenha}
        value = {senha}
        textAlign = 'center'
        ></TextInput>

        <View style ={styles.buttonsView}>
                <TouchableOpacity onPress = {()=> navigation.navigate('Cadastro')} style ={[styles.button,{paddingVertical:10,paddingHorizontal:20}]}>
                    <Text style = {styles.textButton}>CADASTRO</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => navigation.navigate('Home')} style ={[styles.button,{marginLeft:90,paddingVertical:10,paddingHorizontal:30}]}>
                    <Text style = {styles.textButton}>ENTRAR</Text>
                </TouchableOpacity>

        </View>
            
    </View>        
        
</KeyboardAvoidingView>;
}

export default Views;

const styles = StyleSheet.create({
    contentor: {
            alignItems:'center',
            justifyContent:'center',
            display:'flex',
            flex:1,
            backgroundColor:'#FFF'
            
    },
    imageView:{
        flex:1,
        justifyContent:'center',
        height:'100%'
        
    },
    image:{        
        marginTop:190,
        transform:[{scale:0.10}]
    },
    inputsView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'90%'

    },
    text:{
        backgroundColor:'#FFF',
        width:'90%',
        marginBottom:15,
        color:'#222',
        fontSize:17,
        borderRadius:7,
        padding:10,
        borderWidth:0.5,
        borderColor:'#FFF',
        elevation:10,
        borderStyle:'dotted'
    },
    buttonsView:{
        display:'flex',
        flexDirection:'row',
        width:'90%',
        justifyContent:'flex-start'
        
        
        
    },
    button:{
        justifyContent:'flex-start',
        backgroundColor:'#003057',
        
        borderRadius:10,
        elevation:10
        
    },
    textButton:{
        color:'#FFF',
        fontWeight:'bold',
        
    }
})
