import Screen from "../../components/Screen";
import SearchAsset from "../../components/SearchAsset";
import AppText from "../../components/Text";
import colors from "../../config/colors";

function ChooseAssetScreen({navigation}) {
    let x:string = "Choose asset screen!";
    console.log(x);
    
    const handleNetworkSelection = (network) =>{
        // retreive price data for selected network
        navigation.navigate("ChooseAmountScreen", {network: network});
    }
    
    return (
        <>
            <SearchAsset onlySupported={true} onPressAsset={handleNetworkSelection}></SearchAsset>
        </>
    );

}



export default ChooseAssetScreen;