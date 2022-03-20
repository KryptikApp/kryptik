import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import ExploreScreen from '../screens/ExploreScreen';
import NetworkOverviewScreen from '../screens/NetworkOverviewScreen';
import WalletScreen from '../screens/WalletScreen';
import ScanScreen from '../screens/ScanScreen';
import ChooseAssetScreen from '../screens/SendFlow/ChooseAssetScreen';
import ChooseAmountScreen from '../screens/SendFlow/ChooseAmountScreen';
import SendScreen from '../screens/SendFlow/SendScreen';


const Stack = createStackNavigator();
// with modal view no need to show header if IOS
// var showHeader:boolean = true;
// if(Platform.OS=="ios"){
//     showHeader = false;
// }
const WalletNavigator = () =>{
  return(
    <Stack.Navigator screenOptions={{headerShown: false, headerBackTitleVisible:true, headerTitleAlign:"center",}}>
      
    <Stack.Screen
      name="WalletScreen"
      component={WalletScreen}
      options={{ title: 'Wallet' }}
    />
    <Stack.Screen
      name="ScanScreen"
      component={ScanScreen}
      options={{ title: 'QR Scanner', presentation: 'modal', headerShown:true }}
    />
    <Stack.Screen
      name="ChooseAssetScreen"
      component={ChooseAssetScreen}
      options={{ title: 'Choose Coin', headerShown:true }}
    />
    <Stack.Screen
      name="ChooseAmountScreen"
      component={ChooseAmountScreen}
      options={{ title: 'Choose Amount', headerShown:true }}
    />
    <Stack.Screen
      name="SendScreen"
      component={SendScreen}
      options={{ title: 'Send', headerShown:true }}
    />

  </Stack.Navigator>
  )
}

export default WalletNavigator;