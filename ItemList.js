import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Actions from './Actions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from './firebase'

export default class ItemList extends Component {

    constructor(props) {
        super(props);
        const userEmail = firebase.auth().currentUser.email;
        this.firestoreRef = firebase.firestore().collection(userEmail);
        let allTasks = this.firestoreRef.get()
            .then(querySnapshot => {
                allTasks = querySnapshot.docs.map(doc => doc.data().name)
            })
        this.state = {
            selected: [],
            user: userEmail,
            addNew: false,
            tasks: this.getTasks()
        }
        console.log(this.state.tasks);
    }

    getTasks(){
        const tasksDocs = this.firestoreRef.get().then((querySnapshot)=>{
            var tempDoc = []
            querySnapshot.forEach((doc)=>{
                tempDoc.push(doc.data().name);
            })
            console.log(tempDoc);
            return tempDoc;
        }

        )
    }

    

    render() {
        //   const tasks = this.getAllTasks();

        if (this.state.addNew) {
            return (
                <>
                    <TouchableOpacity style={styles.container}>
                        <Actions />
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter new task"></TextInput>
                            <Button
                                style={styles.addButton}
                                title="ADD"
                                color='#1D3557'
                                onPress={() => { this.setState({ addNew: false }) }} />
                        </View>
                        {this.getAllTasks}
                    </TouchableOpacity>
                </>
            )

        }
        return (
            <>
                <TouchableOpacity style={styles.container}>
                    <Actions />
                    {this.getAllTasks}
                </TouchableOpacity>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingTop: 24
    },
    itemActive: {
        height: 30,
        fontSize: 22,
        paddingLeft: 20,
        marginTop: 10,
        borderBottomColor: '#A8DADC',
        borderBottomWidth: 0.3,
        color: '#1D3557'
    },
    itemDis: {
        height: 30,
        fontSize: 22,
        paddingLeft: 20,
        marginTop: 10,
        borderBottomColor: '#A8DADC',
        borderBottomWidth: 0.3,
        color: '#A8DADC'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        borderBottomColor: '#A8DADC',
        borderBottomWidth: 0.3,

    }
}

);