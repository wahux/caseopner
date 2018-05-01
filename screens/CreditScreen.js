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

export default class CreditScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Credit',
  };

  _goBack = () => {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>
            Credit
          </Text>
        </View>
        <View style={styles.knapContainer}> 
          <Button  onPress={this._goBack} title="Go back"/>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  contentContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    textAlign: 'center'   
  },

  knapContainer: {
    flex: 3,
    justifyContent: 'flex-end'
  }

});
