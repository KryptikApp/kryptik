import Screen from "../../components/Screen";
import SearchAsset from "../../components/SearchAsset";
import { StyleSheet, ScrollView, View } from "react-native";
import AppText from "../../components/Text";
import colors from "../../config/colors";
import { Network } from "../../models/network";
import CoinTitle from "../../components/CoinTitle";
import VirtualKeyboard from 'react-native-virtual-keyboard';
import { useState } from "react";

function ChooseAmountScreen({navigation, route}) {
    let x:string = "Choose Amount Screen!";
    console.log(x); 
    let network:Network = route.params.network;

    const [amount, setAmount] = useState('0');

    const handleValChange = function(val){
      // default to zero
      if(val == '') val = '0';
      setAmount(val)
    }

    return (
        <>
        <ScrollView style={styles.container}>
            <CoinTitle logoUrl={network.iconPath} name={network.fullName} ticker={network.ticker}></CoinTitle>
            <View style={styles.amountContainer}>
              <AppText style={styles.textAmount}>${amount}</AppText>
              <VirtualKeyboard color='black' pressMode='string' onPress={(val) => handleValChange(val)} />
            </View>
         </ScrollView>
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
    textTitle: {
      fontWeight: "700",
      fontSize: 30,
    },
    textSubTitle: {
      fontWeight: "700",
      fontSize: 20,
      color: colors.black,
    },
    textAmount:{
      alignSelf: 'center',
      fontWeight: '700',
      fontSize: 60
    },
    textAbout:{
        color: colors.black,
        fontSize: 20
    },
    container:{
        paddingHorizontal:"2%",
        paddingBottom: "5%",
        flex: 1,
    },
    amountContainer:{
      alignContent: 'center',
      justifyContent: 'center'
    },
    chartPlaceHolder:{
      height: "20%",
      width:"100%",
      justifyContent:"center"
    }
  });

export default ChooseAmountScreen;