import React , {useState}from 'react';
import { View,KeyboardAvoidingView, Text, StyleSheet,CheckBox,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import  {Picker}  from '@react-native-picker/picker'

const Views = () => {

    const [nome,setNome] = useState('')
    const [sobrenome,setSobrenome] = useState('')
    const [usuario,setUsuario] = useState('')
    const [senha,setSenha] = useState('')
    const [email,setEmail] = useState('')
    const [diretoria,setDiretoria] = useState('PRESIDENCIA')
    const [cargo,setCargo] = useState('')
    const [adm,setAdm] = useState(false)

    return(
    <KeyboardAvoidingView style = {styles.background}>
        <View style ={styles.viewNomeSobrenome}>
            <View style = {styles.viewnome}>
                <Text>NOME</Text>
                <TextInput style = {styles.input}  value = {nome} onChangeText = {setNome}></TextInput>
            </View>
            <View style ={styles.viewSobrenome}>
                <Text>SOBRENOME</Text>
                <TextInput style = {styles.input} value ={sobrenome} onChangeText = {setSobrenome}></TextInput>
            </View>
        </View>

        <View style = {styles.viewInformacoes}>
            <Text>USUARIO</Text>
            <TextInput style = {styles.input} value = {usuario} onChangeText = {setUsuario}  ></TextInput>

            <Text>SENHA</Text>
            <TextInput style = {styles.input} value = {senha} onChangeText = {setSenha}></TextInput>

            <Text>E-MAIL</Text>
            <TextInput style = {styles.input} value = {email} onChangeText = {setEmail}></TextInput>
    
            <Text>DIRETORIA</Text>
            <View style = {styles.viewDiretoria}>
                <Picker mode="dropdown"  style= {styles.picker} selectedValue = {diretoria} onValueChange = {setDiretoria} >
                    <Picker.Item label = "PRESIDENCIA" value = "PRESIDENCIA"></Picker.Item>
                    <Picker.Item label = "ADM/FIM" value = "ADM/FIM"></Picker.Item>
                    <Picker.Item label = "PRODUTOS" value = "PRODUTOS"></Picker.Item>
                    <Picker.Item label = "GESTAO DE PESSOAS" value = "GESTAO DE PESSOAS"></Picker.Item>
                </Picker>
                <TextInput style ={styles.inputCargo} placeholder = "Cargo" value = {cargo} onChangeText = {setCargo}></TextInput>
            </View>
            <View style = {styles.viewAdministrador}>
                <CheckBox style = {styles.inputCheckBox} value = {adm} onValueChange = {setAdm}></CheckBox>
                <Text style = {{marginTop:5,marginLeft:5}}>ADMINISTRADOR</Text>
            </View>
            <View style = {styles.viewButton}>
                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.textButton}>ENVIAR</Text>
                </TouchableOpacity>
            </View>

        </View>
    </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        //justifyContent:'flex-start',
        alignItems:'center'
    },
    viewNomeSobrenome:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        width:'90%',
        marginTop:10,
        
        
    },
    viewnome:{
        padding:10,
        display:'flex',
        flex:1
        //marginRight: 20,
    },
    input:{
        elevation:10,
        backgroundColor:'#FFF',
        borderRadius:7,
        borderWidth:0.5,
        borderColor:'#FFF',
        width:'100%',
        marginTop:5,
        marginBottom:10,
        paddingVertical:10,
        paddingHorizontal:10
    },
    viewSobrenome:{
        padding:10,
        display:'flex',
        flex:1
        
    },
    
    viewInformacoes:{
        width:'90%',
        display:'flex',
        flex:1,
        justifyContent:'flex-start',
        padding:10,
    },
    viewDiretoria:{
        display:'flex',
        flexDirection:'row',
        width:'90%',
        marginTop:5
    },
    inputCargo:{
        elevation:10,
        backgroundColor:'#FFF',
        borderRadius:7,
        borderWidth:0.5,
        borderColor:'#FFF',
        width:'50%',
        marginTop:5,
        marginBottom:10,
        paddingVertical:11,
        paddingHorizontal:10
    },
    picker:{
        width:'60%',
        backgroundColor:'#fff',
        color:'#000',
        //borderColor:'#FFF',
        //marginRight:10,
        borderWidth:1,
        borderRadius:10,
        marginRight:5,
        marginTop:5,
        elevation:10
    
        
    },
    viewAdministrador:{
        display:'flex',
        flexDirection:'row',
        marginTop:30
    },
    inputCheckBox:{
        transform:[{scale:1.5}],

    },
    viewButton:{
        
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        justifyContent:'flex-start',
        backgroundColor:'#191970',
        padding:10,
        borderRadius:10,
        elevation:10
        
    },
    textButton:{
        color:'#FFF',
        fontWeight:'bold',
        
    }
    

})

export default Views;

