import React, {Component} from 'react';
import {Text, StyleSheet, View, Button } from 'react-native';

export default class Invoice extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.welcome}>This is Invoice</Text>
            <Button title="Go to Home Page"
            onPress={() => this.props.navigation.navigate('Home')}></Button>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });