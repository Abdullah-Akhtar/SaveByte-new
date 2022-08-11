import React from 'react';
import { View,StyleSheet,FlatList,Image,Platform,StatusBar } from 'react-native';
import Listitems from '../component/Listitems';
import ListItemDeleteAction from './ListItemDeleteAction';
import Listitemseperator from './Listitemseperator';
const message=[
    {
        id:1,
        title:'T1',
        description:'D1',
        image:require('../assets/mosh.jpg')
    },
    {
        id:2,
        title:'T2',
        description:'D2',
        image:require('../assets/mosh.jpg')
    }
]
function MessagesScreen(props) {
    return (
     <View style={styles.screen}>


      <FlatList style={styles.abc}
      data={message}
      keyExtractor={message=>message.id.toString()}
      renderItem={({item})=><Listitems
      title={item.title}
      subtitle={item.description}
      image={item.image}
      onPress={()=>console.log('Tapped',item)}
      renderRightActions={ListItemDeleteAction}   
       
      />}
      ItemSeparatorComponent={Listitemseperator}
      />
      
      </View>
    );
}
const styles = StyleSheet.create({
screen:{
        marginTop:Platform.OS==='android' ? StatusBar.currentHeight : 0
    }
})
export default MessagesScreen;