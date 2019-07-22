import { StyleSheet, Dimensions } from 'react-native'
export default StyleSheet.create({
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
  number: {
    flex: 1,
    color: '#fff',
    paddingLeft: 5
  },
  player: {
    flex: 3,
    flexDirection: 'column'
  },
  playerImg: {
    width: 50,
    height: 50,
    alignSelf: 'center'
  },
  playerName: {
    color: '#fff',
    textAlign: 'center'
  },
  team: {
    flex: 3,
    flexDirection: 'column'
  },
  teamImg: {
    width: 50,
    height: 50,
    alignSelf: 'center'
  },
  teamName: {
    color: '#fff',
    textAlign: 'center'
  },
  score: {
    flex: 1,
    color: '#fff'
  },
  imgBg: {
    width: '100%',
    height: '100%'
  },
  padd: {
    height: 35
  },
  firstTable: {
    marginTop: 20,
    alignItems: 'center'
  },
  aTable: {
    marginTop: 60,
    alignItems: 'center'
  },
  prop1: {
    flex: 1,
    textAlign: 'center',
    color: '#ffc24d'
  },
  prop: {
    flex: 3,
    textAlign: 'center',
    color: '#ffc24d'
  }
})
