import { StyleSheet, View,StatusBar,FlatList, Pressable } from 'react-native'
import React from 'react'
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';
import styles from './styles'
import style from '../Charityanddetails/style';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';
//import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
export default function UserDetails() {
  const List = [
    {
      id: 1,
      fullName:'Muhammad Saqib',
      phone: '0323-1482468',
      email: 'saqib@gmail.com',
     // country: 'Pakistan',
      city: 'Lahore',
      image: require('../../assets/man2.jpg'),
    },
  ];
  const listData = () => {
    return (
      <FlatList 
        data={List}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={renderData}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <TouchableRipple  onPress={()=>{}}>
            <View style={{flexDirection:'row-reverse',padding:18,}}>
              <Text style={{fontSize:20,fontWeight:'bold',}}>Logout</Text>
              <Icon name='logout' color={'#FF6347'} size={30}/>
            </View>
          </TouchableRipple>
  
          // <Text
          //   style={{color: 'black',fontSize: 25, alignSelf: 'center',marginTop:5,marginBottom: 5,fontWeight: '600',  }}>
          //   Logout
          // </Text>
          
        )}
        ListFooterComponent={<View />}
      />
    );
  };
  const renderData = ({ item, index }) => {
    return (
      <View style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Avatar.Image
              source={item.image}
              size={80}
            />
            <View style={{ marginLeft: 20 }}>
              <Title style={[styles.title, {
                marginTop: 15,
                marginBottom: 5
              }]}>{item.fullName}</Title>
              <Caption style={styles.caption}>{item.id}</Caption>
            </View>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name='city' color={'#777777'} size={22}/>
            <Text style={{ color: '#777777', marginLeft: 20,fontSize:20 }}>{item.city}</Text>
          </View>
          {/* <View style={styles.row}>
            <Icon name='earth' color={'#777777'}  size={22} />
            <Text style={{ color: '#777777', marginLeft: 20,fontSize:20,fontWeight:'400' }}>Pakistan</Text>
          </View> */}
          <View style={styles.row}>
            <Icon name='phone' color={'#777777'}  size={22} />
            <Text style={{ color: '#777777', marginLeft: 20,fontSize:20,fontWeight:'400' }}>{item.phone}</Text>
          </View>
          <View style={styles.row}>
            <Icon name='email-variant' color={'#777777'}  size={22} />
            <Text style={{ color: '#777777', marginLeft: 20,fontSize:20,fontWeight:'400' }}>{item.email}</Text>
          </View>
  
          <TouchableRipple onPress={()=>{}}>
            <View style={styles.menuItem}>
              <Icon name='heart-outline' color={'#FF6347'} size={30}/>
              <Text style={styles.menuItemText}>Your Favorities</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={()=>{}}>
            <View style={styles.menuItem}>
              <Icon name='share-outline' color={'#FF6347'} size={30}/>
              <Text style={styles.menuItemText}>Tell you friends</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={()=>{}}>
            <View style={styles.menuItem}>
              <Icon name='account-check-outline' color={'#FF6347'} size={30}/>
              <Text style={styles.menuItemText}>Support</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={()=>{}}>
            <View style={styles.menuItem}>
              <AntDesign name="setting" size={30} color={'#FF6347'} />
              <Text style={styles.menuItemText}>Setting</Text>
            </View>
          </TouchableRipple>  
        </View>
  
      </View>
    );
    };
  return (
    <View style={{backgroundColor: '#FDF6F6', flex: 1,position:'relative'}}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      {listData()}
    </View>
  );

  

}

