import { useEffect, useState} from "react";
import { StyleSheet, Text, Image, View, ScrollView, ActivityIndicator } from 'react-native';

import { useParams } from "react-router-dom";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import colors from "../config/colors";
import CoinChart from "../components/CoinChart";
import { ListItemSeparator } from "../components/lists";
import { Network } from "../models/network";


function NetworkOverviewScreen({ route, navigation }){
    let x:string = "Send Screen!";
    console.log(x);
    console.log(route);
    let network:Network = route.params.network;
    //TODO: replace with coin data type
    let initData:any;
    const [coinData, setCoinData] = useState(initData);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let coinData = global.assetPriceService.getAssetData(network);
        setCoinData(coinData);
        setIsLoaded(true);
        console.log()
        navigation.setOptions({
          title: network.fullName,
        });
    }, [network.fullName, navigation]);



  
    return (
        <>
        <ScrollView style={styles.container}>
        <View>
            <AppText style={{color: network.hexColor, fontWeight: "700", fontSize: 30,}}>{network.fullName}</AppText>
            {isLoaded &&
            <View style={{width:"100%", paddingHorizontal: 0,}}>
               <CoinChart
               currentPrice={coinData.current_price}
               logoUrl={network.iconPath}
               name={network.fullName}
               symbol={coinData.symbol}
               priceChangePercentage7d={coinData.price_change_percentage_7d_in_currency}
               sparkline={coinData?.sparkline_in_7d.price}
               color={network.hexColor}
                />
              </View>
            }
            {isLoaded &&
               <ListItemSeparator/>
            }
            
            {!isLoaded &&
            // if data hasn't loaded display loader
            <View style={styles.chartPlaceHolder}>
               <ActivityIndicator size="large" color={network.hexColor} />
            </View>
            }
            <View style={styles.infoContainer}>
              <AppText style={styles.textSubTitle}>About</AppText>
              <AppText style={styles.textAbout}>{network.about}</AppText>
            </View> 
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
  textAbout:{
      color: colors.black,
      fontSize: 20,
      paddingBottom: 40
  },
  container:{
      paddingHorizontal:"2%",
      paddingBottom: "8%",
      flex: 1,
  },
  infoContainer:{
    padding: 2,
  },
  chartPlaceHolder:{
    height: "20%",
    width:"100%",
    justifyContent:"center"
  }
});

export default NetworkOverviewScreen;