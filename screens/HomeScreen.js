import React, { Component } from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _goToOpen = () => {
    this.props.navigation.navigate('Open')
  }

  _goToInventory = () => {
    this.props.navigation.navigate('Inventory')
  }

  _goToSettings = () => {
    this.props.navigation.navigate('Settings')
  }
 
  _goToCredit = () => {
    this.props.navigation.navigate('Credit')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>Case Opener</Text>
          <Button 
            onPress={this._goToOpen} 
            title="open"/>
          <Button onPress={this._goToInventory} title="inventory "/>
          <Button onPress={this._goToSettings} title="Settings"/>
          <Button onPress={this._goToCredit}  title="Credits"/>
        </View>     
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003cb3',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  contentContainer: {
    paddingTop: 150,
    width: 200,
  },

  text: {
    fontSize: 50,
    textAlign: 'center',
    color: 'orange',   
  }
});
