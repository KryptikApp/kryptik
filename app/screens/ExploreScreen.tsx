import React, { useEffect, useState } from "react";
import { SearchBar } from "react-native-elements";
import { FlatList, Image, StyleSheet } from "react-native";
import AssetPriceService from "../services/AssetPriceService";
import { Network } from "../models/network";

import { ListItem, ListItemSeparator } from "../components/lists";
import AppButton from "../components/Button";
import AppText from "../components/Text";
import Web3Service from "../services/Web3Service";
import ListItemSaveAction from "../components/lists/ListItemSaveAction";
import Screen from "../components/Screen";
import SearchAsset from "../components/SearchAsset";









function ExploreScreen({navigation}) {
    let x:string = "Explore Screen!";
    console.log(x);

    let initialNetworks:Network[] = []
    const [networks, setNetworks] = useState(initialNetworks);
    const [refreshing, setRefreshing] = useState(false);
    const [search, setSearch] = useState('');
    // market coin data
    const [marketCoinData, setMarketCoinData] = useState([]);
    
    const loadInitialNetworks =  function(){
        global.web3Service.StartSevice()
        .then(
            data =>
            setNetworks(data.getAllNetworks())
        );
        // load historical prices
        global.assetPriceService.StartSevice().then(
            data=>setMarketCoinData(data.getAllMarketData())
        )
    };

    // load initial network data
    useEffect(() => {   
        loadInitialNetworks();
    }, [])


    const handleNetworkSelection = (network) =>{
        // retreive price data for selected network
        navigation.navigate("NetworkOverviewScreen", {network: network});
    }

    

    // ACTION HELPERS
    const handleSave = (network) => {
        // TODO: save network to custom user list
        console.log("Save network:");
        console.log(network.fullName);
    };

    const handleSearch = function(query){

        global.web3Service.searchNetworksAsync(query).then(response => {
            setNetworks(response);
            setSearch(query);
        });
    };
      
    // VIEW 
    return (
        <Screen>
            <SearchAsset onlySupported={false} onPressAsset={handleNetworkSelection}></SearchAsset>
        </Screen>
    );

}

export default ExploreScreen;