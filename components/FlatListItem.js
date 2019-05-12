import React, { Component } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import Swipeout from 'react-native-swipeout';
import EditModal from './EditModal';
export default class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        }
    }
    render() {
        const mSwipeout = {
            autoClose: true,
            onOpen: (selectId, rowId, direction) => {
                this.setState({
                    id: this.props.item.key
                }
                )

            },
            onClose: () => {

            },
            right: [
                {
                    onPress: () => {
                        Alert.alert(
                            'Alert',
                            'do you want to delete ' + this.props.index + '?',
                            [
                                { text: 'No', onPress: () => { }, type: 'cancel' },
                                {
                                    text: 'YES', onPress: () => {
                                        this.deleteItem(this.props.index);
                                    },
                                }
                            ]

                        )


                    },
                    text: 'Delete', type: 'delete'
                },
                {
                    onPress: () => {
                      this.props.listenerEdit();
                    },
                    text:"Edit", type:'primary'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        }
        return (
            <Swipeout {...mSwipeout}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-around', backgroundColor: 'white' }}>
                    <View style={{ backgroundColor: 'gray', height: 0.5 }}></View>
                    <View style={{ flexDirection: 'row', padding: 5 }}>
                        <Image
                            source={{ uri: this.props.item.imageUrl }}
                            style={{ width: 40, height: 40, margin: 5 }}
                        />

                        <View style={{ flexDirection: 'column', margin: 5 }}>
                            <Text>{this.props.item.name}</Text>
                            <Text>{this.props.item.description}</Text>
                        </View>
                    </View>
                </View>
            </Swipeout>
        );
    }
    deleteItem(index) {
        this.props.listener(index);
    }

}