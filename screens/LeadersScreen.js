import React from 'react';
import { Image, StyleSheet, ImageBackground, View, Text, Dimensions, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
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
    const { width, height } = Dimensions.get("window");
    this.setState({
      Width: width,
      Height: height
    })

  }
  componentDidMount() {
    const teams = require('../teamLogos');
    fetch('https://buzzer-beater.live/api/nba/leaders')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        let minutes_total = []
        let minutes_average = []
        let points_total = []
        let points_average = []
        for (let i = 0; i < 5; i++) {
          minutes_total.push(data.result[0].data.categories[0].ranks[i])
          minutes_average.push(data.result[0].data.categories[25].ranks[i])
          points_total.push(data.result[0].data.categories[1].ranks[i])
          points_average.push(data.result[0].data.categories[26].ranks[i])
        }
        this.setState({
          teams: teams,
          minutes_total: minutes_total,
          minutes_average: minutes_average,
          points_average: points_average,
          points_total: points_total,
          isLoading: false
        })
      })
      .catch(err => console.error(err))
  }
  createTableRow(data, i) {
    //find team image
    let teamImage;
    switch (data.teams[0].name) {
      case 'Wizards':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'WAS')
            teamImage = team.url;
        })
        break;
      case 'Rockets':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'HOU')
            teamImage = team.url;
        })
        break;
      case 'Hornets':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'CHA')
            teamImage = team.url;
        })
        break;
      case '76ers':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'PHI')
            teamImage = team.url;
        })
        break;
      case 'Thunder':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'OKC')
            teamImage = team.url;
        })
        break;
      case 'Trail Blazers':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'POR')
            teamImage = team.url;
        })
        break;
      case 'Pelicans':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'NOP')
            teamImage = team.url;
        })
        break;
      case 'Warriors':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'GSW')
            teamImage = team.url;
        })
        break;
      case 'Bucks':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'MIL')
            teamImage = team.url;
        })
        break;
      case 'Magic':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'ORL')
            teamImage = team.url;
        })
        break;
      case 'Heat':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'MIA')
            teamImage = team.url;
        })
        break;
      case 'Hawks':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'ATL')
            teamImage = team.url;
        })
        break;
      case 'Pacers':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'IND')
            teamImage = team.url;
        })
        break;
      case 'Pistons':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'DET')
            teamImage = team.url;
        })
        break;
      case 'Bulls':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'CHI')
            teamImage = team.url;
        })
        break;
      case 'Cavaliers':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'CLE')
            teamImage = team.url;
        })
        break;
      case 'Raptors':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'TOR')
            teamImage = team.url;
        })
        break;
      case 'Celtics':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'BOS')
            teamImage = team.url;
        })
        break;
      case 'Nets':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'BKN')
            teamImage = team.url;
        })
        break;
      case 'Knicks':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'NYK')
            teamImage = team.url;
        })
        break;
      case 'Clippers':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'LAC')
            teamImage = team.url;
        })
        break;
      case 'Kings':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'SAC')
            teamImage = team.url;
        })
        break;
      case 'Lakers':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'LAL')
            teamImage = team.url;
        })
        break;
      case 'Suns':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'PHX')
            teamImage = team.url;
        })
        break;
      case 'Spurs':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'SAS')
            teamImage = team.url;
        })
        break;
      case 'Mavericks':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'DAL')
            teamImage = team.url;
        })
        break;
      case 'Grizzlies':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'MEM')
            teamImage = team.url;
        })
        break;
      case 'Nuggets':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'DEN')
            teamImage = team.url;
        })
        break;
      case 'Jazz':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'UTA')
            teamImage = team.url;
        })
        break;
      case 'Timberwolves':
        this.state.teams.TeamsLogos.forEach(team => {
          if (team.name === 'MIN')
            teamImage = team.url;
        })
        break;
    }

    return (
      <View key={i} style={styles.bodyRow}>
        <Text style={{ flex: 1, color: '#fff', paddingLeft: 5 }}>{i + 1}</Text>
        <View style={{ flex: 3, flexDirection: 'column' }}>
          <Image style={{ width: 50, height: 50, alignSelf: 'center' }} source={{ uri: `https://nba-players.herokuapp.com/players/${data.player.last_name}/${data.player.first_name}` }} />
          <Text style={{ color: '#fff', textAlign: 'center' }}>{data.player.full_name}</Text>
        </View>
        <View style={{ flex: 3, flexDirection: 'column' }}>
          <Image style={{ width: 50, height: 50, alignSelf: 'center' }} source={teamImage} />
          <Text style={{ color: '#fff', textAlign: 'center' }}>{data.teams[0].name}</Text>
        </View>
        <Text style={{ flex: 1, color: '#fff' }}>{data.score}</Text>
      </View>
    )
  }
  render() {
    const state = this.state;
    console.log(state.points_average)
    return (
      <ImageBackground source={require('../assets/images/nba.jpg')} style={{ width: '100%', height: '100%' }}>
        <View style={{ height: 35 }}></View>
        <ScrollView>
          <View style={{ marginTop: 20, alignItems: 'center' }}>
            <Text style={styles.tableSubject}>Minutes (Total)</Text>
            <View style={styles.table}>
              <View style={styles.headerRow}>
                <Text style={{ flex: 1, textAlign: 'center', color: '#ffc24d' }}>Rank</Text>
                <Text style={{ flex: 3, textAlign: 'center', color: '#ffc24d' }}>Player</Text>
                <Text style={{ flex: 3, textAlign: 'center', color: '#ffc24d' }}>Team</Text>
                <Text style={{ flex: 1, textAlign: 'center', color: '#ffc24d' }}>Score</Text>
              </View>
              {state.isLoading && <ActivityIndicator size="large" color="#fff" />}
              {state.minutes_total && state.minutes_total.map((rowData, i) => this.createTableRow(rowData, i))}
            </View>
          </View>
          {/*  */}
          <View style={{ marginTop: 60, alignItems: 'center' }}>
            <Text style={styles.tableSubject}>Minutes (Average)</Text>
            <View style={styles.table}>
              <View style={styles.headerRow}>
                <Text style={{ flex: 1, textAlign: 'center', color: '#ffc24d' }}>Rank</Text>
                <Text style={{ flex: 3, textAlign: 'center', color: '#ffc24d' }}>Player</Text>
                <Text style={{ flex: 3, textAlign: 'center', color: '#ffc24d' }}>Team</Text>
                <Text style={{ flex: 1, textAlign: 'center', color: '#ffc24d' }}>Score</Text>
              </View>
              {state.isLoading && <ActivityIndicator size="large" color="#fff" />}
              {state.minutes_total && state.minutes_average.map((rowData, i) => this.createTableRow(rowData, i))}
            </View>
          </View>
          {/*  */}
          <View style={{ marginTop: 60, alignItems: 'center' }}>
            <Text style={styles.tableSubject}>Points (Total)</Text>
            <View style={styles.table}>
              <View style={styles.headerRow}>
                <Text style={{ flex: 1, textAlign: 'center', color: '#ffc24d' }}>Rank</Text>
                <Text style={{ flex: 3, textAlign: 'center', color: '#ffc24d' }}>Player</Text>
                <Text style={{ flex: 3, textAlign: 'center', color: '#ffc24d' }}>Team</Text>
                <Text style={{ flex: 1, textAlign: 'center', color: '#ffc24d' }}>Score</Text>
              </View>
              {state.isLoading && <ActivityIndicator size="large" color="#fff" />}
              {state.minutes_total && state.points_total.map((rowData, i) => this.createTableRow(rowData, i))}
            </View>
            {/*  */}
            <View style={{ marginTop: 60, alignItems: 'center' }}>
              <Text style={styles.tableSubject}>Points (Average)</Text>
              <View style={styles.table}>
                <View style={styles.headerRow}>
                  <Text style={{ flex: 1, textAlign: 'center', color: '#ffc24d' }}>Rank</Text>
                  <Text style={{ flex: 3, textAlign: 'center', color: '#ffc24d' }}>Player</Text>
                  <Text style={{ flex: 3, textAlign: 'center', color: '#ffc24d' }}>Team</Text>
                  <Text style={{ flex: 1, textAlign: 'center', color: '#ffc24d' }}>Score</Text>
                </View>
                {state.isLoading && <ActivityIndicator size="large" color="#fff" />}
                {state.minutes_total && state.points_average.map((rowData, i) => this.createTableRow(rowData, i))}
              </View>
            </View>
          </View>
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
  }
});
