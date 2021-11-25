import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { createStackNavigator, createAppContainer } from "react-navigation";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen'; 


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({

  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  Login: {
    screen: LoginScreen,
  }
},{
        initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});