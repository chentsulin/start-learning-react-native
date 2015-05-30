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
  View,
  TouchableHighlight,
  AlertIOS
} = React;

var RN16Alert = React.createClass({

  _handlePress: function() {
    AlertIOS.alert(
      'Foo Title',
      'My Alert Msg',
      [
        {text: 'Foo', onPress: () => console.log('Foo Pressed!')},
        {text: 'Bar', onPress: () => console.log('Bar Pressed!')},
      ]
    );
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TouchableHighlight style={styles.button} onPress={this._handlePress}>
          <Text style={styles.buttonText}>
          Alert
          </Text>
        </TouchableHighlight>
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
  button: {
    backgroundColor: 'blue'
  },
  buttonText: {
    margin: 10,
    color: 'white'
  }
});

AppRegistry.registerComponent('RN16Alert', () => RN16Alert);
