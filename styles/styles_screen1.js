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
    alignItems: 'center',
    marginBottom: 10
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
    opacity: 1
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
    marginBottom: 10
  },
  playerBox: {
    width: 120,
    height: 100,
    marginRight: 10
  },
  statRow: {
    flexDirection: 'row',
    margin: 5,
    position: 'relative'
  },
  newsTitle: {
    flex: 1,
    color: '#ffc24d',
    fontWeight: 'bold'
  },
  imageView: {
    flex: 1,
    flexDirection: 'row'
  },
  imageStyle: {
    width: 100,
    height: 75,
    alignSelf: 'center',
    marginRight: 5
  },
  imageStyle2: {
    width: 120,
    height: 90,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderWidth: 1,
    borderRadius: 8
  },
  imageText: {
    color: '#fff',
    textAlign: 'left',
    width: 250
  },
  imageText2: {
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  imgBackground: {
    width: '100%',
    height: '100%'
  },
  signOff: {
    marginRight: 20,
    marginTop: 40,
    alignSelf: 'flex-end',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6
  },
  teamsView: {
    marginTop: 0,
    height: 190
  },
  logo: {
    height: 110,
    width: 110
  },
  newsView: {
    marginTop: 20,
    alignItems: 'center'
  },
  statsBox: {
    marginTop: 0
  },
  headerStats: {
    flexDirection: 'row',
    marginBottom: 25
  },
  headerImg: {
    height: 110,
    width: 110
  },
  headerPlayers: {
    height: 150,
    flexDirection: 'row'
  },
  teamStats: {
    width: 300,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 4,
    borderWidth: 0.5,
    alignSelf: 'center'
  },
  avg: {
    flex: 1,
    textAlign: 'center',
    color: '#ffc24d',
    paddingLeft: 50
  },
  total: {
    flex: 1,
    textAlign: 'center',
    color: '#ffc24d',
    alignSelf: 'center'
  },
  textA: {
    color: '#ffc24d',
    width: 65
  },
  textB: {
    color: '#fff',
    marginLeft: 25
  },
  textC: {
    color: '#fff',
    position: 'absolute',
    left: 210
  },
  btn: {
    marginTop: 15
  },
  loading: {
    position: 'absolute',
    alignSelf: 'center',
    top: 300
  }
})
