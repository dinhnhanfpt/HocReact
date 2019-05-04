import React, { Component } from 'react'
import  {View,Text} from 'react-native'
export default class FlatListItem extends Component{
    render(){
        return(
            <View style={{backgroundColor:'gray', marginTop:5}}>
                <Text style={{color:'blue'}}>aaa</Text>
                <Text style={{color:'blue'}}>bbbb</Text>
            </View>
        );
    }
}