import React, {Component} from 'react'
import {View, Dimensions, StyleSheet} from 'react-native'
import Modal from 'react-native-modalbox'
export default class EditModal extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Modal style={myStyle.myModal}
                ref='myEditModal'
                backdropPressToClose={false}
                backdrop={true}
                swipeToClose={false}
                position='center'

            ></Modal>
        );
    }
    showEdit=()=>{
        this.refs.myEditModal.open();
    }
}
var widthOfScreen = Dimensions.get('window').width;
var myStyle = StyleSheet.create({
        myModal:{
            width: widthOfScreen-widthOfScreen/4, height:200, borderRadius:10
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