import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet,Platform, Text, View } from 'react-native';
import Charity from './app/screens/Charityanddetails/Charity';
import FoodList from './app/screens/foodlist/FoodList'
import LoginScreen from './app/screens/loginScreen/LoginScreen';
import RegisterSignUp from './app/screens/RegisterScreen/RegisterSignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharityDetails from './app/screens/Charityanddetails/CharityDetails';
import FoodListUpload from './app/screens/foopost/FoodListUpload'

import MapScreen from './app/screens/Location/MapScreen';
import UserDetailpost from './app/screens/UserDetailPost/UserDetailpost';
// import CharityDetails from './app/screens/Charityanddetails/CharityDetails'
const Stack = createNativeStackNavigator();
export default function App() {
  return (

  //   <NavigationContainer>
  //   <Stack.Navigator>
  //     <Stack.Screen name="Charity" component={Charity} />
  //     <Stack.Screen name="CharityDetails" component={CharityDetails} />
  //   </Stack.Navigator>
  // </NavigationContainer>
  
//<Details/>
//  /<MapScreen/> 
<FoodListUpload/>


  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:Platform.OS==='android' ? StatusBar.currentHeight : 0, 
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:50,    
  },
});
