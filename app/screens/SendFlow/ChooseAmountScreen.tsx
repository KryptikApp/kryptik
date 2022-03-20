import Screen from "../../components/Screen";
import SearchAsset from "../../components/SearchAsset";
import { StyleSheet, ScrollView } from "react-native";
import AppText from "../../components/Text";
import colors from "../../config/colors";
import { Network } from "../../models/network";
import CoinTitle from "../../components/CoinTitle";

function ChooseAmountScreen({navigation, route}) {
    let x:string = "Choose Amount Screen!";
    console.log(x); 
    let network:Network = route.params.network;

    return (
        <>
        <ScrollView style={styles.container}>
            <CoinTitle logoUrl={network.iconPath} name={network.fullName} ticker={network.ticker}></CoinTitle>
            <AppText>Send crypto to a friend.</AppText>
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
    textAbout:{
        color: colors.black,
        fontSize: 20
    },
    container:{
        paddingHorizontal:"2%",
        paddingBottom: "5%",
        flex: 1,
    },
    chartPlaceHolder:{
      height: "20%",
      width:"100%",
      justifyContent:"center"
    }
  });

export default ChooseAmountScreen;