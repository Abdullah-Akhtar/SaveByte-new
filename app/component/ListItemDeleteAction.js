import React from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { View,StyleSheet } from 'react-native';
function ListItemDeleteAction(props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name='trash-can' color={'black'} size={20}></MaterialCommunityIcons>
            </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ff5252",
        width:70
    }
})
export default ListItemDeleteAction;