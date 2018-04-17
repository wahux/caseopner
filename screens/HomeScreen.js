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
  navigationOptions,
} from 'react-native';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _goToOpen = () => {
    Alert.alert('Kommer snart')
    navigate('openScreen', {name: 'open'})    
  }

  _goToInventory = () => {
    Alert.alert('Kommer snart')
  }

  _goToSettings = () => {
    Alert.alert('Kommer snart')
  }
 
  _goToCredit = () => {
    Alert.alert("Credits:")
    Alert.alert("Magnus Ley: Programmør og Ideer")
    Alert.alert("Marcus Berry: Designer og Ideer")
    
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
          <Button onPress={this._goToCredit}  title="credit"/>
        </View>     
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  contentContainer: {
    paddingTop: 150,
    width: 200,
  },

  text: {
    fontSize: 20,
    textAlign: 'center'
  }
});
