import React, { Component } from 'react';
import {
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';


export default class AddButton extends React.Component {
    render() {
      const navigate = this.props.navigate;
      console.log('11111', this.props.navigate);
      return (
        <View style={styles.container}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() =>
              navigate('NewMail', { navigate: navigate })
            }>
            <Text style={styles.icon}>+</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
      alignItems:'flex-end',
      justifyContent:'flex-end',
      flex: 1, 
      flexDirection: 'row',
      marginRight: 20,
      marginBottom: 20
  },
  button: {
      alignItems:'center',
      justifyContent:'center',
      width:60,
      height:60,
      backgroundColor:'steelblue',
      borderRadius:30
    },
  icon: {
      fontSize: 20,
      color: 'white'
  }
});