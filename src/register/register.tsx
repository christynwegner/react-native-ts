import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default class Register extends React.Component {
    render() {
        return (
            <View>
                <Text>Email:</Text>
                <TextInput />
                <Text>Username:</Text>
                <TextInput />
                <Text>Password:</Text>
                <TextInput />
                <Button title="Register" onPress={() => this.props.navigation.navigate('Home')} />
                <Button title="Login" onPress={() => this.props.navigation.navigate('Login')} />
            </View>
        );
    }
};
