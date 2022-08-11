import React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';
function Card({title,subtitle,image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
           <View style={styles.dcon}>
            <Text style={styles.title}>{title}</Text>
            <Text>{subtitle}</Text>
           </View>

        </View>
    );
}
const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:'#fff',
        marginBottom:20,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:200,
    },
    dcon:{
        padding:20,
    
    },
    title:{
        marginBottom:7,
        color:'red'

    }
})

export default Card;