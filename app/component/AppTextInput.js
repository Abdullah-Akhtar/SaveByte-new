import React from 'react';
import { View,TextInput,StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Platform,StatusBar } from 'react-native';
import colors from '../config/colors';
function AppTextInput({icon,...otherProps}) {
    return (
        <View style={styles.container}>
         {icon && <MaterialCommunityIcons name={icon} size={28}
         style={{marginRight:10 }}
         />}
            <TextInput style={styles.textInput} {...otherProps}
            />


        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        borderRadius:25,
        flexDirection:'row',
        width:'70%',
        padding:8,
        marginVertical:10,
        
        
    },
    textInput:{
        fontSize:18,
        fontFamily:Platform.OS==='android' ? "Roboto": "Avenir",
    }
    
})
export default AppTextInput;