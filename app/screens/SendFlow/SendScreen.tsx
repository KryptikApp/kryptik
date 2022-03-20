import Screen from "../../components/Screen";
import AppText from "../../components/Text";
import { Network } from "../../models/network";

function SendScreen(route, navigation) {
    let x:string = "Send Screen!";
    console.log(x); 
    let network:Network = route.params.network;

    return (
        <Screen>
             <AppText style={{color: network.hexColor, fontWeight: "700", fontSize: 30,}}>{network.ticker}</AppText>
            <AppText>Send crypto to a friendly friend.</AppText>
        </Screen>
    );

}



export default SendScreen;