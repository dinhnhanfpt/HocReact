import React, { Component } from 'react'
import { AppRegistry, ScrollView, Image, Text, View, TextInput, Dimensions } from 'react-native'
export default class HorizontalScollView extends Component {
    render() {
        let widthofScreen = Dimensions.get('window').width;
        let heightofScreen = Dimensions.get('window').height;
        return (
            <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
                <View style={{ flex: 1, backgroundColor: 'skyblue', width: widthofScreen, height: heightofScreen }}>
                </View>
                <View style={{ flex: 1, backgroundColor: 'yellow' , width: widthofScreen, height: heightofScreen }}>
                </View>
            </ScrollView>
        );
    }
}