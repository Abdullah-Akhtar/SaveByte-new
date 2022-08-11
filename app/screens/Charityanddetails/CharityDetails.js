import React, {useState, useRef, useEffect} from 'react';
import {
  FlatList,
  StatusBar,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';

function CharityDetails({route, navigation}) {
  //ye sb list apni database se ain gi bs static rakhi hui inka use nahi ha
  const list = [
    {
      id: 1,
      title: 'Mike Johnson ',
      money: '20,000',
      img: require('../../assets/man2.jpg'),
    },
    {
      id: 2,
      title: 'Harry Samit',
      money: '40,000',
      img: require('../../assets/man2.jpg'),
    },
    {
      id: 3,
      title: 'Hamza Rajput',
      money: '70,000',
      img: require('../../assets/man2.jpg'),
    },
    {
      id: 4,
      title: 'John Walton',
      money: '20,000',
      img: require('../../assets/man2.jpg'),
    },
    {
      id: 5,
      title: 'Merry An',
      money: '20,000',
      img: require('../../assets/man2.jpg'),
    },
    {
      id: 6,
      title: 'John Wick',
      subTitle: 'Hi! I am a charity',
      money: '20,000',
      img: require('../../assets/man2.jpg'),
    },
    {
      id: 7,
      title: 'Ali Ahmed',
      money: '80,000',
      img: require('../../assets/man2.jpg'),
    },
    {
      id: 8,
      title: 'Saqib Raza',
      money: '20,000',
      img: require('../../assets/man2.jpg'),
    },
  ];

  const renderData = ({item, Item, index}) => {
    return (
      <View>
        <View
          activeOpacity={0.6}
          onPress={() => {}}
          style={[style.parent, {width: '90%'}]}>
          <View style={style.child}>
            <Image
              //resizeMode={Image.resizeMode.cover}
              Use resizeMode='cover'
              source={item.img}
              style={style.profileImg}
            />
            <View style={style.childTwo}>
              <Text style={style.title}>{item.title}</Text>
              <Text style={[style.subTitle, {color: 'grey'}]}>
                {item.money} PKR
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const listData = () => {
    const {Item} = route.params;
    return (
      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={renderData}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <>
            <AntDesign
              onPress={() => navigation.goBack()}
              style={{left: 10, top: 10}}
              name="arrowleft"
              size={27}
              color="black"
            />
            <View style={style.subContainOne}>
              <Image
                //resizeMode={Image.resizeMode.cover}
                Use resizeMode='cover'
                source={Item.img}
                style={style.profileTwoImg}
              />
              <View style={style.subContainTwo}>
                <Text style={style.title}>{Item.title}</Text>
                <Text style={style.subTitle}>{Item.number}</Text>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    alert('Donate');
                  }}
                  style={style.btn}>
                  <Text style={style.btnTxt}>Donate</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={{alignSelf: 'center', marginTop: 14, width: '90%'}}>
              {Item.requirement}
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                color: 'black',
                fontSize: 18,
                fontWeight: '600',
                marginTop: 14,
              }}>
              {Item.requiredMoney} PKR
            </Text>

            <View style={style.progressBarContain}>
              <View style={style.progressBar} />
            </View>

            <Text
              style={{
                alignSelf: 'center',
                color: 'black',
                fontSize: 18,
                fontWeight: '600',
                marginTop: 14,
              }}>
              55%
            </Text>
          </>
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
}
export default CharityDetails;
