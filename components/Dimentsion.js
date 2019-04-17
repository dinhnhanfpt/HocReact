import React, {Component} from 'react'
import {View,Text} from 'react-native'
export default class Dimentsion extends Component {
    render(){
        return(
               <View style = {{ flexDirection:'column',
                                 margin:20,
                                 flex:1,
                                 backgroundColor:'grey',
                                 justifyContent:'space-around'}}>
                     <Text style={{width:40, height:40, backgroundColor:'blue'}}></Text>
                     <Text style={{width:40, height:40, backgroundColor:'yellow'}}></Text>
                     <Text style={{width:40, height:40, backgroundColor:'red'}}></Text>
                     <Text style={{width:40, height:40, backgroundColor:'green'}}></Text>

               </View> 
        );
    }
}