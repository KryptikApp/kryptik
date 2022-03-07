import React from 'react';
import { StyleSheet, Text, Image, View, Button, Pressable } from 'react-native';


import colors from "../config/colors";
import ButtonBtm from "../components/Button";
import Screen from "../components/Screen";

function CreateWalletScreen(props:any) {
        let x:string = "Create walllet Screen!";
        console.log(x);
        
        let handleGetStarted = function(){
            console.log("Create seed loop!")
        }
      
      
        return (
            <Screen>
            <View style={styles.containerText}>
                <Text style={styles.textTitle}>Import a Seed Phrase</Text>
                <Text style={styles.textSubTitle}>Enter your secret seed phrase here to restore your wallet</Text>
            </View>
            
            <ButtonBtm onPress={handleGetStarted} title="Import Wallet"></ButtonBtm>
            </Screen>
        );

}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#24a7ff",
      alignItems: 'center',
    },   
    textTitle: {
      fontWeight: "700",
      fontSize: 30,
      color: "white",
    },
    textSubTitle: {
      fontWeight: "500",
      fontSize: 20,
      color: "white",
      paddingRight: "40%",
    },
    containerText:{
        position: "absolute",
        top: "10%",
        paddingLeft:"4%"
    }
  });

export default CreateWalletScreen;