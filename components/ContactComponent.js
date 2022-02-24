import { ScrollView, Text, View } from 'react-native';
import React, { Component } from 'react';

export class Contact extends Component {
    static navigationOptions = {
        title: 'Contact Us'
    };
    render() {
        return (
            <ScrollView>
                <Text>Hello Contact</Text>
            </ScrollView>
        );
    }
}

export default Contact;
