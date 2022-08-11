import { StyleSheet , Platform, StatusBar} from "react-native";
export default StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'primary',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        // justifyContent: "flex-end",
        // alignItems: "center",
    
      },
      logocontainer: {
        top: 250,
        position: "absolute",
        alignItems: "center",
      },
      logo: {
        height: 277,
        width: 350,
    
        // position:'absolute',
        // top:90,
      },
    
      buttoncontainer: {
        padding: 20,
        width: '90%',position:'absolute',
        top:'80%',
    
      },
      register: {
        width: "100%",
        height: 70,
        backgroundColor: "gold",
      },
      textcont:{
       
        justifyContent:'center',
        padding:20,
        position:'absolute',
        top:'65%',
        textAlign:'center'
    
      }
})