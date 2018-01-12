import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Alert,
  View
} from 'react-native';


export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to email feed screen"
        onPress={() =>
          navigate('Feed', { name: 'Jane' })
        }
      />
    );
  }
}