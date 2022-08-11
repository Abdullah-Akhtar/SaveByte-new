import React from 'react';
import {Text,StyleSheet} from 'react-native';
import colors from '../config/colors';
function AppText(props,style) {
    return (
        <Text style={[styles.text,style]}>{props.children}</Text>
    );
} 
const styles = StyleSheet.create({
    text:{
        fontSize:18,
        fontStyle:'normal',
        color:colors.black,
        

    }
})

export default AppText;