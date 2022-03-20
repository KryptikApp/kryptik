import React, { useState, useEffect } from "react";
import { Network } from "../models/network";
import Web3Service from "../services/Web3Service";
import { SearchBar } from "react-native-elements";
import { FlatList, Image, StyleSheet } from "react-native";
import { ListItem, ListItemSeparator } from "./lists";


import AppButton from "../components/Button";
import AppText from "../components/Text";
import ListItemSaveAction from "../components/lists/ListItemSaveAction";
import Screen from "../components/Screen";
// initialize search asset service
let searchAssetService = new Web3Service()



function SearchAsset({onPressAsset}) {
    let x:string = "Explore Screen!";
    console.log(x);

    let initialNetworks:Network[] = []
    const [networks, setNetworks] = useState(initialNetworks);
    const [refreshing, setRefreshing] = useState(false);
    const [search, setSearch] = useState('');
    // market coin data
    const [marketCoinData, setMarketCoinData] = useState([]);
    
    const loadInitialNetworks =  function(){
        searchAssetService.StartSevice()
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
    

    // ACTION HELPERS
    const handleSave = (network) => {
        // TODO: save network to custom user list
        console.log("Save network:");
        console.log(network.fullName);
    };

    const handleSearch = function(query){

        searchAssetService.searchNetworksAsync(query).then(response => {
            setNetworks(response);
            setSearch(query);
        });
    };
      
    // VIEW 
    return (
        <>
            <SearchBar
                placeholder="Type Here..."
                lightTheme
                round
                onChangeText={(text) => handleSearch(text)}

                value={search}
            />
            <FlatList
                data={networks}
                keyExtractor={(network) => network.ticker}
                renderItem={({ item }) => (
                <ListItem
                    title={item.fullName}
                    subTitle={item.ticker}
                    image={{uri: item.iconPath}}
                    onPress={() => onPressAsset(item)}
                    
                    renderRightActions={() => (
                    <ListItemSaveAction onPress={() => handleSave(item)} />
                    )}
                />
                )}
                refreshing={refreshing}
                onRefresh={() => {
                // reset initial networks
                // TODO... just get initial state.... can use search with blank input
                loadInitialNetworks();
                }}
                ItemSeparatorComponent={ListItemSeparator}
                // refreshing={refreshing}
                // onRefresh={() => {
                // setMessages([
                //     {
                //     id: 2,
                //     title: "T2",
                //     description: "D2",
                //     image: require("../assets/media/kryptik/kryptikKGradient.png"),
                //     },
                // ]);
                // }}
            />
            {/* <AppText>Find networks, assets, and people.</AppText> */}
            {/* <AppButton title="Test Search" onPress={handleSearchNetwork}></AppButton> */}
        </>
    );

}

export default SearchAsset;