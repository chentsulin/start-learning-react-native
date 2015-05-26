/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} = React;

class RN06ButtonTouchableHighlight extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  _handlePressButton() {
    this.setState({ count: ++this.state.count });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to <Text style={styles.rn06}>RN-06 TouchableHighlight</Text>!
        </Text>
        <Text>
          {'Touch ' + this.state.count + ' Times'}
        </Text>
        <TouchableHighlight onPress={this._handlePressButton.bind(this)}>
          <Text>Touch Me!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

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
  rn06: {
    color: 'red'
  }
});

AppRegistry.registerComponent('RN06ButtonTouchableHighlight', () => RN06ButtonTouchableHighlight);
