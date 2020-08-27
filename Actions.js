import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

const addIcon = <Icon name='plus' size={30} color="#F1FAEE" />;
const doneIcon = <Icon name='check' size={30} color="#F1FAEE" />;
const deleteIcon = <Icon name='delete' size={30} color="#F1FAEE" />;
const editIcon = <Icon name='edit' size={30} color="#F1FAEE" />;

export default class Actions extends Component {



    render() {
        return (
            <View style={styler.header}>
                <Text style={styler.text}>My 2Do List </Text>
                <View style={styler.iconsContainer}>
                    <Icon style={styler.icon} name='arrowleft' size={30} color="#F1FAEE" />
                    <Icon style={styler.icon} name='delete' size={30} color="#F1FAEE" />
                    <Icon style={styler.icon} name='check' size={30} color="#F1FAEE" />
                    <Icon style={styler.icon} name='edit' size={30} color="#F1FAEE" />
                    <Icon style={styler.icon} name='plus' size={30} color="#F1FAEE" />
                </View>
            </View>
        );
    }
}

const styler = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: '#457B9D',
        height: 60,

    },
    text: {
        flex: 2,
        color: '#F1FAEE',
        paddingTop: 15,
        paddingLeft: 12,
        fontSize: 20
    },
    iconsContainer: {
        flexDirection: 'row',
        color: '#F1FAEE',
        paddingTop: 15,
        paddingRight: 5
    },
    icon: {
        marginHorizontal: 7,
        color: '#F1FAEE'
    }
}

);