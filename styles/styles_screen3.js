import { StyleSheet } from 'react-native'
export default StyleSheet.create({
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
    borderColor: '#ffc24d'
  },
  predictions: {
    position: 'absolute',
    top: 55,
    left: 80,
    flexDirection: 'row'
  },
  winner: {
    color: 'green',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#FFF',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    paddingRight: 8
  },
  loser: {
    color: 'red',
    alignSelf: 'flex-end',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#FFF',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    paddingRight: 8
  },
  imgBg: {
    width: '100%', 
    height: '100%'
  },
  loading: {
    position: 'absolute',
    alignSelf: 'center',
    top: 300
  },
  homeBox: {
    marginTop: 40,
    height: 180
  },
  logo: {
    height: 110,
    width: 110
  },
  awayBox: {
    height: 180
  },
  results: {
    flexDirection: 'row'
  },
  chosenTeam: {
    width: 90,
    height: 90,
    alignSelf: 'center'
  },
  checkButton: {
    color: '#ffc24d',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  }
})
