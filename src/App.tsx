import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as API from 'opp-api-lib-js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up ./src/App.tsx to start working on your app!</Text>
        <Text>This is another text node, yay!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
