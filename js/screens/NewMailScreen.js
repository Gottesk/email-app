import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Alert,
  View
} from 'react-native';


export default class NewMailScreen extends React.Component {
  static navigationOptions = {
    title: 'Feed',
  };
  render() {
    const navigate = this.props.navigation;
    const item = this.props.navigation.state.params.item;
    
    return (
        <View>
          <Button
            title="Go to profile screen"
            onPress={() =>
              navigate('Profile', { name: 'Jane' })
            }
          />
        </View>
    );
  }
}