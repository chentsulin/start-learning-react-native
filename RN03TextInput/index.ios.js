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
  TextInput,
  View,
} = React;

var RN03TextInput = React.createClass({

  getInitialState: function() {
    return {
      input: 'default ...'
    }
  },

  _handleTextChange: function(text) {
    this.setState({ input: text });
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to <Text style={styles.rn03}>RN03 - TextInput</Text>!
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={this._handleTextChange}
        />
        <Text>{'user input: ' + this.state.input}</Text>
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
  rn03: {
    color: 'red'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});

AppRegistry.registerComponent('RN03TextInput', () => RN03TextInput);
