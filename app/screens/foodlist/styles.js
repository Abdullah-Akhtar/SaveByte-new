import { StyleSheet,Dimensions } from "react-native";
export default StyleSheet.create({
    parent: {
        width: Dimensions.get('window').width / 2,
      },
      subPraent: {
        justifyContent: 'center',
        flexDirection: 'row',
      },
      productContainer: {
        borderRadius: 15,
        backgroundColor: '#f5f5f5',
        marginBottom: 15,
        height: Dimensions.get('window').width / 1.5,
        width: '90%',
      },
      lottie: {width: 90, height: 90},
      productImg: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: '100%',
        flex: 1.5,
      },
    
      productTitle: {
        color: 'white',
        fontSize: 21,
      },
      productType: {
        color: '#DA2328',
        fontSize: 15,
      },
      productSub: {
        color: '#b3b3b3',
        fontSize: 17,
        left: 10,
      },
      productPrice: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
      },
      pName: {
        color: 'black',
        fontSize: 19,
        fontWeight: '400',
      },
})