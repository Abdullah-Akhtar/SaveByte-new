import React from 'react';
import { StyleSheet,View } from 'react-native';

function Listitemseperator(props) {
    return (
     <View style={styles.seperator}></View> 
    );
}
const styles = StyleSheet.create({
    seperator:{
        width:'100%',
        height:1,
        backgroundColor:"#f8f4f4"
        
    },
})
export default Listitemseperator;