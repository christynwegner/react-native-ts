import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    button: {
        flex: 1,
        margin: 30,
        height: 1
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

class Home extends React.Component {
    render() {
        return (
            <View>
                <Text style={{ justifyContent: 'center' }}>Home Screen</Text>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Login"
                            onPress={() =>  this.props.navigation.navigate(
                                'Login',
                                {
                                    username: 'happyfeet',
                                    password: 'insecure password'
                                })} />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Register"
                            onPress={() =>  this.props.navigation.navigate('Register')} />
                    </View>
                </View>
            </View>
        );
    }
}

export default Home;
