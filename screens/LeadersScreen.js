import React from 'react'
import { Image, ImageBackground, View, Text, Dimensions, ScrollView } from 'react-native'
import styles from '../styles/styles_screen4'
import setTeamImage from '../setTeamImage'
import Leaders from '../components/leaders'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      teams: null,
      minutes_total: null,
      minutes_average: null,
      Width: null,
      Height: null
    }
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
    fetch('https://buzzer-beater.live/api/nba/leaders')
      .then(res => res.json())
      .then(data => {
        const minutes_total = []
        const minutes_average = []
        const points_total = []
        const points_average = []
        for (let i = 0; i < 5; i++) {
          minutes_total.push(data.result[0].data.categories[0].ranks[i])
          minutes_average.push(data.result[0].data.categories[25].ranks[i])
          points_total.push(data.result[0].data.categories[1].ranks[i])
          points_average.push(data.result[0].data.categories[26].ranks[i])
        }
        this.setState({
          teams,
          minutes_total,
          minutes_average,
          points_average,
          points_total,
          isLoading: false
        })
      })
      .catch(err => console.error(err))
  }
  createTableRow(data, i) {
    const teamImage = setTeamImage(data.teams[0], this.state.teams.TeamsLogos)

    return (
      <View key={i} style={styles.bodyRow}>
        <Text style={styles.number}>{i + 1}</Text>
        <View style={styles.player}>
          <Image
            style={styles.playerImg}
            source={{
              uri: `https://nba-players.herokuapp.com/players/${data.player.last_name}/${data.player.first_name}`
            }}
          />
          <Text style={styles.playerName}>{data.player.full_name}</Text>
        </View>
        <View style={styles.team}>
          <Image style={styles.teamImg} source={teamImage} />
          <Text style={styles.teamName}>{data.teams[0].name}</Text>
        </View>
        <Text style={styles.score}>{data.score}</Text>
      </View>
    )
  }
  render() {
    const state = this.state
    return (
      <ImageBackground source={require('../assets/images/nba.jpg')} style={styles.imgBg}>
        <View style={styles.padd}></View>
        <ScrollView>
          {state.minutes_total && (
            <Leaders tableName="Minutes (Total)" data={state.minutes_total} />
          )}
          {state.minutes_average && (
            <Leaders tableName="Minutes (Average)" data={state.minutes_average} />
          )}
          {state.points_total && <Leaders tableName="Points (Total)" data={state.points_total} />}
          {state.points_average && (
            <Leaders tableName="Points (Average)" data={state.points_average} />
          )}
        </ScrollView>
      </ImageBackground>
    )
  }
}
