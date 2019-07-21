import { StyleSheet, Dimensions } from 'react-native'
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
      }
    })