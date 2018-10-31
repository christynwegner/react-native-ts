import React from 'react';
import {
    Button,
    Text,
    TextInput,
    View
} from 'react-native';

export default class Login extends React.Component {
    public render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Text>Username:</Text>
                <TextInput />
                <Text>Password:</Text>
                <TextInput />
                <Button title="Login" onPress={() => navigate('Home')} />
                <Button title="Register" onPress={() => navigate('Register')} />
            </View>
        );
    }

    static navigationOptions = {
        title: 'Login'
    }
};
