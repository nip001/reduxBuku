import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/Store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Text> App </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
