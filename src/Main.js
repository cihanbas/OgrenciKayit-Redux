
import React, { Component } from 'react';
import {
  StyleSheet,  View
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

export default class Main extends Component {
  render() {
    return (
    <Provider store={createStore()}>

    </Provider>
    );
  }
}

const styles = StyleSheet.create({
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
});


