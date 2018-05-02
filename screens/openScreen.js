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

export default class OpenScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Open Screen',
  };

  _goBack = () => {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>
        hej med dig 
      </Text> 
      <Button onPress={this._goBack} title="Go back"/>
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
