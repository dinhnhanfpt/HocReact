import React, { Component } from 'react'
import { View, Dimensions, StyleSheet, Text, TextInput, TouchableHighlight } from 'react-native'
import Modal from 'react-native-modalbox'
export default class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                name: '',
                description: ''
            }
        }
    }
    render() {
        return (
            <Modal style={myStyle.myModal}
                ref='myEditModal'
                backdropPressToClose={false}
                backdrop={true}
                swipeToClose={false}
                position='center'>
                <View style={myStyle.header}>
                    <Text>This is popup</Text>
                </View>
                <View style={{ height: 0.5, backgroundColor: 'gray' }}></View>
                <TextInput style={myStyle.myTextInput} placeholder={'pls enter name'} onChangeText={(text) => { this.setState({ item: {...this.state.item, name: text } }) }}>{this.state.item.name}</TextInput>
                <TextInput style={myStyle.myTextInput} placeholder={'pls enter description'} onChangeText={(text) => { this.setState({ item: { ...this.state.item, description: text } }) }}>{this.state.item.description}</TextInput>
                <TouchableHighlight style={myStyle.myButton} underlayColor='#FF6600' onPress={this.myupdateItem}>

                    <Text style={myStyle.whiteText}>Save</Text>
                </TouchableHighlight>
            </Modal>
        );
    }
    show = (Item) => {

        this.setState({
            item: Item
        });
        this.refs.myEditModal.open();
    }
    myupdateItem = () => {
        this.refs.myEditModal.close();
        this.props.update(this.state.item);
    }
}
var widthOfScreen = Dimensions.get('window').width;
const myStyle = StyleSheet.create({
    myModal: {
        width: widthOfScreen - widthOfScreen / 4, height: 200, borderRadius: 10
    },
    header: {
        height: 40, alignItems: 'center', flexDirection: 'column', justifyContent: 'center', padding: 5
    },
    myTextInput: {
        marginRight: 20, marginLeft: 20, borderBottomWidth: 1, borderBottomColor: 'gray', padding: 0, marginTop: 10
    },
    myButton: {
        marginRight: 40, marginLeft: 40, padding: 10, borderRadius: 10,
        backgroundColor: 'red', alignItems: 'center', marginTop: 40
    },
    whiteText: {
        color: 'white'
    }
}
);