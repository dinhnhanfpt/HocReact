import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import ListData from '../data/ListData';
import FlatListItem from '../components/FlatListItem';
export default class myFlatList extends Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', flex: 1}}>
                <FlatList
                    data={ListData}
                    renderItem={({ item, index }) => {
                        console.log(JSON.stringify(ListData));
                        <FlatListItem item={item} index={index}></FlatListItem>
                    }}>
                </FlatList>
            </View>
        );
    }
}