import React, {Component} from 'react';
import {Text, StyleSheet, Button, View, Dimensions } from 'react-native';
import TopNav from '../components/TopNav';
import Camera from 'react-native-camera';

export default class Home extends Component{
    constructor(){
        super();
    }

    static navigationOptions = ({ navigation }) => {
              navigation.title='Home';
              return {
                header: <TopNav navigation={navigation} />,
              };
            };
            takePicture() {
              this.camera
                .capture()
                .then((data) => console.log(data))
                .catch(err => console.error(err));
            }
    render(){
        return(
            <View style= {styles.container}>
            {/* <Text style= {styles.welcome}>Welcome to Home Page</Text>
            <Button title="Go to Products"
            onPress={() => this.props.navigation.navigate('Products')}></Button> */}
                <Camera
                  ref={cam => {this.camera = cam}}
                  style={styles.preview}
                  aspect={Camera.constants.Aspect.fill}
                >
                  <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
                    [CAPTURE]
                  </Text>
                </Camera>
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
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      color: '#000',
      padding: 10,
      margin: 40  
    }

  });