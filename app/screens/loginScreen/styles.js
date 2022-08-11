import { StyleSheet , Platform, StatusBar} from "react-native";
export default StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
        alignItems: 'center'

    },
    container: {
        flex: 1,
        backgroundColor: '#FDF6F6',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: 'center',
        position: 'relative'
    },
    img: {

        marginTop: 80,
        marginBottom: 20

    },
    logocontainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
        marginLeft: 38,
        paddingTop: 20,

    },
    inputcontainer: {
        flex: 1,
        alignItems: 'center'

    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: 329,
        marginVertical: 10,
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