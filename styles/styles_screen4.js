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
      }
    })