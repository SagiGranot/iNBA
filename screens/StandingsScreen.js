import React from 'react'
import { ImageBackground, View, Button, ScrollView } from 'react-native'
import styles from '../styles/styles_screen2'
import Standings from '../components/standings'
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      teams: null,
      isEastern: true,
      Eastern: null,
      Western: null
    }
    this.handleEastern = this.handleEastern.bind(this)
    this.handleEasternOFF = this.handleEasternOFF.bind(this)
  }
  componentDidMount() {
    const teams = require('../teamLogos')
    fetch('https://buzzer-beater.live/api/nba/standings')
      .then(res => res.json())
      .then(data => {
        this.setState({
          Eastern: data.result[0].data.conferences[1],
          Western: data.result[0].data.conferences[0],
          teams,
          isLoading: false
        })
      })
      .catch(err => console.error(err))
  }
  handleEastern() {
    this.setState({ isEastern: true })
  }
  handleEasternOFF() {
    this.setState({ isEastern: false })
  }
  render() {
    if (this.state.isEastern)
      return (
        <ImageBackground source={require('../assets/images/nba.jpg')} style={styles.imgBg}>
          <View style={styles.groupButton}>
            <Button onPress={this.handleEastern} title="Eastern" color="#ffc24d" />
            <Button onPress={this.handleEasternOFF} title="Western" color="#85632e" />
          </View>
          <ScrollView>
            <View style={styles.box}>
              {this.state.Eastern && <Standings title="Southeast" data={this.state.Eastern} />}
              {this.state.Eastern && <Standings title="Central" data={this.state.Eastern} />}
              {this.state.Eastern && <Standings title="Atlantic" data={this.state.Eastern} />}
            </View>
          </ScrollView>
        </ImageBackground>
      )
    return (
      <ImageBackground source={require('../assets/images/nba.jpg')} style={styles.imgBg}>
        <View style={styles.groupButton}>
          <Button onPress={this.handleEastern} title="Eastern" color="#85632e" />
          <Button onPress={this.handleEasternOFF} title="Western" color="#ffc24d" />
        </View>
        <ScrollView>
          <View style={styles.box}>
            {this.state.Eastern && <Standings title="Pacific" data={this.state.Western} />}
            {this.state.Eastern && <Standings title="Southwest" data={this.state.Western} />}
            {this.state.Eastern && <Standings title="Northwest" data={this.state.Western} />}
          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}
