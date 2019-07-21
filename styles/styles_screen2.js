import { StyleSheet, Dimensions } from 'react-native'
export default StyleSheet.create({
  groupButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 45,
    width: Dimensions.get('window').width - 150,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 4,
    borderWidth: 0.5,
    flexDirection: 'row'
  },
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
  tableTxt: {
    flex: 1,
    color: '#fff',
    paddingBottom: 5
  },
  teamBox: {
    flex: 2,
    flexDirection: 'row'
  },
  logo: {
    width: 20,
    height: 20,
    alignSelf: 'center'
  },
  logoTxt: {
    color: '#fff',
    textAlign: 'center'
  },
  headerTxt: {
    flex: 1, 
    textAlign: 'center', 
    color: '#ffc24d', 
    alignSelf: 'center'
  },
  imgBg: {
    width: '100%', 
    height: '100%'
  },
  box: {
    marginTop: 25, 
    alignItems: 'center'
  },
  
})
