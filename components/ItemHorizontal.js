import React,{Component} from 'react'
import {View, Text, StyleSheet, Image,Dimensions} from 'react-native'
import myButton from './myButton';
export default class ItemHorizontal extends Component{
    render(){
        return(
                <View style={myStyle.view}>
                    <Text style={myStyle.header}>Tittle</Text>
                    <Image source={require('../image/iconadd.png')} style={myStyle.content}></Image>
                    <Text style={myStyle.header}>Bottom</Text>
                </View>
        );
    }
}
let widthofScreen = Dimensions.get('window').width;
const myStyle = StyleSheet.create({
    view:{
        backgroundColor:'gray',
        borderRadius:20,
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        opacity:0.5,
        borderColor:'white',
        borderWidth:1
    },
    header:{
        flex:1,
        color:'white',
        fontSize:30,
        textAlignVertical:'center',
        alignItems:'center',
        backgroundColor:'green'
    },
    content:{
        flex:2,
        width: widthofScreen,
        backgroundColor:'red'
    }
});