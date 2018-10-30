import React from 'react';
import { View } from 'react-native';
import RootStackNavigator from './navigation/navigation';

export default class App extends React.Component {
    render() {
        return (
            <RootStackNavigator />
        );
    }
};
