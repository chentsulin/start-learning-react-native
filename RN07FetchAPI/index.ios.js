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
} = React;

class RN07FetchAPI extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentWillMount() {
    fetch('https://api.github.com/repos/facebook/react-native')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({ data: responseJson })
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  render() {
    var data = this.state.data;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to <Text style={styles.rn07}>RN-07 Fetch API</Text>!
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
          {'Fork: ' + data.forks}
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
  rn07: {
    color: 'red'
  }
});

AppRegistry.registerComponent('RN07FetchAPI', () => RN07FetchAPI);
