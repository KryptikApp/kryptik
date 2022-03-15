import React, { useEffect, useState } from "react";
import AppButton from "../components/Button";
import { SearchBar } from "react-native-elements";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import SearchAssetService from "../services/NetworkSevice";
import { FlatList, Image, StyleSheet } from "react-native";
import { ListItem, ListItemSeparator } from "../components/lists";
import ListItemSaveAction from "../components/lists/ListItemSaveAction";
import AssetPriceService from "../services/AssetPriceService";






// initialize search asset service
let searchAssetService = new SearchAssetService()



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

        searchAssetService.searchNetworksAsync(query).then(response => {
            setNetworks(response);
            setSearch(query);
        });
    };
      
    // VIEW 
    return (
        <Screen>
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
                    onPress={() => handleNetworkSelection(item)}
                    
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
        </Screen>
    );

}

export default ExploreScreen;