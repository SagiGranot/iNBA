import React from 'react'
import {
  Image,
  Button,
  ImageBackground,
  View,
  Text,
  Dimensions,
  AsyncStorage,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView
} from 'react-native'
import { Icon } from 'expo'
import styles from '../styles/styles_screen1'
import getStatsDetails from '../getTeamStats'
import News from '../components/news'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
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
      team_stats: null
    }
    this.createTableRow = this.createTableRow.bind(this)
    this.createPlayer = this.createPlayer.bind(this)
    this.handleSignOutAsync = this.handleSignOutAsync.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.toggleLoading = this.toggleLoading.bind(this)
  }
  componentWillMount() {
    const { width, height } = Dimensions.get('window')
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
        const theNews = []
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
  handleSignOutAsync = async a => {
    await AsyncStorage.clear()
    a.props.navigation.navigate('Auth')
  }

  toggleLoading() {
    this.setState({ isLoading: !this.state.isLoading })
  }
  createTableRow(i) {
    return (
      <View key={i}>
        <View style={styles.headerRow}>
          <Text style={styles.newsTitle}>{this.state.news[i].title.substring(0, 46) + '...'}</Text>
        </View>
        <View style={styles.bodyRow}>
          <View style={styles.imageView}>
            <Image style={styles.imageStyle} source={{ uri: this.state.news[i].image }} />
            <Text style={styles.imageText}>
              {' '}
              {this.state.news[i].body.substring(0, 150) + '...'}
            </Text>
          </View>
        </View>
      </View>
    )
  }
  createPlayer(i) {
    return (
      <View key={i} style={styles.playerBox}>
        <Image
          style={styles.imageStyle2}
          source={{
            uri: `https://nba-players.herokuapp.com/players/${this.state.teamPlayers.result.players[i].last_name}/${this.state.teamPlayers.result.players[i].first_name}`
          }}
        />
        <Text style={styles.imageText2}>
          {' '}
          {this.state.teamPlayers.result.players[i].first_name}
        </Text>
        <Text style={styles.imageText2}>
          {' ' + this.state.teamPlayers.result.players[i].last_name}
        </Text>
      </View>
    )
  }
  handleReset() {
    this.setState({
      selected: false,
      team1: null,
      team1_name: null,
      teamPlayers: null,
      team_stats: null
    })
  }
  render() {
    const state = this.state
    if (this.state.isLoading) {
      return (
        <ImageBackground source={require('../assets/images/nba.jpg')} style={styles.imgBackground}>
          <View style={styles.loading}>
            <Image source={require('../assets/images/ball.gif')} />
          </View>
        </ImageBackground>
      )
    }
    return (
      <ImageBackground source={require('../assets/images/nba.jpg')} style={styles.imgBackground}>
        <ScrollView>
          <TouchableHighlight
            onPress={async () => {
              await AsyncStorage.clear()
              this.props.navigation.navigate('Auth')
            }}
          >
            <Icon.Ionicons name="ios-power" size={26} style={styles.signOff} color="#fff" />
          </TouchableHighlight>
          {!state.selected && (
            <View style={styles.teamsView}>
              <Text style={styles.home}>TEAMS</Text>
              <ScrollView horizontal>
                {this.state.teamLogos &&
                  this.state.teamLogos.TeamsLogos.map((team, i) => {
                    return (
                      <TouchableOpacity
                        key={i}
                        onPress={() => {
                          this.toggleLoading()
                          getStatsDetails(team, this)
                        }}
                      >
                        <Image
                          key={team.name}
                          source={team.url}
                          style={styles.logo}
                          resizeMode="stretch"
                        />
                      </TouchableOpacity>
                    )
                  })}
              </ScrollView>
            </View>
          )}
          <News data={state.news} />
          {state.selected && state.teamPlayers.message === "Team's details Fetched!" && (
            <View style={styles.statsBox}>
              <View style={styles.headerStats}>
                <Image source={this.state.team1.url} style={styles.headerImg} />
                <Text style={styles.teamName}>{this.state.team1_name}</Text>
              </View>
              <Text style={styles.home}>ROSTER</Text>
              <ScrollView horizontal>
                <View style={styles.headerPlayers}>
                  {state.teamPlayers.result.players.map((player, i) => {
                    return this.createPlayer(i)
                  })}
                </View>
              </ScrollView>
            </View>
          )}
          {state.team_stats && state.team_stats.result && state.team_stats.result.own_record && (
            <View>
              <Text style={styles.tableSubject}>TEAM STATS</Text>
              <View style={styles.teamStats}>
                <View style={styles.headerRow}>
                  <Text style={styles.avg}>Average</Text>
                  <Text style={styles.total}>Total</Text>
                </View>
                <View style={styles.statRow}>
                  <Text style={styles.textA}>Points</Text>
                  <Text style={styles.textB}>
                    {' '}
                    {state.team_stats.result.own_record.average.points}
                  </Text>
                  <Text style={styles.textC}>
                    {' '}
                    {state.team_stats.result.own_record.total.points}
                  </Text>
                </View>
                <View style={styles.statRow}>
                  <Text style={styles.textA}>Assists</Text>
                  <Text style={styles.textB}>
                    {' '}
                    {state.team_stats.result.own_record.average.assists}
                  </Text>
                  <Text style={styles.textC}>
                    {' '}
                    {state.team_stats.result.own_record.total.assists}
                  </Text>
                </View>
                <View style={styles.statRow}>
                  <Text style={styles.textA}>Rebounds</Text>
                  <Text style={styles.textB}>
                    {' '}
                    {state.team_stats.result.own_record.average.rebounds}
                  </Text>
                  <Text style={styles.textC}>
                    {' '}
                    {state.team_stats.result.own_record.total.rebounds}
                  </Text>
                </View>
                <View style={styles.statRow}>
                  <Text style={styles.textA}>Steals</Text>
                  <Text style={styles.textB}>
                    {' '}
                    {state.team_stats.result.own_record.average.steals}
                  </Text>
                  <Text style={styles.textC}>
                    {' '}
                    {state.team_stats.result.own_record.total.steals}
                  </Text>
                </View>
                <View style={styles.statRow}>
                  <Text style={styles.textA}>Blocks</Text>
                  <Text style={styles.textB}>
                    {' '}
                    {state.team_stats.result.own_record.average.blocks}
                  </Text>
                  <Text style={styles.textC}>
                    {' '}
                    {state.team_stats.result.own_record.total.blocks}
                  </Text>
                </View>
                <View style={styles.statRow}>
                  <Text style={styles.textA}>Fouls</Text>
                  <Text style={styles.textB}>
                    {' '}
                    {state.team_stats.result.own_record.average.fouls_drawn}
                  </Text>
                  <Text style={styles.textC}>
                    {' '}
                    {state.team_stats.result.own_record.total.total_fouls}
                  </Text>
                </View>
              </View>
            </View>
          )}
          {state.selected && (
            <View style={styles.btn}>
              <Button
                onPress={this.handleReset}
                title="Go Back"
                color="#841584"
                accessibilityLabel="Go Back"
              />
            </View>
          )}
        </ScrollView>
      </ImageBackground>
    )
  }
}
