import Screen from "../components/Screen";
import AppText from "../components/Text";
import { Pressable, StyleSheet, View, Text} from 'react-native';
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
    const handleSendActionClick = function(){
        // navigate to Kryptik qr scanner
        navigation.navigate("ChooseAssetScreen");
    }
    const handleReceiveActionClick = function(){
        // navigate to Kryptik qr scanner
        console.log("Receive!")
    }

    return (
        <Screen>
            
            <View style={styles.headerContainer}>
                <View style={styles.balanceContainer}>
                    <AppText style={styles.textBalance}>$2,345</AppText>
                </View>
                
                <View style={styles.actionContainer}>
                    <View style={styles.action}>
                        <Pressable onPress={handleSendActionClick}>
                            <AppText style={styles.actionText}>Send</AppText>
                        </Pressable>
                    </View>
                    <View style={styles.action}>
                        <Pressable onPress={handleReceiveActionClick}>
                            <AppText style={styles.actionText}>Receive</AppText>
                        </Pressable>
                    </View>
                    <View style={styles.qrIconAction}>
                        <Pressable onPress={handleQrIconClick}>
                                <MaterialCommunityIcons
                                    name="qrcode"
                                    size={35}
                                    color={colors.white}
                                    style={styles.qrIcon}
                                    />
                        </Pressable>
                    </View>
                    
                </View>

            </View>
           
            {/* <View style={{flexDirection:"row", height: 80, backgroundColor: colors.green, paddingHorizontal: 20, width: "70%", alignContent:'center', alignSelf:'center'}}>
                <View style={{ flex: 2, backgroundColor: "red" }} />
                <View style={{ flex: 2, backgroundColor: "darkorange" }} />
                <View style={{ flex: 2, backgroundColor: "green" }} />
            </View> */}
            
        </Screen>
    );

}

const styles = StyleSheet.create({
    qrContainer:{
        flexDirection: "row-reverse",
        width: "100%"
    },
    qrIcon:{
        backgroundColor: colors.blue,
        padding: 2,
        borderRadius: 40, 
        alignSelf: 'center'
    },
    qrIconAction:{
        flex: 2,
    },
    qrWrapper:{
        backgroundColor: colors.blue,
        padding: 2,
        borderRadius: 40,
        alignContent: 'center'
    },
    headerBack:{
        backgroundColor: colors.blueLight,
        width:"100%",
        height: "5%"
    },
    actionContainer:{
        width: "70%",
        borderRadius: 25,
        flexDirection: "row",
        backgroundColor: colors.blueLight,
        alignContent: 'center',
        justifyContent:'center',
        paddingHorizontal: 5,
        alignSelf:'center',
        paddingVertical: 2,
        marginTop: 20
    },
    action:{
        flex: 2,
    },
    actionText:{
        fontWeight: "800",
        fontSize: 22,
        color: colors.white,
        textAlign: 'center'
    },
    buttonsContainer: {
      padding: 20,
      width: "100%",
      position: "absolute",
      bottom: 20,
      alignItems:'center',
      alignSelf:'center',
      justifyContent:'center',
    },
    balanceContainer:{
        alignItems: 'center'
    },
    headerContainer:{
        paddingTop: "8%",
        backgroundColor: colors.blue,
        paddingBottom: 20
    },
    textBalance: {
      fontWeight: "900",
      fontSize: 38,
      color: colors.white,
    },
    textSubTitle: {
      fontWeight: "500",
      fontSize: 20,
      color: "black",
      alignItems: "center"
    },
  });

export default WalletScreen;