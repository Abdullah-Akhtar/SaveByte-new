import React, {useState, useEffect, useCallback, useRef} from 'react';
import {PermissionsAndroid, Text, View, StyleSheet} from 'react-native';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import * as Location from 'expo-location'
import BottomCard from './BottomCard';

const MapScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [personFood, setPersonFood] = useState('');
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const List = [
    {
      id: 1,
      location: 'Kathmandu',
      personFood: 10,
      subTitleFood:
        'Food Food Food Food Food Food Food Food Food Food Food Food Food  Food Food Food Food Food Food Food Food Food Food Food Food Food',
      name: 'Hamza Rajput',
      subTitleUser: 'Loremm ..',
      lat: 31.582045,
      long: 74.329376,
    },
    {
      id: 2,
      location: 'Pokhara',
      personFood: 20,
      subTitleFood:
        'Food Food Food Food Food Food Food Food Food Food Food Food Food  Food Food Food Food Food Food Food Food Food Food Food Food Food',
      name: 'Ahmed Naeem',
      subTitleUser: 'Loremm ..',
      lat: 31.4669,
      long: 74.3159,
    },

    {
      id: 3,
      location: 'Bhaktapur',
      personFood: 30,
      subTitleFood:
        'Food Food Food Food Food Food Food Food Food Food Food Food Food  Food Food Food Food Food Food Food Food Food Food Food Food Food',
      name: 'Ali Hamza',
      subTitleUser: 'Loremm ..',
      lat: 31.5525,
      long: 74.3653,
    },
    {
      id: 4,
      location: 'Bhaktapur',
      personFood: 50,
      subTitleFood:
        'Food Food Food Food Food Food Food Food Food Food Food Food Food  Food Food Food Food Food Food Food Food Food Food Food Food Food',
      name: 'Saqib Raza',
      subTitleUser: 'Loremm ..',
      lat: 31.5681,
      long: 74.3954,
    },
  ];

  useEffect(() => {
    getLocation();
  }, []);

  // const requestLocationPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       {
  //         title: 'Location Permission',
  //         message: 'Mr.Fix needs access to your location',
  //       },
  //     );

  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       _getCurrentLocation();
  //       console.log('Location permission granted');
  //     } else {
  //       console.log('Location permission denied');
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  // const _getCurrentLocation = () => {
  //   Geolocation.getCurrentPosition(
  //     position => {
  //       setLat(position.coords.latitude);
  //       setLong(position.coords.longitude);
  //       console.log('location:' + lat, long);
  //     },
  //     error => {
  //       console.log(error);
  //     },
  //     {
  //       enableHighAccuracy: false,
  //       timeout: 2000,
  //       maximumAge: 3600000,
  //     },
  //   );
  // };


  const getLocation = async() => {
    const  {granted}=await Location.requestForegroundPermissionsAsync();
    if(!granted) return;
    const {coords:{latitude,longitude}}=await Location.getCurrentPositionAsync();
    // setLocation({latitude,longitude})
    setLat(latitude);
   setLong(longitude);

}
  const CloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: lat ? lat : 0,
          longitude: long ? long : 0,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {List.map(item => (
          <Marker
            onPress={() => {
              setPersonFood(item.personFood);
              setName(item.name);
              setModalVisible(true);
            }}
            key={item.id}
            coordinate={{
              latitude: item.lat,
              longitude: item.long,
            }}
            //pinColor="#FFFFFF"
            image={require('./../../assets/HomeMarker1.png')}>
            <Callout>
              <Text> Location</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <BottomCard
        modalVisible={modalVisible}
        CloseModal={CloseModal}
        personFood={personFood}
        name={name}
      />
    </View>
  );
};

export default MapScreen;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000aa',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
