import React from 'react';
import {
  FlatList,
  StatusBar,
  Dimensions,
  Text,
  Pressable,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import style from './style';

const Charity = ({navigation}) => {

  //we use static list here but we have to use this by our database
  const list = [
    {
      id: 1,
      title: 'Johnson',
      subTitle: 'Hi! I am a charity',
      requirement:
        'I want 500 Rupees and some food to eat because i am in need of food i need to donate food to the needy people among the people who are in need of food',

      img: require('../../assets/man2.jpg'),
      number: '+1 (917) 585-3258',
      requiredMoney: 10000,
    },
    {
      id: 2,
      title: 'Harry Samit',
      subTitle: 'Hi! I am a charity',
      requirement:
        'I want 500 Rupees and some food to eat because i am in need of food i need to donate food to the needy people among the people who are in need of food',

      img: require('../../assets/man2.jpg'),
      number: '+1 (917) 585-3258',
      requiredMoney: 10000,
    },
    {
      id: 3,
      title: 'Hamza Rajput',
      subTitle: 'Hi! I am a charity',
      number: '+1 (917) 585-3258',
      requirement:
        'I want 500 Rupees and some food to eat because i am in need of food i need to donate food to the needy people among the people who are in need of food',

      img: require('../../assets/man2.jpg'),
      requiredMoney: 10000,
    },
    {
      id: 4,
      title: 'John Walton',
      subTitle: 'Hi! I am a charity',
      requirement:
        'I want 500 Rupees and some food to eat because i am in need of food i need to donate food to the needy people among the people who are in need of food',

      number: '+1 (917) 585-3258',
      img: require('../../assets/man2.jpg'),
      requiredMoney: 10000,
    },
    {
      id: 5,
      title: 'Merry An',
      subTitle: 'Hi! I am a charity',
      number: '+1 (917) 585-3258',
      requirement:
        'I want 500 Rupees and some food to eat because i am in need of food i need to donate food to the needy people among the people who are in need of food',

      img: require('../../assets/man2.jpg'),
      requiredMoney: 10000,
    },
    {
      id: 6,
      title: 'John Wick',
      subTitle: 'Hi! I am a charity',
      number: '+1 (917) 585-3258',
      requirement:
        'I want 500 Rupees and some food to eat because i am in need of food i need to donate food to the needy people among the people who are in need of food',

      img: require('../../assets/man2.jpg'),
      requiredMoney: 10000,
    },
    {
      id: 7,
      title: 'Ali Ahmed',
      subTitle: 'Hi! I am a charity',
      number: '+1 (917) 585-3258',
      requirement: 'I want 5000 Rupees and some food to eat ',
      img: require('../../assets/man2.jpg'),
      requiredMoney: 10000,
    },
    {
      id: 8,
      title: 'Saqib Raza',
      subTitle: 'Hi! I am a charity',
      number: '+1 (917) 585-3258',
      requirement: 'I want 11000 Rupees and some food to eat ',
      img: require('../../assets/man2.jpg'),
      requiredMoney: 10000,
    },
    //ending of static list
  ];

  const renderData = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            navigation.navigate('Details', {Item: item});
          }}
          style={style.parent}>
          <View style={style.child}>
            <FastImage
              resizeMode={FastImage.resizeMode.cover}
              source={item.img}
              style={style.profileImg}
            />
            <View style={style.childTwo}>
              <Text style={style.title}>{item.title}</Text>
              <Text style={style.subTitle}>{item.subTitle}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const listData = () => {
    return (
      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={renderData}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <Text
            style={{
              color: 'black',
              fontSize: 25,
              alignSelf: 'center',
              marginTop: 20,
              marginBottom: 20,
              fontWeight: '600',
            }}>
            Charity Pool
          </Text>
        )}
        ListFooterComponent={<View />}
      />
    );
  };

  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      {listData()}
    </View>
  );
};
export default Charity;
