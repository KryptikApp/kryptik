import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, Image, View, Button } from 'react-native';

export default function App() {
  let x:string = "hey!";
  console.log(x);


  return (
    <View style={styles.container}>
      <Text style={styles.textMain}>Kryptik</Text>
      <Button onPress={()=>console.log('clicked!')} title="Create Wallet"/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#24a7ff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  textMain: {
    fontWeight: "900",
    fontSize: 80,
    color: "white",
  },
});
