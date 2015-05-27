/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var _ = require('lodash');
var {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
} = React;

var RN12ScrollView = React.createClass({
  render: function() {
    return (
      <ScrollView
        onScroll={() => { console.log('onScroll!'); }}
        style={styles.scrollView}
      >
        <Text style={styles.welcome}>
          Welcome to <Text style={styles.rn12}>RN-12 ScrollView</Text>!
        </Text>
        {_.range(100).map((num) => <Text style={styles.instructions}> {num} </Text>)}
      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#6A85B1',
    height: 600,
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
  rn12: {
    color: 'red'
  }
});

AppRegistry.registerComponent('RN12ScrollView', () => RN12ScrollView);
