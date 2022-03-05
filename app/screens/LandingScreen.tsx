import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, Image, View, Button, Pressable } from 'react-native';

import React from 'react';
import colors from "../config/colors";

function LandingScreen(props:any) {
        let x:string = "Landing Screen!";
        console.log(x);
        
        let handleGetStarted = function(){
            console.log("Get started!")
        }
      
      
        return (
            <LinearGradient colors={[colors.blueMid, colors.blueLight, colors.blue]}  style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.containerText}>
                <Text style={styles.textMain}>Crypto made simple, for everyone</Text>
                <Text style={styles.textSubTitle}>With Kryptik, digital ownership is super simple</Text>
            </View>
            
            <Pressable style={styles.buttonBottom} onPress={handleGetStarted}>
            <Text style={styles.textButton}>Get Started</Text>
            </Pressable>
            </LinearGradient>
        );

}

export default LandingScreen;





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#24a7ff",
    alignItems: 'center',
  },
  
  textMain: {
    fontWeight: "900",
    fontSize: 60,
    color: "white",
  },
  textSubTitle: {
    fontWeight: "500",
    fontSize: 20,
    color: "white",
    paddingRight: "40%",
  },
  buttonBottom:{
      position:"absolute",
      bottom: 40,
      width: "80%",
      height: 70,
      backgroundColor: "black",
      borderRadius: 12,
      alignItems: 'center',
    justifyContent: 'center',
  },
  textButton:{
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  containerText:{
      position: "absolute",
      top: "20%",
      paddingLeft:"4%"
  }
});