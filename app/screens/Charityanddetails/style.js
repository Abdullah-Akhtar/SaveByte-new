import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    marginTop: 10,
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
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
  },
  child: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
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
  title: {
    color: 'black',
    fontSize: 19,
    marginBottom: 2,
    fontWeight: '500',
  },
  subTitle: {marginTop: 2, color: 'black', fontSize: 13},
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
