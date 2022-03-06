import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Button } from 'react-native';
import CreateWalletScreen from './app/screens/CreateWalletScreen';
import LandingScreen from './app/screens/LandingScreen';
import 'react-native-gesture-handler';
import MessagesScreen from './app/screens/MessageScreen';



export default function App() {
  return (
      <MessagesScreen/>
  );
}
