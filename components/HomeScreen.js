import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class HomeScreen extends Component {
  render() {
    const Home = "Welcome!";
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <View style={{ justifyContent: 'center', }}>
        <Text>{Home}</Text>
        </View>
        <View style={styles.Homebtn}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
        <Text>LOGIN</Text>
        </TouchableOpacity>
</View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Homebtn : {
  width: "40%",
  borderRadius: 10,
  height: 50,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 40,
  backgroundColor: "#FF1493",
  
}
});