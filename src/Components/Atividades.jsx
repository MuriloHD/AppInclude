import React,{useState} from 'react';
import { View,Text,CheckBox,StyleSheet } from 'react-native';

// import { Container } from './styles';

const Components = (props) => {
    const [feito,setFeito] = useState(false)
    return(
        <View style = {styles.background}>
            <CheckBox value = {feito} onValueChange = {setFeito}></CheckBox>
            <Text style = {styles.texto}>{props.nome}</Text>
        </View>
    )
}

export default Components;
const styles = StyleSheet.create({
    background:{
        display:'flex',
        flexDirection:'row'
    },
    texto:{
        color:'#333553',
        marginTop:5,
        marginLeft:5
    }
})