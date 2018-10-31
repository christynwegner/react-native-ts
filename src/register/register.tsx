import React from 'react';
import {
    Button,
    Text,
    TextInput,
    View
} from 'react-native';

export default class Register extends React.Component {
    public render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Text>Email:</Text>
                <TextInput />
                <Text>Username:</Text>
                <TextInput />
                <Text>Password:</Text>
                <TextInput />
                <Button title="Register" onPress={() => navigate('Home')} />
                <Button title="Login" onPress={() => navigate('Login')} />
            </View>
        );
    }

    static navigationOptions = {
        title: 'Register'
    }
};
