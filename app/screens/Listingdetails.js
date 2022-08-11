import React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';
import colors from '../config/colors';
import Listitems from '../component/Listitems';
function Listingdetails(props) {
    return (
       <View>
           <Image style={styles.Image} source={require('../assets/jacket.jpg')}/>
           <View style={styles.container}>
           <Text style={styles.title}>Red jacket for sale</Text>
           <Text style={styles.subtitle}>$99.99</Text>
           <Listitems
           image={require('../assets/mosh.jpg')}
           title="Saqib"
           subtitle="9 Listings"
           />           
           </View>      
       </View> 
    );
}
const styles = StyleSheet.create({
    Image:{
        width:'100%',
        height:300,
        
    },
    title:{
       fontSize:21,
       fontWeight:'bold',
       marginVertical:10
    },
    subtitle:{
        fontSize:18,
        fontWeight:"bold",
        color:colors.secondary,

    },
    container:{
        padding:10,
        margin:15

    }

})
export default Listingdetails;
