import Screen from "../components/Screen";
import AppText from "../components/Text";
import { Pressable, StyleSheet, View} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

import colors from "../config/colors";

function WalletScreen({navigation}) {
    let x:string = "Wallet Screen!";
    console.log(x);
    
    const handleQrIconClick = function(){
        // navigate to Kryptik qr scanner
        navigation.navigate("ScanScreen");
    }

    return (
        <Screen>
            <View style={styles.qrContainer}>
            <Pressable onPress={handleQrIconClick}>
                <MaterialCommunityIcons
                name="qrcode"
                size={35}
                color={colors.black}
                style={styles.qrIcon}
                />
            </Pressable>        
            </View>
            <View style={styles.balanceContainer}>
                <AppText style={styles.textBalance}>$2,345</AppText>
            </View>
        </Screen>
    );

}

const styles = StyleSheet.create({
    qrContainer:{
        flexDirection: "row-reverse",
        width: "100%",
        height: "5%",
    },
    qrIcon:{
        marginRight: 2
    },
    headerBack:{
        backgroundColor: colors.blueLight,
        width:"100%",
        height: "5%"
    },
    buttonsContainer: {
      padding: 20,
      width: "100%",
      position: "absolute",
      bottom: 20,
      alignItems:'center'
    },
    balanceContainer:{
        alignItems: 'center'
    },
    textBalance: {
      fontWeight: "900",
      fontSize: 38,
      color: "black",
    },
    textSubTitle: {
      fontWeight: "500",
      fontSize: 20,
      color: "black",
      alignItems: "center"
    },
  });

export default WalletScreen;