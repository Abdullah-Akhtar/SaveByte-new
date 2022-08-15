import { StyleSheet } from "react-native"
import { Platform, StatusBar } from "react-native"
export default StyleSheet.create({
    container:{
        flex:1,
        // alignItems:'center',
        // justifyContent:'center',
        backgroundColor: '#FDF6F6',
        // marginTop:Platform.OS==='android' ? StatusBar.currentHeight:0

    },
    userInfoSection:{
        paddingHorizontal:30,
        marginBottom:25
    },
    title:{
        fontSize:24,
        fontWeight:'bold'
    },
    caption:{
        fontSize:14,
        lineHeight:14,
        fontWeight:'500'
    },
    row:{
        flexDirection:'row',
        marginVertical:12,
    },
    infoBoxWrapper:{
        borderBottomColor:'#dddddd',
        borderTopColor:'#dddddd',
        borderBottomWidth:1,
        borderTopWidth:1,
        flexDirection:'row',
        height:100

    },
    infoBox:{
        width:'50%',
        alignItems:'center',
        justifyContent:'center'
    },
    menuWrapper:{
        marginTop:10,
    },
    menuItem:{
        flexDirection:"row",
        paddingVertical:15,
       // paddingHorizontal:'',
    },
    menuItemText:{
        color:'#777777',
        marginLeft:20,
        fontWeight:'600',
        fontSize:16,
        lineHeight:26
    },


    ////editDetails styling start
    
})