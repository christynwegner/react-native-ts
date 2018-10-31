import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';

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
    },
    navigationHeader: {
        backgroundColor: '#cc2222'
    },
    navigationHeaderTitle: {
        color: 'white'
    }
});

class Home extends React.Component {
    public render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Text style={{ justifyContent: 'center' }}>Home Screen</Text>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Login"
                            onPress={() =>  navigate('Login')} />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Register"
                            onPress={() =>  navigate('Register')} />
                    </View>
                </View>
            </View>
        );
    }

    static navigationOptions = {
        title: 'Home'
    }
}

export default Home;
