import Screen from "../components/Screen";
import AppText from "../components/Text";

function ProfileScreen(props:any) {
    let x:string = "Profile Screen!";
    console.log(x);
    
  
  
    return (
        <Screen>
            <AppText>Your profile.</AppText>
        </Screen>
    );

}

export default ProfileScreen;