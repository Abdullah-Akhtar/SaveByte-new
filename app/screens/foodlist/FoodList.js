import React, {useState, useRef, useEffect} from 'react';
import {Dimensions,StyleSheet} from 'react-native';
import {
  FlatList,
  StatusBar,
  Text,
  Pressable,
  Image,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const FoodList = ({navigation}) => {
  //static list later we use it through our database
  const list = [
    {
      id: 1,
      name: 'Pizza',
      price: '220',
      time: '40',
      rating: 4.5,
      img: require('../../assets/bb.jpg'),
    },
    {
      id: 2,
      name: 'Burger',
      price: '100',
      time: '60',
      rating: 4.5,
      img: require('../../assets/br.jpg'),
    },
    {
      id: 3,
      name: 'Fries',
      price: '100',
      rating: 4.5,
      time: '30',
      img: require('../../assets/bb.jpg'),
    },
    {
      id: 4,
      name: 'Chicken',
      price: '140',
      rating: 4.5,
      time: '25',
      img: require('../../assets/br.jpg'),
    },
    {
      id: 5,
      name: 'Chicken',
      price: '140',
      rating: 4.5,
      time: '60',
      img: require('../../assets/bb.jpg'),
    },
    {
      id: 6,
      name: 'Chicken',
      price: '140',
      rating: 4.5,
      time: '30',
      img: require('../../assets/br.jpg'),
    },
    {
      id: 7,
      name: 'Chicken',
      price: '140',
      rating: 4.5,
      time: '45',
      img: require('../../assets/bb.jpg'),
    },
    {
      id: 8,
      name: 'Chicken',
      price: '140',
      rating: 4.5,
      time: '10',
      img: require('../../assets/br.jpg'),
    },
  ];

  const renderMenu = ({item, index}) => {
    return (
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate('Charity', {Item: item});
          }}
          style={styles.parent}>
          <View style={styles.subPraent}>
            <View style={styles.productContainer}>
              <View
                style={{
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                  flex: 0.8,
                }}>
                <Image
                  resizeMode={Image.resizeMode.cover}
                  source={item.img}
                  style={styles.productImg}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  backgroundColor: '#ffffff',
                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.pName}>{item.name}</Text>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-evenly',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <MaterialCommunityIcons
                      name="clock-time-four-outline"
                      size={20}
                      color="#fdc444"
                    />
                    <Text
                      ellipsizeMode="tail"
                      numberOfLines={2}
                      style={styles.productSub}>
                      {item.time}min
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Ionicons name="star" size={20} color="#fdc444" />
                    <Text style={styles.productSub}>{item.rating}</Text>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: '#f6f6f6',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80%',
                    paddingVertical: 5,
                  }}>
                  <Text style={styles.productPrice}>Rs.{item.price}</Text>
                </View>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
    );
  };

  const MenuList = () => {
    return (
      <FlatList
        data={list}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={renderMenu}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <Text
            style={{
              color: 'black',
              fontSize: 25,
              alignSelf: 'center',
              marginTop: 20,
              fontWeight: '600',
              marginBottom: 20,
            }}>
            Food List
          </Text>
        )}
        ListFooterComponent={<View />}
      />
    );
  };

  return (
    <View style={{backgroundColor: '#f5f5f5', flex: 1}}>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
      {MenuList()}
    </View>
  );
};

  

export default FoodList;
