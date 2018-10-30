import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default class Login extends React.Component {
    render() {
        const username = this.props.navigation.getParam('username', '');
        const password = this.props.navigation.getParam('password', '');

        return (
            <View>
                <Text>Username:</Text>
                <TextInput defaultValue={username} />
                <Text>Password:</Text>
                <TextInput defaultValue={password} />
                <Button title="Login" onPress={() => this.props.navigation.navigate('Home')} />
                <Button title="Register" onPress={() => this.props.navigation.navigate('Register')} />
            </View>
        );
    }
};
