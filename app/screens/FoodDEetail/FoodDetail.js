import React, {useState, useEffect} from 'react';
import style from './style';

import {
  Text,
  View,
  ActivityIndicator,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';

function FoodDetail({navigation}) {
  const detail = () => {
    return (
      <View style={{paddingHorizontal: '5%'}}>
        <Image
          style={{width: 100, height: 100, alignSelf: 'center'}}
          source={{uri: item.image}}
        />
        <Text style={{fontSize: 14, color: 'grey'}}>Title</Text>
        <Text style={{fontSize: 14, fontWeight: '600', color: '#000'}}>
          Type
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: '5%',
          marginBottom: 10,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 26,
            fontWeight: '800',
          }}>
          Food detail
        </Text>
        <View>
          <Image
            style={{width: 50, height: 50, borderRadius: 50 / 2}}
            source={{uri: item.image}}
          />
        </View>
        <Text
          style={{
            color: 'white',
            fontSize: 26,
            fontWeight: '800',
          }}></Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: '5%'}}
        style={{marginTop: '2%'}}>
        {detail()}
      </ScrollView>
    </SafeAreaView>
  );
}

export default FoodDetail;
