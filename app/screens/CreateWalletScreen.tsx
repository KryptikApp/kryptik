import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, Image, View, Button, Pressable } from 'react-native';

import React from 'react';
import colors from "../config/colors";
import { styleLanding } from "../config/styles";
import ButtonBtm from "../components/Button";

function CreateWalletScreen(props:any) {
        let x:string = "Landing Screen!";
        console.log(x);
        
        let handleGetStarted = function(){
            console.log("Create seed loop!")
        }
      
      
        return (
            <LinearGradient colors={[colors.blueMid, colors.blueLight, colors.blue]} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={styleLanding.containerText}>
                <Text style={styleLanding.textMain}>Crypto made simple, for everyone</Text>
                <Text style={styleLanding.textSubTitle}>With Kryptik, digital ownership is super simple</Text>
            </View>
            
            <ButtonBtm onPress={handleGetStarted} title="Create wallet"></ButtonBtm>
            </LinearGradient>
        );

}

export default CreateWalletScreen;
