import React, { Component } from 'react';
import { Text, View } from 'react-native';
export default class BlinText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: 10,
            length: 2
        };
        //const time = 1000 //milisecond
        //setInterval(taskTodo, time);

    }

    render() {
        let textDisplay = '';

        if (this.state.showText > 0) {
            textDisplay = this.props.inputText + this.state.length;
        }

        return (
            <View>
                <Text>{textDisplay}</Text>
                <Text onPress={() => { this.hide() }}>Button</Text>
            </View>
        );
    }

    hide() {
        this.setState({
            showText: this.state.showText * (-1),
            length:this.state.length * 10
        });
    }
}