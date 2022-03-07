import React from 'react';
import { StyleSheet, Text, Image, View, Button, Pressable } from 'react-native';


import colors from "../config/colors";
import Screen from "../components/Screen";
import AppButton from '../components/Button';

function CreateWalletScreen(props:any) {
        let x:string = "Create walllet Screen!";
        console.log(x);
        
        let handleGetStarted = function(){
            console.log("Create seed loop!")
        }
      
      
        return (
            <>
            <View style={styles.containerText}>
                <Text style={styles.textTitle}>Import a Seed Phrase</Text>
                <Text style={styles.textSubTitle}>Enter your secret seed phrase here to restore your wallet</Text>
            </View><View style={styles.buttonsContainer}>
                    <AppButton onPress={handleGetStarted} title="Import Wallet"></AppButton>
            </View>
            </>
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
    textTitle: {
      fontWeight: "700",
      fontSize: 30,
      color: colors.blueMid,
    },
    textSubTitle: {
      fontWeight: "500",
      fontSize: 20,
      color: colors.black,
      paddingRight: "10%",
    },
    containerText:{
        position: "absolute",
        paddingLeft:"4%"
    }
  });

export default CreateWalletScreen;