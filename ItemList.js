import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Actions from './Actions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from './firebase'

export default class ItemList extends Component {
     firestoreRef = firebase.firestore().collection('pk@k.co');
    constructor(props) {
        super(props);
        const userEmail = firebase.auth().currentUser.email;
        console.log(userEmail);
        
        this.state = {
            selected: [],
            user: userEmail,
            addNew: false,
            tasks: ['yo', 'yo1,', '1o2']
        }
        console.log(this.state.tasks);
    }

     componentDidMount(firestoreRef){
        this.doc().get().
        then((snapshot)=>{
            const tempTasks =[];
            snapshot.map((doc)=> tempTasks.push(doc.data().name))
            console.log(tempTasks)
            this.setState({tasks: tempTasks})
        }
        )
    }
    allTasks(){
      return  this.state.tasks.map((task)=>{
            return (
            <View style={styles.itemActive}><Text>{task}</Text></View>
            )
        })
    }

    render() {
       

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
                       
                    </TouchableOpacity>
                </>
            )

        }
        return (
            <>
                <TouchableOpacity style={styles.container}>
                    <Actions />
                    {this.allTasks()}
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