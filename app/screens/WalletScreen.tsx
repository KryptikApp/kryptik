import Screen from "../components/Screen";
import AppText from "../components/Text";

function WalletScreen(props:any) {
    let x:string = "Wallet Screen!";
    console.log(x);
    
  
  
    return (
        <Screen>
            <AppText>One screen. All of your digital assets.</AppText>
        </Screen>
    );

}

export default WalletScreen;