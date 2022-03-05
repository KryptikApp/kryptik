import { StyleSheet, Text, Platform} from 'react-native';


type ComponentProps = React.PropsWithChildren<{}>;

function AssetPrice({children}:ComponentProps){
 return <Text style={styles.textprice}>{children}</Text>
}


const styles = StyleSheet.create({
    textprice: {
        fontFamily: Platform.OS == "android" ? "Roboto":"Arial",
        fontSize: 24
    }
})

export default AssetPrice;
