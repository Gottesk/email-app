import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  TouchableHighlight,
  StyleSheet,
  Image
} from 'react-native';

export default class FeedItem extends React.Component {
    render() {
      const navigate = this.props.navigate;
      const item = this.props.item;
      let pic = {
        uri: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_80%2Cw_300/MTE5NDg0MDU0NTIzODQwMDE1/steven-jobs-9354805-2-402.jpg'
      };
      return (
        <TouchableHighlight onPress={() =>
            navigate('FeedItem', { item: item })
        }>
            <View style={styles.item}>
                <Image
                    style={styles.image}
                    source={pic}
                />
                <View style={styles.content}>
                    <Text style={styles.sender}>{item.sender}</Text>
                    <Text>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            </View>
        </TouchableHighlight>
        
      );
    }
  }

  const styles = StyleSheet.create({
    
    item: {
      flex: 1, 
      flexDirection: 'row',
      margin: 10,
    },
    content: {
        flexDirection: 'column',
        marginLeft: 20
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    sender: {
        fontSize: 20,
    },
    text: {
        fontSize: 16
    }
  });