import React from 'react';
import { Image, StyleSheet, ImageBackground, View, Text, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      Width: null,
      Height: null,
      teamLogos: null,
      team1: null,
      team1_name: null,
      selected: false,
      news: null,
      teamPlayers: null,
    }
    this.handlePress1 = this.handlePress1.bind(this)
  }
  componentWillMount() {
    const { width, height } = Dimensions.get("window");
    this.setState({
      Width: width,
      Height: height
    })
  }

  componentDidMount() {
    const teams = require('../teamLogos')
    fetch('https://buzzer-beater.live/api/nba/news')
      .then(res => res.json())
      .then(data => {
        let theNews = []
        for (let i = 0; i < 10; i++) {
          theNews.push(data.result[0].data.articles.results[i])
        }
        this.setState({
          news: theNews,
          teamLogos: teams,
          isLoading: false
        })
      })
      .catch(err => console.error(err))
  }

  handlePress1(team) {
    switch (team.name) {
      case 'WAS':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ec8d4-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Washington Wizards', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Washington Wizards', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'HOU':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ec825-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Houston Rockets', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Houston Rockets', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'CHA':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ec97e-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Charlotte Hornets', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Charlotte Hornets', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'PHI':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ec87d-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Philadelphia 76ers', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Philadelphia 76ers', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'OKC':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ecfff-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Oklahoma City Thunder', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Oklahoma City Thunder', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'POR':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ed056-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Portland Trail Blazers', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Portland Trail Blazers', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'NOP':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ecc9a-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'New Orleans Pelicans', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'New Orleans Pelicans', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'GSW':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ec825-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Golden State Warriors', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Golden State Warriors', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'MIL':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ecefd-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Milwaukee Bucks', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Milwaukee Bucks', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'ORL':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ed157-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Orlando Magic', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Orlando Magic', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'MIA':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ecea6-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Miami Heat', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Miami Heat', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'ATL':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ecb8f-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Atlanta Hawks', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Atlanta Hawks', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'IND':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ec7cd-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Indiana Pacers', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Indiana Pacers', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'DET':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ec928-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Detroit Pistons', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Detroit Pistons', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'CHI':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ec5fd-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Chicago Bulls', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Chicago Bulls', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'CLE':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ec773-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Cleveland Cavaliers', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Cleveland Cavaliers', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'TOR':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ecda6-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Toronto Raptors', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Toronto Raptors', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'BOS':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583eccfa-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Boston Celtics', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Boston Celtics', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'BRK':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ec9d6-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Brooklyn Nets', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Brooklyn Nets', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'NYK':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ec70e-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'New York Knicks', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'New York Knicks', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'LAC':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ecdfb-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Los Angeles Clippers', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Los Angeles Clippers', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'SAC':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ed0ac-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Sacramento Kings', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Sacramento Kings', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'LAL':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ecae2-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Los Angeles Lakers', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Los Angeles Lakers', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'PHX':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ecfa8-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Phoenix Suns', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Phoenix Suns', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'SAS':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ecd4f-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'San Antonio Spurs', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'San Antonio Spurs', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'DAL':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ecf50-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Dallas Mavericks', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Dallas Mavericks', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'MEM':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583eca88-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Memphis Grizzlies', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Memphis Grizzlies', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'DEN':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ed102-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Denver Nuggets', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Denver Nuggets', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'UTA':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583ece50-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Utah Jazz', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Utah Jazz', teamPlayers: null, team1: team, selected: true }) })
        break;
      case 'MIN':
        fetch('https://buzzer-beater.live/api/nba/team_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId: "583eca2f-fb46-11e1-82cb-f4ce4684ea4c" })
        }).then(response => response.json())
          .then(data => {
            this.setState({ team1_name: 'Minnesota Timberwolves', teamPlayers: data, team1: team, selected: true })
          })
          .catch(err => { this.setState({ team1_name: 'Minnesota Timberwolves', teamPlayers: null, team1: team, selected: true }) })
        break;
      default:
        this.setState({ team1_name: '', team1: team, selected: true })
    }

  }

  createTableRow(i) {
    return (
      <View key={i}>
        <View style={styles.headerRow}>
          <Text style={{ flex: 1, color: '#ffc24d', fontWeight: 'bold' }}>{this.state.news[i].title.substring(0, 46) + '...'}</Text>
        </View>
        <View style={styles.bodyRow}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Image style={{ width: 90, height: 60, alignSelf: 'center' }} source={{ uri: this.state.news[i].image }} />
            <Text style={{ color: '#fff', textAlign: 'left' }}> {this.state.news[i].body.substring(0, 200) + '...'}</Text>
          </View>
        </View>
      </View>
    )
  }
  createPlayer(i) {
    return (
      <View key={i} style={styles.playerBox}>
        <Image style={{ width: 120, height: 90, backgroundColor: 'rgba(0,0,0,0.6)', borderWidth: 1, borderRadius: 8, }} source={{ uri: `https://nba-players.herokuapp.com/players/${this.state.teamPlayers.result.players[i].last_name}/${this.state.teamPlayers.result.players[i].first_name}` }} />
        <Text style={{ color: '#fff', fontWeight: 'bold', alignSelf: 'center' }}> {this.state.teamPlayers.result.players[i].first_name}</Text>
        <Text style={{ color: '#fff', fontWeight: 'bold', alignSelf: 'center' }}> {this.state.teamPlayers.result.players[i].last_name}</Text>
      </View>
    )
  }
  render() {
    const state = this.state;
    console.log(this.state.teamPlayers)
    return (
      <ImageBackground source={require('../assets/images/nba.jpg')} style={{ width: '100%', height: '100%' }}>
        <ScrollView>
          {!state.selected && <View style={{ marginTop: 40, height: 190 }}>
            <Text style={styles.home}>SELECT A TEAM</Text>
            <ScrollView horizontal={true}>
              {this.state.teamLogos && this.state.teamLogos.TeamsLogos.map((team, i) => {
                return <TouchableOpacity key={i} onPress={() => this.handlePress1(team)}>
                  <Image
                    key={team.name}
                    source={team.url}
                    style={{ height: 110, width: 110 }}
                    resizeMode="stretch"
                  />
                </TouchableOpacity>
              })}
            </ScrollView>
          </View>}
          {/*  */}
          {!state.selected && state.news && <View style={{ marginTop: 20, alignItems: 'center' }}>
            <Text style={styles.home}>NEWS</Text>
            <View style={styles.table}>
              {this.state.news.map((item, i) => {
                return (
                  this.createTableRow(i)
                )
              })}
            </View>
          </View>}
          {/*  */}
          {state.selected && <View style={{ marginTop: 40, }}>
            <View style={{ flexDirection: 'row', marginBottom: 25 }}>
              <Image
                source={this.state.team1.url}
                style={{ height: 110, width: 110 }}
              />
              <Text style={styles.teamName}>{this.state.team1_name}</Text>
            </View>
            <Text style={styles.home}>ROSTER</Text>
            <ScrollView horizontal={true}>
              <View style={{ height: 150, flexDirection: 'row' }}>
                {state.teamPlayers.result.players.map((player, i) => { return this.createPlayer(i) })}
              </View>
            </ScrollView>
            <Text style={styles.tableSubject}>TEAM STATS</Text>
            <View style={{ width: 250, backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 4, borderWidth: 0.5, alignSelf: 'center' }}>
              <View style={styles.headerRow}>
                <Text style={{ flex: 1, textAlign: 'center', color: '#ffc24d', paddingLeft: 20 }}>Average</Text>
                <Text style={{ flex: 1, textAlign: 'center', color: '#ffc24d', alignSelf: 'center' }}>Total</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#ffc24d', }}>Points</Text>
                <Text style={{ color: '#fff', marginLeft: 25 }}> TEST</Text>
                <Text style={{ color: '#fff', marginLeft: 70 }}> TEST</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#ffc24d', }}>Points</Text>
                <Text style={{ color: '#fff', marginLeft: 25 }}> TEST</Text>
                <Text style={{ color: '#fff', marginLeft: 70 }}> TEST</Text>
              </View>
            </View>
          </View>}
        </ScrollView>
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
  },
  bodyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
  home: {
    alignSelf: 'flex-start',
    paddingLeft: 20,
    paddingBottom: 10,
    color: '#FFF',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 1,
    fontSize: 35,
    fontWeight: 'bold',
    opacity: 0.7
  },
  teamName: {
    height: 40,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 1,
    fontSize: 25,
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  playerBox: {
    width: 120,
    height: 100,
    marginRight: 10,

  }
});
