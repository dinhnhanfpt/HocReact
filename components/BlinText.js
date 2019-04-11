import React, { Component } from 'react';
import { Text, View } from 'react-native';
class Blin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: true
        };
        var taskTodo = () => {
            this.setState(previousState => {
                return {
                    showText: !previousState.showText
                }
            });
        }
        const time = 1000 //milisecond
        setInterval(taskTodo, time);
    }

    render() {
        let textDisplay = this.state.showText? this.props.TextInput:'';
        let Name = this.state.showText? this.props.name:'';
        return (
            <Text>{textDisplay} {Name}</Text>
        );
    }
}
export default class BlinText extends Component {
    render() {
        return (
            <View>
                <Blin TextInput='TEST' name='Nhanld'></Blin>
            </View>
        );
    }
}