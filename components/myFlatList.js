import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import ListData from '../data/ListData';
import FlatListItem from '../components/FlatListItem';
export default class myFlatList extends Component {
    constructor(props){
        super(props);
        this.state={
            deleteItem: null
        }
    }
    render() {
        return (
            <View style={{ justifyContent: 'center', flex: 1 }}>
                <FlatList
                    data={ListData}
                    extraData={this.state}
                    renderItem={({ item, index }) => {
                        return (<FlatListItem item={item} index={index} listener={this.getIndex}></FlatListItem>)
                    }
                    }>
                </FlatList>
            </View>
        );
    }
    getIndex=(index)=>{
       ListData.splice(index,1);
       this.setState((priviousState)=>{
            return{deleteItem : index};
       });
    }
}