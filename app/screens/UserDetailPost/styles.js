import { StyleSheet, Platform, StatusBar } from "react-native"
export default StyleSheet.create({
   container: {
        //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingTop:Platform.OS=== 'android' ? StatusBar.currentHeight:0,
        flex: 1,
        backgroundColor: '#FDF6F6',
        alignItems: 'center',
        position: 'relative',
        marginTop:20
    },
    
    // img: {

    //     marginTop: 20,
    //     marginBottom: 20

    // },
    logocontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:0,
        marginTop:0

    },
    
    inputcontainer: {
        flex: 1,
        alignItems: 'center'

    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: 329,
        marginVertical: 8,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white'
    }, btncontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0

    },

})