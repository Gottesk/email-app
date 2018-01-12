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
    const { navigate } = this.props.navigation;
    return (
        <View>
          <Text>Here is the new email screen</Text>
          <Button
            title="Send it!"
            onPress={() =>
              navigate('Feed', { name: 'Jane' })
            }
          />
        </View>
    );
  }
}