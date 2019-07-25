import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from '../styles/styles_screen2'
import setTeamImage from '../setTeamImage'

export default class Standings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teams: null,
      standings: null,
      title: ''
    }
  }
  componentDidMount() {
    console.log(this.props.data)
    const teams = require('../teamLogos')
    const standings = this.props.data
    const title = this.props.tableName
    this.setState({ teams, standings, title })
  }
  render() {
    return (
      <View>
        <Text style={styles.tableSubject}>{this.state.title}</Text>
        <View style={styles.table}>
          <View style={styles.headerRow}>
            <Text style={styles.headerTxt}>Team</Text>
            <Text style={styles.headerTxt}>Wins</Text>
            <Text style={styles.headerTxt}>Losses</Text>
            <Text style={styles.headerTxt}>% Win</Text>
            <Text style={styles.headerTxt}>GB League</Text>
            <Text style={styles.headerTxt}>GB Conf.</Text>
          </View>
          {this.state.standings &&
            this.state.standings.divisions[0].teams.map((rowData, i) => {
              const teamImage = setTeamImage(rowData, this.state.teams.TeamsLogos)
              return (
                <View key={i} style={styles.bodyRow}>
                  <View style={styles.teamBox}>
                    <Image style={styles.logo} source={teamImage} />
                    <Text style={styles.logoTxt}> {rowData.name}</Text>
                  </View>
                  <Text style={styles.tableTxt}>{rowData.wins}</Text>
                  <Text style={styles.tableTxt}>{rowData.losses}</Text>
                  <Text style={styles.tableTxt}>{rowData.win_pct}</Text>
                  <Text style={styles.tableTxt}>{rowData.games_behind.league}</Text>
                  <Text style={styles.tableTxt}>{rowData.games_behind.conference}</Text>
                </View>
              )
            })}
        </View>
      </View>
    )
  }
}
