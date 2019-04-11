import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
export default class myStylesheet extends Component {
    render() {
        return (
            <View style={mystyle.container}>
                <Text style={mystyle.header}>Title of StyleSheet</Text>
                <Text style={mystyle.body}>this is body </Text>
                <Text style={mystyle.footer}>this is footer </Text>

            </View>
        );
    }

}
const mystyle = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        padding: 5
    },
    header: {
        alignContent: 'center',
        backgroundColor: '#ff0000',
        color: '#ffffff',
    
    }
    ,
    body: {
        height: 200,
        backgroundColor: '#cc00cc'
    },
    footer:{
        height:50,
        backgroundColor:'#333333',
        color:'#ffffff'
    }
});