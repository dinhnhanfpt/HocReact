import React, { Component } from 'react'
import { Dimensions, Text, View, StyleSheet, Button, TextInput, TouchableHighlight } from 'react-native'
import Modal from 'react-native-modalbox'
var screen = Dimensions.get('window');
export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            name: '',
            description: ''
        }
    
    }
    render() {
        return (
            <Modal
                ref='myaddModal'
                style={{
                    width: screen.width - screen.width / 4,
                    height: 250,
                    borderRadius: 10
                }}
                position='center'
                backdrop={true}
                backdropPressToClose={false}
                swipeToClose={false}>
                <View style={mystyle.header}>
                    <Text>This is popup</Text>
                </View>
                <View style={{ height: 0.5, backgroundColor: 'gray' }}></View>
                <TextInput style={mystyle.myTextInput} placeholder={'pls enter name'} onChangeText={(text) => { this.setState(() => { this.state.name = text }) }}></TextInput>
                <TextInput style={mystyle.myTextInput} placeholder={'pls enter description'} onChangeText={(text) => { this.setState(() => this.state.description = text) }}></TextInput>
                <TouchableHighlight style={mystyle.myButton} underlayColor='#FF6600'
                    onPress={
                        () => {
                            if (!this.state.name || !this.state.description) {
                                alert("name or description is emtry");
                            }
                            else {
                                const ItemModel = {
                                    key: this.props.leng,
                                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUxwwPZTosUnnc1JMfWvkMgwZ3o7a-jSCCJNyqXYT7fvX8yTsY",
                                    name: this.state.name,
                                    description: this.state.description
                                }

                                this.props.addmodel(ItemModel);
                                this.refs.myaddModal.close();
                            }
                        }}>
                    <Text style={mystyle.whiteText}>Save</Text>
                </TouchableHighlight>
            </Modal>

        );
    }
    showPopUp = () => {
        this.refs.myaddModal.open();
    }
}
const mystyle = StyleSheet.create({
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