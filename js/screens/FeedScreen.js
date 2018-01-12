import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Alert,
  FlatList,
  Icon,
  View
} from 'react-native';
import FeedItem from '../components/FeedItem';
import AddButton from '../components/AddButton';

export default class FeedScreen extends React.Component {
  static navigationOptions = {
    title: 'Email feed',
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          title="Go to profile screen"
          onPress={() =>
            navigate('Profile', { name: 'Jane' })
          }
        />
        <FlatList
          data={
            [
              {
                key: 1,
                sender: 'Mark Cohan',
                title: 'Hi, bro!',
                text: 'How are you? Can you...'
              }, 
              {
                key: 2,
                sender: 'Maria Dehays',
                title: 'Weekly digest',
                text: 'Some news from...'
              }
            ]
          }
          renderItem={({item}) => 
            <FeedItem item={item} navigate={navigate}/>
          }
          
        />
        <AddButton navigate={navigate}/>
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
