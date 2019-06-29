import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  ProgressViewIOS
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      teamLogos: null,
      predictions: null,
      team1: null,
      team2: null,
      homeTeamChance: null,
      awayTeamChance: null,
      hasPredictions: false
    }
    this.handlePress1 = this.handlePress1.bind(this)
    this.handlePress2 = this.handlePress2.bind(this)
    this.calcPredictions = this.calcPredictions.bind(this)
    this.showPrediction = this.showPrediction.bind(this)
  }
  componentDidMount() {
    const teams = require('../teamLogos');
    fetch('https://buzzer-beater.live/api/nba/predictions')
      .then(res => res.json())
      .then(data => {
        this.setState({
          teamLogos: teams,
          predictions: data.result,
          isLoading: false
        })
      })
      .catch(err => console.error(err))
  }
  calcPredictions() {
    console.log('Home: ' + this.state.team1.name + ' Away: ' + this.state.team2.name)
    console.log('Searching prediction...')
    this.state.predictions.map(pred => {
      if ((pred.home === this.state.team1.name)
        && pred.away === this.state.team2.name) {
        let x = pred.home_team_chance.substring(0, 4)
        let y = (1 - pred.home_team_chance).toFixed(2)
        this.setState({
          homeTeamChance: x,
          awayTeamChance: y,
          hasPredictions: true,
        })
      }
    })
  }
  showPrediction(team) {
    if (this.state.homeTeamChance && team === 'home') {
      if (this.state.homeTeamChance >= 0.5)
        return <Text
          style={{
            color: 'green',
            fontSize: 30,
            fontWeight: 'bold',
            textShadowColor: '#FFF',
            textShadowOffset: { width: 2, height: 1 },
            textShadowRadius: 1,
            paddingRight: 8
          }} >{this.state.homeTeamChance}</Text>
      else return <Text
        style={{
          color: 'red',
          fontSize: 30,
          fontWeight: 'bold',
          textShadowColor: '#FFF',
          textShadowOffset: { width: 2, height: 1 },
          textShadowRadius: 1,
          paddingRight: 8
        }}>{this.state.homeTeamChance}</Text>
    }
    else if (this.state.awayTeamChance && team === 'away') {
      if (this.state.awayTeamChance >= 0.5)
        return <Text
          style={{
            color: 'green',
            fontSize: 30,
            fontWeight: 'bold',
            textShadowColor: '#FFF',
            textShadowOffset: { width: 2, height: 1 },
            textShadowRadius: 1,
            paddingRight: 8
          }}>{this.state.awayTeamChance}</Text>
      else return <Text
        style={{
          color: 'red',
          fontSize: 30,
          fontWeight: 'bold',
          textShadowColor: '#FFF',
          textShadowOffset: { width: 2, height: 1 },
          textShadowRadius: 1,
          paddingRight: 8
        }}>{this.state.awayTeamChance}</Text>

    }
  }
  handlePress1(team) {
    this.setState({ team1: team })
  }
  handlePress2(team) {
    this.setState({ team2: team })
  }
  render() {
    if (this.state.isLoading) {
      return (<ImageBackground source={require('../assets/images/nba.jpg')} style={{ width: '100%', height: '100%' }}>
        <View style={{ position: 'absolute', alignSelf: 'center', top: 300 }}>
          <Image source={require('../assets/images/ball.gif')} />
        </View>
      </ImageBackground>)
    }
    return (
      <ImageBackground source={require('../assets/images/nba.jpg')} style={{ width: '100%', height: '100%' }}>
        <View style={{ marginTop: 40, height: 180 }}>
          <Text style={styles.home}>HOME</Text>
          <ScrollView horizontal={true}>
            {this.state.teamLogos && this.state.teamLogos.TeamsLogos.map((team, i) => {
              return <TouchableOpacity key={i} onPress={() => this.handlePress1(team)}>
                <Image
                  key={team.name}
                  source={team.url}
                  style={{ height: 110, width: 110, }}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            })}
          </ScrollView>
        </View>
        <View style={{ height: 180 }}>
          <Text style={styles.away}>AWAY</Text>
          <ScrollView horizontal={true}>
            {this.state.teamLogos && this.state.teamLogos.TeamsLogos.slice(0).reverse().map((team, i) => {
              return <TouchableOpacity key={i} onPress={() => this.handlePress2(team)}>
                <Image
                  key={team.name}
                  source={team.url}
                  style={{ height: 110, width: 110, }}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            })}
          </ScrollView>
        </View>
        <View style={styles.Circle}>
          {(!this.state.team1 || !this.state.team2) && <Text style={styles.CircleTxt}>CHOOSE TEAMS:</Text>}
          {this.state.team1 && this.state.team2 && !this.state.hasPredictions && <Text style={styles.CircleTxt}>TEAMS:</Text>}
          {this.state.team1 && this.state.team2 && this.state.hasPredictions && <Text style={styles.CircleTxt}>PREDICTIONS:</Text>}
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.Circle2}>
              {this.state.team1 && <Image source={this.state.team1.url} style={{ width: 90, height: 90, alignSelf: 'center' }} />}
            </View>
            <View style={styles.Circle2}>
              {this.state.team2 && <Image source={this.state.team2.url} style={{ width: 90, height: 90, alignSelf: 'center' }} />}
            </View>
          </View>
          <View style={styles.Circle3}>
            <TouchableOpacity onPress={this.calcPredictions}>
              <Text style={{ color: '#ffc24d', fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Check</Text>
            </TouchableOpacity>
          </View>
          {!this.state.team1 && <Text style={styles.Circle2Txt}>HOME</Text>}
          {!this.state.team2 && <Text style={styles.Circle2Txt2}>AWAY</Text>}
          <View style={styles.predictions}>
            {this.showPrediction('home')}
            {this.showPrediction('away')}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
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
    opacity: 1
  },
  away: {
    alignSelf: 'flex-end',
    paddingRight: 20,
    paddingBottom: 10,
    color: '#000',
    textShadowColor: '#FFF',
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 1,
    fontSize: 35,
    fontWeight: 'bold',
    opacity: 1
  },
  Circle: {
    position: 'relative',
    alignSelf: 'center',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderWidth: 2,
    borderColor: '#ffc24d'
  },
  CircleTxt: {
    textAlign: 'center',
    color: '#fff',
    marginTop: 30,
    fontSize: 20,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    fontWeight: 'bold'
  },
  Circle2: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(0,0,0,1)',
    borderWidth: 2,
    borderColor: '#ffc24d',
    marginTop: 40,
    marginRight: 95
  },
  Circle2Txt: {
    position: 'absolute',
    top: 130,
    left: 20,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  Circle2Txt2: {
    position: 'absolute',
    top: 130,
    left: 220,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  Circle3: {
    alignSelf: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(0,0,0,1)',
    borderWidth: 2,
    borderColor: '#ffc24d',
  },
  predictions: {
    position: 'absolute',
    top: 55,
    left: 80,
    flexDirection: 'row'
  }
});
