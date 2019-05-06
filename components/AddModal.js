import React, { Component } from 'react'
import { Dimensions, Text,View, StyleSheet} from 'react-native'
import Modal from 'react-native-modalbox'
var screen = Dimensions.get('window');
export default class AddModal extends Component {
    render() {
        return (
            <Modal
                ref='myaddModal'
                style={{
                    width: screen.width - screen.width/4,
                    alignContent: 'center',
                    height: 200,
                    borderRadius:10
                }}
                position='center'>
                <View style={mystyle.header}>
                    <Text>This is popup</Text>    
            </View>
            <View style={{height:0.5, backgroundColor:'gray'}}></View>
            </Modal>

        );
    }
    
    showPopUp=()=>{
        // alert('aa');
        this.refs.myaddModal.open();
    }
}
var mystyle = StyleSheet.create({
    header:{
        height: 40, alignItems:'center', flexDirection:'column', justifyContent:'center', padding:5
        }
    }
);