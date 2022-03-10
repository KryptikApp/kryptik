import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Screen from "../components/Screen";
import AppText from "../components/Text";


function NetworkOverviewScreen({ route, navigation }){
    let x:string = "Send Screen!";
    console.log(x);
    console.log(route);
    let network:Network = route.params.network;

    useEffect(() => {
        navigation.setOptions({
          title: network.fullName,
        });
      }, [network.fullName, navigation]);



  
    return (
        <Screen>
            <AppText>{network.fullName}</AppText>
            <AppText>{network.about}</AppText>
        </Screen>
    );

}



export default NetworkOverviewScreen;