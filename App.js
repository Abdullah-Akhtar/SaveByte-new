import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet,Platform, Text, View } from 'react-native';
import FoodList from './app/screens/foodlist/FoodList'
import LoginScreen from './app/screens/loginScreen/LoginScreen';
import RegisterSignUp from './app/screens/RegisterScreen/RegisterSignUp';
export default function App() {
  return (
    <View  style={styles.container}>

    
      <RegisterSignUp/>

    </View>
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
