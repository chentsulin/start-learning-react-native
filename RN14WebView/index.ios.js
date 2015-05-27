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
  WebView,
} = React;

var WEBVIEW_REF = 'webview';
var DEFAULT_URL = 'https://facebook.github.io/react-native';

var RN14WebView = React.createClass({
  render: function() {
    return (
      <WebView
        style={styles.webView}
        ref={WEBVIEW_REF}
        automaticallyAdjustContentInsets={false}
        url={DEFAULT_URL}
        javaScriptEnabledAndroid={true}
        startInLoadingState={true}
      />
    );
  }
});

var styles = StyleSheet.create({
  webView: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    height: 450,
  }
});

AppRegistry.registerComponent('RN14WebView', () => RN14WebView);
