import React, {Component} from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
export default class TopNavCart extends Component{
    render(){
        return(
            <View>
                 <Icon
            raised
            name='shopping-bag'
            type='font-awesome'
            color='#f50'
            onPress={()=>console.log('Hello')}
            />
            </View>
        )
    }
}