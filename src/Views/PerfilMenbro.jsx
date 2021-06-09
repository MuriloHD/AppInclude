import React from 'react';
import { Image, Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import { color } from 'react-native-reanimated';
import ImagemFoto from '../assets/ImagemFoto.png'
import Selo1 from '../assets/SELO1.png'
import Selo2 from '../assets/SELO2.png'
import Tarefas from '../Components/Tarefas'
// import { Container } from './styles';

const Views = () => {
    return <View style = {styles.background}>
        <View style = {styles.viewPerfil}>
            <Image source = {ImagemFoto} style={styles.avatar}></Image>
            <View style = {styles.informacoes}>
                <Text style = {{color:'#003057',fontSize:20}}>NOME</Text>
                <Text style = {{color:'#003057'}}>DIRETORIA</Text>
                <Text style = {{color:'#003057'}}>PONTUAÇÃO</Text>
            </View>
        </View>
        <View style = {styles.viewSelos}>
            <Text style = {{fontSize:25,marginBottom:25, color:'#003057'}}>SELOS</Text>
            <View style = {styles.selos}>
                <Image source = {Selo1} style = {{transform:[{scale:0.50},{translateX:-30},{translateY:-80}]}}></Image>
                <Image source = {Selo2} style = {{transform:[{scale:0.50},{translateX:-100},{translateY:-70}]}}></Image>
            </View>
        </View>
        <View style = {styles.viewTarefas}>
            <Text style = {{fontSize:25,marginBottom:25, color:'#003057'}}>Tarefas</Text>
            <Tarefas></Tarefas>
        </View>
    </View>;
}

export default Views;

const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#FFF'
    },
    viewPerfil:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#FFF',
        paddingHorizontal:30,
        borderBottomColor:'#003057',
        borderBottomWidth:1,
        alignItems:'center',
        marginTop:10,
        transform:[{scaleY:0.95}],
        
        
    },
    avatar:{
        transform:[{scale:0.5},{translateX:-70}],
        borderRadius:10,
    },
    informacoes:{
        alignItems:'flex-start',
        transform:[{translateX:-60}]
    },
    viewSelos:{
        width:'90%',
        alignItems:'flex-start',
        marginTop:20,
        borderBottomColor:'#003057',
        borderBottomWidth:1,
    },
    selos:{
        display:'flex',
        flexDirection:'row'
    },
    viewTarefas:{
        marginTop:20,
        width:'90%',
        alignItems:'flex-start'
    }

})