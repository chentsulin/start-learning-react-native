/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var First = require('./App/Components/First');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View,
} = React;

var RN09NavigatorPushPop = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'RN09 First Page',
          component: First,
          passProps: { text: 'RN-09 First Page' }
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111'
  }
});

AppRegistry.registerComponent('RN09NavigatorPushPop', () => RN09NavigatorPushPop);
