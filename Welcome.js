import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Welcome({navigation}) {

    return (

        <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome to the productivy kingdom!
                    </Text>
            <Text
                style={styles.link}
                onPress={() => navigation.navigate('Signup')}>
                Do you need to signup
                </Text>
            <Text>or</Text>
            <Text
                style={styles.link}
                onPress={() => navigation.navigate('Login')}>
                login?
                </Text>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1FAEE',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        color: '#1D3557',
        fontSize: 25,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        textAlign: 'center',
        marginBottom: 50
    },
    link:{
        color: '#457B9D',
        fontSize: 18
    }

})

export default Welcome;