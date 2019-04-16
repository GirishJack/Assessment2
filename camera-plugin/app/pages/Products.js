import React, {Component} from 'react';
import {Text, StyleSheet, View, Button } from 'react-native';
import TopNav from '../components/TopNav';
import {Card, Icon} from 'react-native-elements';

export default class Products extends Component{
    constructor(){
        super();
    }
    static navigationOptions = ({ navigation }) => {
      navigation.title='Products';
      return {
        header: <TopNav navigation={navigation} />,
      };
    };
    render(){
        return(
            <View>
            {/* <Text style={styles.welcome}>This is Products</Text>
            <Button title="Go to Cart Page"
            onPress={() => this.props.navigation.navigate('Cart')}></Button> */}
            <Card
              title='HELLO WORLD'
              image={require('../images/pic2.jpg')}>
              <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
              </Text>
              <Button
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' />
            </Card>
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