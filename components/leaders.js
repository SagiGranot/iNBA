import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from '../styles/styles_screen4'
import setTeamImage from '../setTeamImage'

export default class Leaders extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teams: null,
      leaders: [],
      title: ''
    }
  }
  componentDidMount() {
    console.log(this.props.data)
    const teams = require('../teamLogos')
    const leaders = this.props.data
    const title = this.props.tableName
    this.setState({ teams, leaders, title })
  }
  render() {
    return (
      <View style={styles.firstTable}>
        <Text style={styles.tableSubject}>{this.state.title}</Text>
        <View style={styles.table}>
          <View style={styles.headerRow}>
            <Text style={styles.prop1}>Rank</Text>
            <Text style={styles.prop}>Player</Text>
            <Text style={styles.prop}>Team</Text>
            <Text style={styles.prop1}>Score</Text>
          </View>
          {this.state.leaders.map((rowData, i) => {
            const teamImage = setTeamImage(rowData.teams[0], this.state.teams.TeamsLogos)
            return (
              <View key={i} style={styles.bodyRow}>
                <Text style={styles.number}>{i + 1}</Text>
                <View style={styles.player}>
                  <Image
                    style={styles.playerImg}
                    source={{
                      uri: `https://nba-players.herokuapp.com/players/${rowData.player.last_name}/${rowData.player.first_name}`
                    }}
                  />
                  <Text style={styles.playerName}>{rowData.player.full_name}</Text>
                </View>
                <View style={styles.team}>
                  <Image style={styles.teamImg} source={teamImage} />
                  <Text style={styles.teamName}>{rowData.teams[0].name}</Text>
                </View>
                <Text style={styles.score}>{rowData.score}</Text>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}
