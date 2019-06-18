import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { ImageBackground } from 'react-native'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (<ImageBackground source={require('../assets/images/nba.jpg')} style={{ width: '100%', height: '100%' }}>
    </ImageBackground>);
  }
}
