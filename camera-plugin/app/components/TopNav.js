import React, {Component} from 'react';
import {View} from 'react-native';
import {Icon, Header} from 'react-native-elements';
export default class TopNav extends Component{
    render(){
        return(
            <View>
              <Header
                leftComponent={{ icon: 'home', type:'font-awesome', color: '#fff' }}
                centerComponent={{ text: this.props.navigation.title, style: { color: '#fff' } }}
                rightComponent={{ icon: 'cart-plus', type:'font-awesome', color: '#fff' }}
                />
            </View>
        )
    }
}