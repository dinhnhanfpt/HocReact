import React, { Component } from 'react'
import { AppRegistry, ScrollView, Image, Text, View, TextInput, Dimensions } from 'react-native'
export default class VerticalScrollView extends Component {
    render() {
        let widthofScreen = Dimensions.get('window').width;
        return (
            <ScrollView keyboardDismissMode='on-drag'>
                <Image
                    source={require('../image/ios.jpg')}
                    style={{ width: widthofScreen, height: widthofScreen * 450 / 800 }}>
                </Image>
                <Text style={{ backgroundColor: 'gray', padding: 10, color: 'white', textAlign: 'center' }}>This is title</Text>
                <TextInput style={{ borderColor: 'gray', borderWidth: 1, padding: 8, margin: 10 }}
                    placeholder='enter text'></TextInput>
                <Text style={{ backgroundColor: 'skyblue', padding: 10, color: 'white', textAlign: 'center' }}>This is Content</Text>
                <Image
                    source={require('../image/ios.jpg')}
                    style={{ width: widthofScreen, height: widthofScreen * 450 / 800 }}>
                </Image>
                <Image
                    source={require('../image/ios.jpg')}
                    style={{ width: widthofScreen, height: widthofScreen * 450 / 800 }}>
                </Image>
                <Image
                    source={require('../image/ios.jpg')}
                    style={{ width: widthofScreen, height: widthofScreen * 450 / 800 }}>
                </Image>
                <Image
                    source={require('../image/ios.jpg')}
                    style={{ width: widthofScreen, height: widthofScreen * 450 / 800 }}>
                </Image>
            </ScrollView>
        );
    }
}