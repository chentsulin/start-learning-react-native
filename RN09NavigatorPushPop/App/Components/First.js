'use strict';

var React = require('react-native');
var Second = require('./Second');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var First = React.createClass({

  _handlePress: function() {
    var nextRoute = {
      title: 'RN09 Second Page',
      component: Second,
      passProps: { text: 'RN09 Second Page' }
    }
    this.props.navigator.push(nextRoute);
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to <Text style={styles.rn09}>{this.props.text}</Text>!
        </Text>
        <TouchableHighlight
          onPress={this._handlePress}
          underlayColor="blue"
        >
          <Text>To Second Page</Text>
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
  rn09: {
    color: 'red'
  }
});


module.exports = First;
