import React from 'react';
import { View ,Image , StyleSheet} from 'react-native';
import Logo from '../assets/LOGOS/logo-completa.png'
// import { Container } from './styles';

const Views = () => {
  return( 
    <View style = {styles.container}>
        
        <Image style = {styles.imagem} source = {Logo} ></Image>
        
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flex:1
    },
    imagem :{
        width: 300,
        height: 300

    }
})

export default Views;