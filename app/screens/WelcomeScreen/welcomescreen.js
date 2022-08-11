import React from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import AppButton from "../../component/AppButton";
import colors from "../../config/colors";
function Welcomescreen(props) {
  return (
    <View style={styles.background}
    // blurRadius={3}
    // style={styles.background}
    // source={require("../assets/first.jpg")}
    >
      <View styles={{position:'absolute',top:0,left:0,flex:1}}>
    <Image 
    source={require('../assets/upperdesign.png')}
    
    ></Image>
    </View>







      <View style={styles.logocontainer}>
        <Image
          style={styles.logo}
          source={require("../assets/icons/ws.png")}
        ></Image>
        <Text style={{paddingTop:20,fontWeight:'bold'}}>Welcome to Save Byte</Text>
      </View>

      <View style={styles.textcont}>
        <Text>abdj djhsj jgc jgdb  gujbc ydb hd sdy djhwd bdus  uwg dbuwdm djwdw dbw snvdvwd wbnd vwehd hw ebd</Text>
      </View>
      <View style={styles.buttoncontainer}>
        <AppButton title={"Get Started"} color="secondary"></AppButton>
        {/* <AppButton title={'Register'} color="secondary"></AppButton> */}
      </View>
    </View>
  );
}

export default Welcomescreen;
