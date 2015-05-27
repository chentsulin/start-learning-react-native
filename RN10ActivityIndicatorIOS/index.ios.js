/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var TimerMixin = require('react-timer-mixin')
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicatorIOS
} = React;

var RN10ActivityIndicatorIOS = React.createClass({

  mixins: [ TimerMixin ],

  getInitialState: function() {
    return {
      loading: false
    };
  },

  componentDidMount: function() {
    this.setState({ loading: true });
    this.setTimeout(
      () => {
        this.setState({ loading: false });
      },
      5000
    );
  },

  render: function() {
    return (
      <ActivityIndicatorIOS
        animating={this.state.loading}
        style={[ styles.centering, { height: 600 } ]}
        size="large"
      />
    );
  }
});

var styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

AppRegistry.registerComponent('RN10ActivityIndicatorIOS', () => RN10ActivityIndicatorIOS);
