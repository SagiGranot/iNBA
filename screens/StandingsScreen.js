import React from 'react'
import {
  ImageBackground,
  View,
  Text,
  Button,
  ActivityIndicator,
  Image,
  ScrollView
} from 'react-native'
import styles from '../styles/styles_screen2'
import setTeamImage from '../setTeamImage'

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
    this.createTableRow = this.createTableRow.bind(this)
    this.createHeaderRow = this.createHeaderRow.bind(this)
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
  createTableRow(data, i) {
    const teamImage = setTeamImage(data, this.state.teams.TeamsLogos)
    return (
      <View key={i} style={styles.bodyRow}>
        <View style={styles.teamBox}>
          <Image style={styles.logo} source={teamImage} />
          <Text style={styles.logoTxt}> {data.name}</Text>
        </View>
        <Text style={styles.tableTxt}>{data.wins}</Text>
        <Text style={styles.tableTxt}>{data.losses}</Text>
        <Text style={styles.tableTxt}>{data.win_pct}</Text>
        <Text style={styles.tableTxt}>{data.games_behind.league}</Text>
        <Text style={styles.tableTxt}>{data.games_behind.conference}</Text>
      </View>
    )
  }
  createHeaderRow() {
    return (
      <View style={styles.headerRow}>
        <Text style={styles.headerTxt}>Team</Text>
        <Text style={styles.headerTxt}>Wins</Text>
        <Text style={styles.headerTxt}>Losses</Text>
        <Text style={styles.headerTxt}>% Win</Text>
        <Text style={styles.headerTxt}>GB League</Text>
        <Text style={styles.headerTxt}>GB Conf.</Text>
      </View>
    )
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
              <Text style={styles.tableSubject}>Southeast</Text>
              <View style={styles.table}>
                {this.createHeaderRow()}
                {this.state.isLoading && <ActivityIndicator size="large" color="#fff" />}
                {this.state.Eastern &&
                  this.state.Eastern.divisions[0].teams.map((rowData, i) =>
                    this.createTableRow(rowData, i)
                  )}
              </View>
              {/*  */}
              <Text style={styles.tableSubject}>Central</Text>
              <View style={styles.table}>
                {this.createHeaderRow()}
                {this.state.isLoading && <ActivityIndicator size="large" color="#fff" />}
                {this.state.Eastern &&
                  this.state.Eastern.divisions[1].teams.map((rowData, i) =>
                    this.createTableRow(rowData, i)
                  )}
              </View>
              {/*  */}
              <Text style={styles.tableSubject}>Atlantic</Text>
              <View style={styles.table}>
                {this.createHeaderRow()}
                {this.state.isLoading && <ActivityIndicator size="large" color="#fff" />}
                {this.state.Eastern &&
                  this.state.Eastern.divisions[2].teams.map((rowData, i) =>
                    this.createTableRow(rowData, i)
                  )}
              </View>
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
            <Text style={styles.tableSubject}>Pacific</Text>
            <View style={styles.table}>
              {this.createHeaderRow()}
              {this.state.isLoading && <ActivityIndicator size="large" color="#fff" />}
              {this.state.Eastern &&
                this.state.Western.divisions[0].teams.map((rowData, i) =>
                  this.createTableRow(rowData, i)
                )}
            </View>
            {/*  */}
            <Text style={styles.tableSubject}>Southwest</Text>
            <View style={styles.table}>
              {this.createHeaderRow()}
              {this.state.isLoading && <ActivityIndicator size="large" color="#fff" />}
              {this.state.Eastern &&
                this.state.Western.divisions[1].teams.map((rowData, i) =>
                  this.createTableRow(rowData, i)
                )}
            </View>
            {/*  */}
            <Text style={styles.tableSubject}>Northwest</Text>
            <View style={styles.table}>
              {this.createHeaderRow()}
              {this.state.isLoading && <ActivityIndicator size="large" color="#fff" />}
              {this.state.Eastern &&
                this.state.Western.divisions[2].teams.map((rowData, i) =>
                  this.createTableRow(rowData, i)
                )}
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}
