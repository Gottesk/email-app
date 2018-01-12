import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Alert,
  View
} from 'react-native';
import FeedItemFull from '../components/FeedItemFull';


export default class FeedItemScreen extends React.Component {
  static navigationOptions = {
    title: 'Feed',
  };
  render() {
    const item = this.props.navigation.state.params.item;
    return (
      <FeedItemFull item={item}/>
    );
  }
}