import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {auth} from '../firebase/config';

class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            email: '',
            password: '',
            userName:''
        }
    }

    render(){
        console.log(this.state.email);
        console.log(this.state.password);
        console.log(this.props);
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Registro</Text>
                <TextInput 
                    style={styles.field}
                    keyboardType='default'
                    placeholder='Email'
                    onChangeText={text => this.setState({ email: text})}
                />
                <TextInput 
                    style={styles.field}
                    keyboardType='default'
                    placeholder='User Name'
                    onChangeText={text => this.setState({ userName: text})}
                />
                <TextInput 
                    style={styles.field}
                    keyboardType='default'
                    placeholder='password'
                    secureTextEntry={true}
                    onChangeText={text => this.setState({ password: text})}
                />
                <TouchableOpacity style={styles.button} onPress={()=>this.props.route.params.register(this.state.email, this.state.password, this.state.userName)}>
                    <Text style={styles.buttonText}>Registrarme</Text>
                </TouchableOpacity>   

                <Text> El error es: {this.props.errores} </Text>
                 <TouchableOpacity onPress={ ()=>this.props.navigation.navigate('Login') }>
                        <Text>Ya tengo cuenta</Text>
                 </TouchableOpacity>
            
            </View>

        )
    }

}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        marginTop: 10
    },
    title:{
        marginBottom:20
    },
    field:{
        borderColor: '#dcdcdc',
        borderWidth: 1,
        borderRadius: 2,
        padding:3,
        marginBottom:8
    },
    button: {
        borderRadius: 2,
        padding:3,
        backgroundColor: 'green',
    },
    buttonText:{
        color: '#fff'
    }
})

export default Register;