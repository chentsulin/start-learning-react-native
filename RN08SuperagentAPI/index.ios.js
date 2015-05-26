/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var request = require('superagent');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

class RN08SuperagentAPI extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentWillMount() {
    request
      .get('https://api.github.com/repos/facebook/react-native')
      .end((err, res) => {
        if (res.ok) {
          this.setState({ data: res.body })
        } else {
          console.warn(err);
        }
      })
  }

  render() {
    var data = this.state.data;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to <Text style={styles.rn08}>RN-08 Superagent API</Text>!
        </Text>
        <Text style={styles.instructions}>
          {data.full_name}
        </Text>
        <Text style={styles.instructions}>
          {data.description}
        </Text>
        <Text style={styles.instructions}>
          {'Star:' + data.stargazers_count}
        </Text>
        <Text style={styles.instructions}>
          {'Fork:' + data.forks}
        </Text>
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
  rn08: {
    color: 'red'
  }
});

AppRegistry.registerComponent('RN08SuperagentAPI', () => RN08SuperagentAPI);
