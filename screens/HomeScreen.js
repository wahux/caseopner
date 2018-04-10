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
  Alert
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _goToKnap1 = () => {
    Alert.alert('Knap 1')
  }

  _goToKnap2 = () => {
    Alert.alert('Knap 2')
  }

  _goToKnap3 = () => {
    Alert.alert('Knap 3')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>Case Opener</Text>
          <Button 
            onPress={this._goToKnap1} 
            title="Knap 1"/>
          <Button onPress={this._goToKnap2} title="Knap 2"/>
          <Button onPress={this._goToKnap3} title="Knap 3"/>
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
