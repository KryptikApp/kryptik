import { StyleSheet, Text, Platform} from 'react-native';
import colors from '../config/colors';

function Price({children}){
 return <Text style={stylesAssets.textprice}>{children}</Text>
}


const stylesAssets = StyleSheet.create({
    textprice: {
        fontFamily: Platform.OS == "android" ? "Roboto":"Arial",
        fontSize: 20,
        color: colors.blueMid
    }
})


export default Price;