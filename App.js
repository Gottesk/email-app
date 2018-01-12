/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

"use strict";

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  Alert,
  View
} from 'react-native';
import FeedScreen from './js/screens/FeedScreen';
import FeedItemScreen from './js/screens/FeedItemScreen';
import ProfileScreen from './js/screens/ProfileScreen';
import NewMailScreen from './js/screens/NewMailScreen';
import {
  StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
  Feed: { screen: FeedScreen },
  FeedItem: {screen: FeedItemScreen },
  Profile: { screen: ProfileScreen },
  NewMail: { screen: NewMailScreen },
});

module.exports = App;