import React from 'react';
import {View,Image,Text,StyleSheet,onPress,TouchableHighlight} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AppText from './AppText';
function Listitems({title,subtitle,image,onPress,renderRightActions}) {
    return (
          
        
        
        <TouchableHighlight 
        underlayColor={"#f8f4f4"}
        onPress={onPress}>
            <Swipeable renderRightActions={renderRightActions}>
        <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        </View>
        </Swipeable>
        </TouchableHighlight>
      
          
 
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingTop:12.5
    
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight:10,
        
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        marginVertical:7


    },
    subtitle:{
        color:"gray"

    }
})
export default Listitems;