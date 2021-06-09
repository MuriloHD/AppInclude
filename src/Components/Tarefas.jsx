import React from 'react';
import { View ,StyleSheet,Text} from 'react-native';

// import { Container } from './styles';

const Components = () => {
    return (
    <View style= {styles.background}>
        <View style = {styles.viewTexto1}>
            <Text style = {styles.textTitulo}>TITULO</Text>
            <Text style = {styles.textPrazo}>PRAZO</Text>
        </View>
        <Text style = {styles.textDescricao}>DESCRICAO</Text>

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

export default Components;

const styles = StyleSheet.create({
    background:{
        width:'100%',
        backgroundColor:'#C4C4C4',
        paddingTop:10,
        borderRadius:5,
        elevation:5,
    },
    viewTexto1:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        marginBottom:10,
        
    },
    textTitulo:{
        color:'#333533',
        marginLeft:10,

    },
    textPrazo:{
        color:'#333533',
        width:'100%',
        paddingLeft:240,
    },
    textDescricao:{
        marginLeft:10,
        color:'#333533',
    },
    viewBarra:{
        alignItems:'center',
        marginVertical:10,
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