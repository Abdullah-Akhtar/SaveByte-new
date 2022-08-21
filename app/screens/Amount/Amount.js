import React, {useState, useEffect} from 'react';
import style from './style';

import {
  Text,View,ActivityIndicator,SafeAreaView,ScrollView,Platform,StatusBar
} from 'react-native';

function Amount({navigation}) {
  const list = [
    {
      key: '1',
      amount: '1000',
    },
    {
      key: '2',
      amount: '5000',
    },
  ];
  const OrderHistory = () => {
    return list.map((item, index) => {
      return (
        <View key={index}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={{fontSize: 14, color: 'grey'}}>amount</Text>
            <Text style={{fontSize: 14, fontWeight: '600', color: '#000'}}>
              {item.amount}
            </Text>
          </View>
        </View>
      );
    });
  };

  return (
    <View 
      style={{
        flex: 1,
        backgroundColor: '#FDF6F6',
        marginTop:Platform.OS==='android' ? StatusBar.currentHeight : 0,
      }}>
      <View
        style={{
          width: '100%',
          alignSelf: 'center',
          marginTop: 10,
          marginBottom: 10,
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            color: 'rgba(252, 133, 133, 0.45)',
            fontSize: 26,
            fontWeight: '800',
            alignSelf:'center'
            }}>
          My Donation
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: '5%'}}
        style={{marginTop: '2%'}}>
        {OrderHistory()}
      </ScrollView>
    </View>
  );
}

export default Amount;
