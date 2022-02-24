import { ScrollView, Text, View } from 'react-native';
import React, { Component } from 'react';

export class About extends Component {
    static navigationOptions = {
        title: 'About Us'
    };

    render() {
        return (
            <ScrollView>
                <Text>Hello About</Text>
            </ScrollView>
        );
    }
}

export default About;
