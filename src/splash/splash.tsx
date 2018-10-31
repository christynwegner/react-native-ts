import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';

const activityIndicatorSize = 'large';
const activityIndicatorColor = '#cc2222';
const styles = StyleSheet.create({
    headingText: {
        fontWeight: 'bold',
        color: '#cc2222',
        fontSize: 50,
        margin: 20,
        textAlign: 'center'
    },
    viewContainer: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default class SplashScreen extends React.Component {
    public componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Login');
        }, 3000);
    }
    public render() {
        return (
            <View style={styles.viewContainer}>
                <Text style={styles.headingText}>Sports App</Text>
                <ActivityIndicator
                    color={activityIndicatorColor}
                    size={activityIndicatorSize} />
            </View>
        );
    }
};
