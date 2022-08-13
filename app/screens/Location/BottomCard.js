import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Modal,
  Dimensions,
  Animated,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BottomCard = props => {
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          props.CloseModal();
        }}
        visible={props.modalVisible}>
        <View style={styles.containerr}>
          <View style={styles.blackContainer}>
            <View style={styles.bar} />
            <View style={styles.blackSubContainer}>
              <Text style={styles.title}>{props.personFood} Persons Food</Text>

              <Text style={styles.subTitle}>
                Food Food Food Food Food Food Food Food Food Food Food Food Food
                Food Food Food Food Food Food Food Food Food Food Food Food Food
                Food Food Food Food Food Food Food Food Food Food
              </Text>
            </View>
          </View>
          <View style={styles.whiteContainer}>
            <View style={styles.parent}>
              <View style={styles.child}>
                <Image
                  source={require('../../assets/man2.jpg')}
                  style={styles.profileImg}
                />
                <View style={styles.childTwo}>
                  <Text style={styles.titlee}>{props.name}</Text>
                  <Text style={styles.subTitlee}>Lorem.... </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                <MaterialIcons name="message" size={28} color="green" />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                <MaterialIcons name="call" size={28} color="green" />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                <MaterialIcons name="navigation" size={28} color="green" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};
export default BottomCard;
const styles = StyleSheet.create({
  blackSubContainer: {
    flex: 1,

    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bar: {
    height: 4,
    width: 40,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  whiteContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '100%',
  },
  blackContainer: {
    flex: 1.5,
    backgroundColor: 'black',
    alignItems: 'center',
    width: '100%',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },
  containerr: {
    width: '100%',
    backgroundColor: 'green',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    height: 290,
  },

  passwordContainer: {
    marginTop: '10%',
    flexDirection: 'row',
    backgroundColor: '#F6F3F5',
    borderRadius: 25,
    padding: 12,
    width: '80%',
    height: 45,
    alignItems: 'center',
    alignSelf: 'center',
  },
  TiName: {
    fontFamily: 'RobotoSlab-Bold',
    width: '90%',
    height: 50,
    marginLeft: 6,
  },
  loginBtn: {
    marginTop: '5%',
    backgroundColor: 'red',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 44,
    width: '70%',
    height: 48,
  },

  okBtnTxt: {
    fontSize: 17,
    fontWeight: '700',
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 19,
    fontWeight: '500',
  },
  subTitle: {
    color: 'white',
    fontSize: 13,
    fontWeight: '300',
  },
  parent: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 15,
  },
  btn: {
    marginTop: 7,
    borderRadius: 7,
    width: 100,
    paddingVertical: 3,
    backgroundColor: '#fac143',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
  },
  subPraent: {
    justifyContent: 'center',
    flexDirection: 'row',
  },

  lottie: {width: 90, height: 90},
  profileImg: {
    width: 40,
    height: 40,
    borderTopLeftRadius: 40 / 2,
  },
  child: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  childTwo: {
    left: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  subContainOne: {
    alignSelf: 'center',
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  subContainTwo: {
    left: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titlee: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  subTitlee: {marginTop: 2, color: 'grey', fontSize: 12},
  profileTwoImg: {
    width: 120,
    height: 120,
    borderTopLeftRadius: 120 / 2,
  },
  progressBarContain: {
    width: '70%',
    borderRadius: 30,
    alignSelf: 'center',
    height: 30,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#f5f5f5',
  },
  progressBar: {
    width: '50%',
    borderRadius: 30,
    alignSelf: 'flex-start',
    height: 30,
    alignItems: 'center',
    backgroundColor: '#fac143',
  },
});
