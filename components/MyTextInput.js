import React, {Component} from 'react'
import {View, TextInput,Text} from 'react-native'
export default class MyTextInput extends Component{
    constructor(props){
        super(props);
        this.state={
            email : "",
            passoword:""
        };
    }
    render(){
        return(
            <View style={{ padding:10, flex:1 }}>
                <TextInput style={{height:40, borderColor:'gray', borderWidth:1, margin:10}}
                keyboardType='email-address'
                placeholder='please enter your email'
                onChangeText ={
                    (text)=>{
                        this.setState(
                            (priviousState)=>{
                                return{textchange : text};
                            }
                        );
                    }
                }
                />

                <Text>{this.state.textchange}</Text>

                <TextInput style={{height:40, borderColor:'gray', borderWidth:1, margin:10}}
                keyboardType='default'
                placeholder='please enter your passoword'
                secureTextEntry={true}
                onChangeText = {
                    (text)=>{
                        this.setState(
                            (priviousState)=>{
                                return{passoword:text}
                            }
                        );
                    }
                } />
                 <Text>{this.state.passoword}</Text>
            </View>
        );
    }
    
}