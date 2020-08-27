import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Signup from './Signup';
import Login from './Login';
import ItemList from './ItemList';
import Welcome from './Welcome'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ title: '' },
          { headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ title: 'Signup' }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name="ItemList"
        component={ItemList}
        options={
          { title: 'ItemList' },
          { headerShown: false  }
        }
      />

    </Stack.Navigator>
  );
}

export default function App() {
  return (

    <NavigationContainer>
      <MyStack />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F1FAEE',
    justifyContent: 'flex-start',
    paddingTop: 24
  },
  sugnup: {
    flex: 4,
    paddingTop: 24
  }

});
