import React,{useState} from 'react';
import { View,TextInput,StyleSheet,Platform,StatusBar, Button, Modal,TouchableWithoutFeedback} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppText from './AppText';

function AppPicker({icon,placeholder,...otherProps}) {
    const[modalVisible, setModalVisible]=useState(false);
    return (
        <>
        <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
        <View style={styles.container}>
         {icon && <MaterialCommunityIcons name={icon} size={28}
         style={{marginRight:10 }}
         />}
            <AppText style={styles.text}>{placeholder},</AppText>
            <MaterialCommunityIcons  style={styles.chevron}
            name='chevron-down' 
            size={28}
            color='black'
            />
        </View> 
        </TouchableWithoutFeedback>
        <Modal  visible={modalVisible} animationType='slide'></Modal>
        <View style={styles.screen} >
        <Button title='close' onPress={()=>setModalVisible} />

        </View>
        </>
    );
}
const styles = StyleSheet.create({
    
    
    chevron:{
        position:'absolute',
        top:10,
        right:10

    },
    container:{
        backgroundColor:"#f8f4f4",
        borderRadius:25,
        flexDirection:'row',
        width:'100%',
        padding:15,
        marginVertical:10,
    },
    textInput:{
        fontSize:18,
        fontFamily:Platform.OS==='android' ? "Roboto": "Avenir",
    },
    text:{
        flex:1,
    },
    screen:{
        paddingTop:Platform.OS==='android' ? StatusBar.currentHeight:0
      }
    
})
export default AppPicker;