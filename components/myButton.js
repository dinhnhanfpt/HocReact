import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from 'react-native-button';
export default class myButton extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Button
                    style={{ fontSize: 20, color: 'white', backgroundColor:'skyblue', padding:10, borderRadius:10 }}onPress={()=>{
                        alert('button is clicked');
                    }}>
                    Button
                </Button>

            </View>
        );
    }
}