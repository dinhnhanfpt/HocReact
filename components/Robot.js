import React, { Component } from 'react'
import { Image } from 'react-native'

export default class Robot extends Component{
    render(){
        return(
            <Image source ={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/200px-HONDA_ASIMO.jpg"}} 
                   style = {{width: 200, height: 200}} ></Image>
        );
    }
}