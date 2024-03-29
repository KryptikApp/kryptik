import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, Image, View, Button, Pressable } from 'react-native';

import React from 'react';
import colors from "../config/colors";
import ButtonBtm from "../components/Button";
import AppText from "../components/Text";
import { Link } from "@react-navigation/native";

function CreateWalletScreen(props:any) {
        let x:string = "Create walllet Screen!";
        console.log(x);
        
        let handleCreateWallet = function(){
            console.log("Create seed loop!")
        }
        let handleImporteWallet = function(){
          console.log("import wallet")
        }
      
        return (
            <LinearGradient colors={[colors.blueMid, colors.blueLight, colors.blue]} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.containerText}>
                <Text style={styles.textMain}>Crypto made simple, for everyone</Text>
                <Text style={styles.textSubTitle}>With Kryptik, digital ownership is super simple</Text>
            </View>
            <View style={styles.buttonsContainer}>
              <ButtonBtm onPress={handleCreateWallet} title="Create wallet"></ButtonBtm>
              <Link style={styles.textAlternate} to={{ screen: 'ImportWalletScreen'}}>
                Import Existing Wallet
              </Link>
            </View>
            </LinearGradient>
        );

}



const styles = StyleSheet.create({
    buttonsContainer: {
      padding: 20,
      width: "100%",
      position: "absolute",
      bottom: 20,
      alignItems:'center'
    },
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
    textAlternate:{
      fontSize: 16,
      color: "white",
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

export default CreateWalletScreen;
