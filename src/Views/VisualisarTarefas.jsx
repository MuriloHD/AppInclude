import React from 'react';
import { Text, View,CheckBox,StyleSheet } from 'react-native';
import Atividades from '../Components/Atividades'
// import { Container } from './styles';

const Views = () => {
    return( 
        <View style = {styles.background}>
            <View style = {styles.viewTitulo}>
                <Text style = {styles.titulo}>TÍTULO</Text>
                <View style = {styles.viewDescricao}>
                    <Text>Descrição</Text>
                </View>
            </View>

            <View style = { styles.viewMenbros}>
                <Text style = {styles.titulo}>MENBROS ENVOLVIDOS</Text>
                <View style = {styles.viewAvatares}>
                    <Text style = {styles.avatares}>Avatar</Text>
                    <Text style = {styles.avatares}>Avatar</Text>
                    <Text style = {styles.avatares}>Avatar</Text>
                </View>
            </View>

            <View style = {styles.viewCheklists}>
                <Text style = {styles.titulo}>CHECKLIST DE ATIVIDADES</Text>
                <Atividades nome = 'Atividade 1'></Atividades>
                <Atividades nome = 'Atividade 2'></Atividades>
                <Atividades nome = 'Atividade 3'></Atividades>
            </View>

            <View style = {styles.viewBarra}>
            <View style = {styles.barra}>
                <View style = {styles.progresso}>
                    <Text style = {{fontSize:10}}>12%</Text>
                </View>
            </View>
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
    viewCheklists:{
        marginLeft:10,
        marginTop:30,
    },
    viewBarra:{
        alignItems:'center',
        marginTop:70,
    },
    barra:{
        backgroundColor:'#000',
        padding:10,
        width:'80%',
        borderRadius:20,
    },
    progresso:{
        backgroundColor:'#FFD343',
        paddingVertical:5,
        width:'12%',
        borderRadius:10,
        alignItems:'center'
    }
})