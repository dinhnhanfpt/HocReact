import React, { Component } from 'react'
import { ScrollView, ViewPagerAndroid, Image, Text, View, TextInput, Dimensions } from 'react-native'
export default class MyViewPager extends Component {
    render() {
        let widthofScreen = Dimensions.get('window').width;
        return (
            <ViewPagerAndroid
                style={{ flex: 1 }}
                initialPage={0}
                onPageSelected={(event) => {
                    let pageNumber = event.nativeEvent.position;
                    alert(pageNumber);
                }}>
                <View style={{ flex: 1, backgroundColor: 'skyblue', width: widthofScreen }}>
                </View>
                <View style={{ flex: 1, backgroundColor: 'yellow', width: widthofScreen}}>
                </View>
            </ViewPagerAndroid>
        );
    }
}