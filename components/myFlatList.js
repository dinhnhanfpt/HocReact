import React, { Component } from 'react'
import { FlatList, View, TouchableHighlight, Image } from 'react-native'
import ListData from '../data/ListData';
import FlatListItem from '../components/FlatListItem';
import AddModal from './AddModal'
import EditModal from './EditModal'
export default class myFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteItem: null,
            currentLeng:0,
            item:null
        }
        this.state.currentLeng = ListData.length;
        this.addItem = this.addItem.bind(this);
        this.showEdit = this.showEdit.bind(this);
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
                        return (
                        <FlatListItem item={item} index={index} listener={this.getIndex} listenerEdit={this.showEdit}></FlatListItem>
                        
                        )
                    }
                    }>
                </FlatList>
                <AddModal
                    ref={'addModal'} parentFlatlist={this} leng={ListData.length+1} addmodel={this.listenerItem}></AddModal>
                <EditModal ref={'editmodal'} parentFlatlist={this} update={this.updateItem}></EditModal>
            </View>
        );
    }
    getIndex = (index) => {
        ListData.splice(index, 1);
        this.setState((priviousState) => {
            return { deleteItem: index };
        });
    }
    listenerItem=(item)=>{
        ListData.push(item);
        this.setState((priviousState)=>{
            return{
                currentLeng:item.key}
            });
    }
    addItem(){
        // alert('aa');
       this.refs.addModal.showPopUp();
    }
    showEdit(editItem){
        this.refs.editmodal.show(editItem);
    }
    updateItem=(updateItem)=>{
        // alert(updateItem.key);
        var foundkey = ListData.findIndex(mItem =>mItem.key == updateItem.key);
        ListData[foundkey].name= updateItem.name;
        ListData[foundkey].description= updateItem.description;
        alert(updateItem.description);
        this.setState({
            item:updateItem
        });
        // var mItem = ListData[updateItem]
        // alert (mItem.name);

        
        // this.setState({deleteItem : item});

    }
}