/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
} = React;

var RN02Image = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image style={styles.local} source={require('image!github')} />
        <Text style={styles.welcome}>
          Welcome to <Text style={styles.rn02}>RN02 - Image</Text>!
        </Text>
        <Image
          style={styles.network}
          source={{ uri: 'https://octodex.github.com/images/dojocat.jpg' }}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  rn02: {
    color: 'red'
  },
  local: {
    width: 120,
    height: 63
  },
  network: {
    width: 448,
    height: 448
  }
});

AppRegistry.registerComponent('RN02Image', () => RN02Image);
