import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
  AsyncStorage,
  ImageBackground
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: 'rgba(251,186,87,0.5)',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    color: '#fff',
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  loginButton: {
    backgroundColor: 'rgba(251,186,87,1)'
  },
  loginText: {
    color: 'white'
  },
  imgBg: {
    width: '100%',
    height: '100%'
  }
})

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in'
  }
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  onClickListener = viewId => {
    Alert.alert('Alert', 'Button pressed ' + viewId)
  }
  handleSignInAsync = async () => {
    await AsyncStorage.setItem('userToken', this.state.email)
    this.props.navigation.navigate('App')
  }
  render() {
    return (
      <ImageBackground source={require('../assets/images/nba.jpg')} style={styles.imgBg}>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={email => this.setState({ email })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({ password })}
            />
          </View>

          <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={this.handleSignInAsync}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.buttonContainer}
            onPress={() => this.onClickListener('restore_password')}
          >
            <Text>Forgot your password?</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.buttonContainer}
            onPress={() => this.onClickListener('register')}
          >
            <Text>Register</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    )
  }
}
