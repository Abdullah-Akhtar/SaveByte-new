import React from 'react';
import { StatusBar,Platform,StyleSheet,Image,Button, TouchableWithoutFeedback,View } from 'react-native';
import{MaterialCommunityIcons}  from '@expo/vector-icons'
function Viewimage(props) {
    return (
        <View style={styles.container}>

        
        <View style={styles.one}>
        <TouchableWithoutFeedback onPress={()=>console.log('Close Button pressed')} >
         <MaterialCommunityIcons name='close' color={'white'} size={35}/>  
         </TouchableWithoutFeedback>z
        </View>
       

        <View style={styles.two}>
            <MaterialCommunityIcons name='trash-can-outline' color={'white'} size={35}/>            
        </View>
       <Image resizeMode='contain' style={styles.image} source={require('../assets/scnd.jpg')}/> 
        </View>
    
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#000',
        flex:1, 
        paddingTop:Platform.OS==='android'? StatusBar.currentHeight :0,
    },
    image:{
        width:'100%',
        height:'100%',
    },
    one:{
        position:'absolute',
        top:70,
        left:35
    },
    two:{
        position:'absolute',
        top:70,
        right:35  
    }
})
export default Viewimage;