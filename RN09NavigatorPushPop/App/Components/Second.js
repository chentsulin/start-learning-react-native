'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var Second = React.createClass({

  _handlePress: function() {
    this.props.navigator.pop();
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
          <Text>Back to First Page</Text>
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


module.exports = Second;
