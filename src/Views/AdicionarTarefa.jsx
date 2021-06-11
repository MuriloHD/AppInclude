import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { Text, TextInput, View,StyleSheet} from 'react-native';
import { useState } from 'react/cjs/react.development';

// import { Container } from './styles';

const Views = () => {
    const [categoria,setCategoria] = useState('PONTUALIDADE')
    return(
        <View style = {styles.background}>
            <View style = {styles.viewTitulo}>
                <Text style = {styles.titulo}>TITULO</Text>
                <View style = {styles.viewDescricao}>
                    <Text>DESCRIÇÂO</Text>
                </View>
            </View>

            <View style = {styles.viewMenbros}>
                <Text style = {styles.titulo}>ADICIONAR MENBROS</Text>
                <View style = {styles.viewAvatares}>
                    <Text style = {styles.avatares}>Avatar</Text>
                    <Text style = {styles.avatares}>Avatar</Text>
                    <Text style = {styles.avatares}>Avatar</Text>
                </View>

            </View>
            
            <View style = {styles.viewTitulo}>
                <Text style = {styles.titulo}>Pontuação</Text>
                <Picker mode = "dropdown" style = {styles.picker} selectedValue = {categoria} onValueChange = {setCategoria}>
                    <Picker.Item label = "PONTUALIDADE" value = 'PONTUALIDADE'></Picker.Item>
                    <Picker.Item label = "ASSIDUIDADE" value = 'Assiaduidade'></Picker.Item>
                    <Picker.Item label = "DENTRO DO PRAZO" value = 'DENTRO DO PRAZO'></Picker.Item>
                    <Picker.Item label = "PERSONALIZADO" value = 'PERSONALIZADO'></Picker.Item>
                </Picker>
            </View>

            <View style ={styles.viewTitulo}>
                <Text style = {styles.titulo}>SELOS(s)</Text>
            </View>
        </View>
    ) 
}

export default Views;

const styles = StyleSheet.create({
    background:{
        flex:1,
    },
    viewTitulo:{
        marginLeft:10,
        marginTop:30,
    },
    titulo:{
        color:'#003057',
        fontSize:20,
        marginBottom:10,

    },
    viewDescricao:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#C4C4C4',
        width:370,
        height:130,
        borderRadius:5,
        elevation:5
        
    },
    viewMenbros:{
        marginTop:20,
        marginLeft:10,
    },
    viewAvatares:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
    },
    avatares:{
        backgroundColor:'#d3d3d3',
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:40,
        borderRadius:200,
        margin:5,
        elevation:5,
        marginHorizontal:30,
    },
    
    picker:{
        backgroundColor:'#FFF',
        width:'45%',
        borderRadius:10,
        elevation:10,
    }
})