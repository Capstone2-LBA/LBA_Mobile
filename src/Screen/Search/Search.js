import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Search extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }} >
                <TouchableOpacity
                    onPress={()=>{this.props.navigation.navigate("LocationDetail")}}
                >
                    <Text>Search.js </Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}