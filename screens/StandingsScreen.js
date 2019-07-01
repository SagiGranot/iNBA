import React from 'react'
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  ActivityIndicator,
  Image,
  ScrollView
} from 'react-native'

const styles = StyleSheet.create({
  groupButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 45,
    width: Dimensions.get('window').width - 150,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 4,
    borderWidth: 0.5,
    flexDirection: 'row'
  },
  table: {
    width: Dimensions.get('window').width - 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 4,
    borderWidth: 0.5
  },
  bodyRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerRow: {
    flexDirection: 'row',
    paddingBottom: 10
  },
  tableSubject: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    paddingBottom: 5
  },
  tableTxt: {
    flex: 1,
    color: '#fff',
    paddingBottom: 5
  }
})

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
    this.setEastern = this.setEastern.bind(this)
    this.setEasternOFF = this.setEasternOFF.bind(this)
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
  setEastern() {
    this.setState({ isEastern: true })
  }
  setEasternOFF() {
    this.setState({ isEastern: false })
  }
  createTableRow(data, i) {
    //find team image
    let teamImage
    switch (data.name) {
      case 'Wizards':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'WAS') teamImage = team.url
        })
        break
      case 'Rockets':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'HOU') teamImage = team.url
        })
        break
      case 'Hornets':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'CHA') teamImage = team.url
        })
        break
      case '76ers':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'PHI') teamImage = team.url
        })
        break
      case 'Thunder':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'OKC') teamImage = team.url
        })
        break
      case 'Trail Blazers':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'POR') teamImage = team.url
        })
        break
      case 'Pelicans':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'NOP') teamImage = team.url
        })
        break
      case 'Warriors':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'GSW') teamImage = team.url
        })
        break
      case 'Bucks':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'MIL') teamImage = team.url
        })
        break
      case 'Magic':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'ORL') teamImage = team.url
        })
        break
      case 'Heat':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'MIA') teamImage = team.url
        })
        break
      case 'Hawks':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'ATL') teamImage = team.url
        })
        break
      case 'Pacers':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'IND') teamImage = team.url
        })
        break
      case 'Pistons':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'DET') teamImage = team.url
        })
        break
      case 'Bulls':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'CHI') teamImage = team.url
        })
        break
      case 'Cavaliers':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'CLE') teamImage = team.url
        })
        break
      case 'Raptors':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'TOR') teamImage = team.url
        })
        break
      case 'Celtics':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'BOS') teamImage = team.url
        })
        break
      case 'Nets':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'BKN') teamImage = team.url
        })
        break
      case 'Knicks':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'NYK') teamImage = team.url
        })
        break
      case 'Clippers':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'LAC') teamImage = team.url
        })
        break
      case 'Kings':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'SAC') teamImage = team.url
        })
        break
      case 'Lakers':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'LAL') teamImage = team.url
        })
        break
      case 'Suns':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'PHX') teamImage = team.url
        })
        break
      case 'Spurs':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'SAS') teamImage = team.url
        })
        break
      case 'Mavericks':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'DAL') teamImage = team.url
        })
        break
      case 'Grizzlies':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'MEM') teamImage = team.url
        })
        break
      case 'Nuggets':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'DEN') teamImage = team.url
        })
        break
      case 'Jazz':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'UTA') teamImage = team.url
        })
        break
      case 'Timberwolves':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'MIN') teamImage = team.url
        })
        break
    }
    return (
      <View key={i} style={styles.bodyRow}>
        <View style={{ flex: 2, flexDirection: 'row' }}>
          <Image style={{ width: 20, height: 20, alignSelf: 'center' }} source={teamImage} />
          <Text style={{ color: '#fff', textAlign: 'center' }}> {data.name}</Text>
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
        <Text style={{ flex: 1, textAlign: 'center', color: '#ffc24d', alignSelf: 'center' }}>
          Team
        </Text>
        <Text style={{ flex: 1, textAlign: 'center', color: '#ffc24d', alignSelf: 'center' }}>
          Wins
        </Text>
        <Text style={{ flex: 1, textAlign: 'center', color: '#ffc24d', alignSelf: 'center' }}>
          Losses
        </Text>
        <Text style={{ flex: 1, textAlign: 'center', color: '#ffc24d', alignSelf: 'center' }}>
          % Win
        </Text>
        <Text style={{ flex: 1, textAlign: 'center', color: '#ffc24d', alignSelf: 'center' }}>
          GB League
        </Text>
        <Text style={{ flex: 1, textAlign: 'center', color: '#ffc24d', alignSelf: 'center' }}>
          GB Conf.
        </Text>
      </View>
    )
  }
  render() {
    console.log(this.state.Western)
    if (this.state.isEastern)
      return (
        <ImageBackground source={require('../assets/images/nba.jpg')} style={{ width: '100%', height: '100%' }}>
          <View style={styles.groupButton}>
            <Button onPress={this.setEastern} title='Eastern' color='#ffc24d' />
            <Button onPress={this.setEasternOFF} title='Western' color='#85632e' />
          </View>
          <ScrollView>
            <View style={{ marginTop: 25, alignItems: 'center' }}>
              <Text style={styles.tableSubject}>Southeast</Text>
              <View style={styles.table}>
                {this.createHeaderRow()}
                {this.state.isLoading && <ActivityIndicator size="large" color="#fff" />}
                {this.state.Eastern && this.state.Eastern.divisions[0].teams.map((rowData, i) => this.createTableRow(rowData, i))}
              </View>
              {/*  */}
              <Text style={styles.tableSubject}>Central</Text>
              <View style={styles.table}>
                {this.createHeaderRow()}
                {this.state.isLoading && <ActivityIndicator size="large" color="#fff" />}
                {this.state.Eastern && this.state.Eastern.divisions[1].teams.map((rowData, i) => this.createTableRow(rowData, i))}
              </View>
              {/*  */}
              <Text style={styles.tableSubject}>Atlantic</Text>
              <View style={styles.table}>
                {this.createHeaderRow()}
                {this.state.isLoading && <ActivityIndicator size="large" color="#fff" />}
                {this.state.Eastern && this.state.Eastern.divisions[2].teams.map((rowData, i) => this.createTableRow(rowData, i))}
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      )
    return (
      <ImageBackground source={require('../assets/images/nba.jpg')} style={{ width: '100%', height: '100%' }}>
        <View style={styles.groupButton}>
          <Button onPress={this.setEastern} title='Eastern' color='#85632e' />
          <Button onPress={this.setEasternOFF} title='Western' color='#ffc24d' />
        </View>
        <ScrollView>
          <View style={{ marginTop: 25, alignItems: 'center' }}>
            <Text style={styles.tableSubject}>Pacific</Text>
            <View style={styles.table}>
              {this.createHeaderRow()}
              {this.state.isLoading && <ActivityIndicator size="large" color="#fff" />}
              {this.state.Eastern && this.state.Western.divisions[0].teams.map((rowData, i) => this.createTableRow(rowData, i))}
            </View>
            {/*  */}
            <Text style={styles.tableSubject}>Southwest</Text>
            <View style={styles.table}>
              {this.createHeaderRow()}
              {this.state.isLoading && <ActivityIndicator size="large" color="#fff" />}
              {this.state.Eastern && this.state.Western.divisions[1].teams.map((rowData, i) => this.createTableRow(rowData, i))}
            </View>
            {/*  */}
            <Text style={styles.tableSubject}>Northwest</Text>
            <View style={styles.table}>
              {this.createHeaderRow()}
              {this.state.isLoading && <ActivityIndicator size="large" color="#fff" />}
              {this.state.Eastern && this.state.Western.divisions[2].teams.map((rowData, i) => this.createTableRow(rowData, i))}
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}
