/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { Provider } from 'react-redux';
import store from './app/store';
import AppNavigator from './app';

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;

