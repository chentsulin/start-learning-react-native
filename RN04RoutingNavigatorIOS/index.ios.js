/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var MainApp = require('./App/Components/MainApp')
var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View,
} = React;

var RN04RoutingNavigatorIOS = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'RN04 NavigatorIOS',
          component: MainApp,
          passProps: { text: 'RN-04 Routing NavigatorIOS' }
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



AppRegistry.registerComponent('RN04RoutingNavigatorIOS', () => RN04RoutingNavigatorIOS);
