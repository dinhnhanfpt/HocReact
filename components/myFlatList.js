import React, { Component } from 'react'
import { FlatList, View, TouchableHighlight, Image } from 'react-native'
import ListData from '../data/ListData';
import FlatListItem from '../components/FlatListItem';
import AddModal from './AddModal'
export default class myFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteItem: null
        }
        this.addItem = this.addItem.bind(this);
    }
    render() {
        return (
            <View style={{ justifyContent: 'center', flex: 1 }}>
                <View style={{height:50, backgroundColor:'red', justifyContent:'flex-end', alignItems:'center', flexDirection:'row'}}>
                    <TouchableHighlight underlayColor='white' onPress={this.addItem}>
                        <Image source={require('../image/iconadd.png')} style={{height:30, width:30, margin:5}}></Image>
                    </TouchableHighlight>
                </View>
                <FlatList
                    data={ListData}
                    extraData={this.state}
                    renderItem={({ item, index }) => {
                        return (<FlatListItem item={item} index={index} listener={this.getIndex}></FlatListItem>)
                    }
                    }>
                </FlatList>
                <AddModal
                    ref={'addModal'} parentFlatlist={this}
                ></AddModal>
            </View>
        );
    }
    getIndex = (index) => {
        ListData.splice(index, 1);
        this.setState((priviousState) => {
            return { deleteItem: index };
        });
    }
    addItem(){
        // alert('aa');
       this.refs.addModal.showPopUp();
    }
}