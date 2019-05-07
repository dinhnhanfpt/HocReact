import React, { Component } from 'react'
import { Dimensions, Text, View, StyleSheet, Button, TextInput, TouchableHighlight } from 'react-native'
import Modal from 'react-native-modalbox'
var screen = Dimensions.get('window');
export default class AddModal extends Component {
    constructor(props){
        super(props);
        this.state={
            visible:false
        }
    }
    render() {
        return (
            <Modal
                ref='myaddModal'
                style={{
                    width: screen.width - screen.width / 4,
                    height: 200,
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
                <TextInput style={mystyle.myTextInput} placeholder={'pls enter your name'}></TextInput>
                <TouchableHighlight style={mystyle.myButton} underlayColor='#FF6600' 
                onPress={
                    ()=>{this.refs.myaddModal.close()}}>
                    <Text style={mystyle.whiteText}>aaa</Text>
                </TouchableHighlight>
            </Modal>

        );
    }

    showPopUp = () => {
        // alert('aa');
        this.refs.myaddModal.open();
    }
}
var mystyle = StyleSheet.create({
    header: {
        height: 40, alignItems: 'center', flexDirection: 'column', justifyContent: 'center', padding: 5
    },
    myTextInput: {
        marginRight: 20, marginLeft: 20, borderBottomWidth: 1, borderBottomColor: 'gray', padding: 0, marginTop: 10
    },
    myButton: {
        marginRight: 40, marginLeft: 40, padding: 10, borderRadius:10,
        backgroundColor:'red', alignItems:'center', marginTop:60
    },
    whiteText:{
        color:'white'
    }
    

}
);