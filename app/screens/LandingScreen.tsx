import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, Image, View, Button, Pressable } from 'react-native';
import { Link } from 'react-router-dom'

import React from 'react';
import colors from "../config/colors";
import { styleLanding } from "../config/styles";

function LandingScreen(props:any) {
        let x:string = "Landing Screen!";
        console.log(x);
        
        let handleGetStarted = function(){
            console.log("Get started!");
        }
      
      
        return (
            <LinearGradient colors={[colors.blueMid, colors.blueLight, colors.blue]}  style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={styleLanding.containerText}>
                <Text style={styleLanding.textMain}>Crypto made simple, for everyone</Text>
                <Text style={styleLanding.textSubTitle}>With Kryptik, digital ownership is super simple</Text>
            </View>
            
            <Link to="CreateWalletScreen">
            <Pressable style={styleLanding.buttonBottom} onPress={handleGetStarted}>
            <Text style={styleLanding.textButton}>Get Started</Text>
            </Pressable>
            </Link>
            </LinearGradient>
        );

}

export default LandingScreen;



