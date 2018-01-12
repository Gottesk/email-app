import React, { Component } from 'react';
import {
  Text,
  Button,
  StyleSheet,
  View
} from 'react-native';


export default class FeedItemFull extends React.Component {
    render() {
      const item = this.props.item;
      return (
        <View style={styles.item}>
          <Text style={styles.sender}>{item.sender}</Text>
          <Text>{item.title}</Text>
          <Text>{item.text}</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    sender: {
        fontSize: 20,
        marginBottom: 20
    },
    item: {
      margin: 10,
    },
  });