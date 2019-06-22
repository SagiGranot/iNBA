import React from 'react';
import { Image, StyleSheet, ImageBackground, View, Text, Dimensions, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'TeamDetails'
  };
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      Width: null,
      Height: null
    }
  }
  componentWillMount() {
    const { width, height } = Dimensions.get("window");
    this.setState({
      Width: width,
      Height: height
    })

  }
  componentDidMount() {
    const teams = require('../teamLogos');

  }

  render() {
    const state = this.state;

    return (
      <ImageBackground source={require('../assets/images/nba.jpg')} style={{ width: '100%', height: '100%' }}>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  table: {
    width: Dimensions.get("window").width - 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 4,
    borderWidth: 0.5,
  }
});
