import React, { Component } from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity
} from 'react-native';

export default class OpenScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Open Screen',
  };

  _goBack = () => {
    this.props.navigation.goBack()
  }

  _openCase = () => {
    this.props.navigation.navigate('Clutch')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageView}>
        <TouchableOpacity
          onPress={this._openCase}>
            <Image
              style={styles.image}
              source={require('../assets/images/c238.png')}
            />
        </TouchableOpacity>

        </View>
        <View style={styles.buttonView}>
          <Button onPress={this._goBack} title="Go back"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between'
  },

  contentContainer: {
    paddingTop: 150,
    width: 200,
  },

  text: {
    fontSize: 20,
    textAlign: 'center'
  },

  imageView: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  image: {
  },

  buttonView: {
    justifyContent: 'flex-end'
  }
});
