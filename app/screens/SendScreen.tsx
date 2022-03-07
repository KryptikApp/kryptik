import Screen from "../components/Screen";
import AppText from "../components/Text";

function CreateWalletScreen(props:any) {
    let x:string = "Send Screen!";
    console.log(x);
    
  
  
    return (
        <Screen>
            <AppText>Send crypto to a friend.</AppText>
        </Screen>
    );

}



export default CreateWalletScreen;