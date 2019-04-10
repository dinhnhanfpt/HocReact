import React, { Component } from 'react';
import { Text, View } from 'react-native';
import BlinText from './BlinText';

export default class MultipleGreeting extends Component{
    render()
    {
        return(
            <View style={{alignItems: 'center',flex:1}}>
                <Greeting name="Le Dinh Nhan" />
                <Greeting name="Tran Nhan Ton" />
                <BlinText inputText="TVO"/>
            </View>
        );
    }
}
class Greeting extends Component{
    render(){
        let message = `Hello ${this.props.name}. How are you`
        return(
            <Text>{message}</Text>
        );
    }
}
