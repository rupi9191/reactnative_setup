import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './Screens/Home';

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
  },
  {},
);

export default createAppContainer(MainNavigator);
