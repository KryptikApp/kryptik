import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import CreateWalletScreen from "../screens/CreateWalletScreen";
import LandingScreen from "../screens/LandingScreen";
import ImportWalletScreen from '../screens/ImportWalletScreen';
import { Platform } from 'react-native';
import ExploreScreen from '../screens/ExploreScreen';
import NetworkOverviewScreen from '../screens/NetworkOverviewScreen';

const Stack = createStackNavigator();
// with modal view no need to show header if IOS
// var showHeader:boolean = true;
// if(Platform.OS=="ios"){
//     showHeader = false;
// }
const NetworkNavigator = () =>{
  return(
    <Stack.Navigator screenOptions={{headerShown: false, headerBackTitleVisible:true, headerTitleAlign:"center"}}>
      
    <Stack.Screen
      name="ExploreScreen"
      component={ExploreScreen}
      options={{ title: 'Explore' }}
    />
    <Stack.Screen
      name="NetworkOverviewScreen"
      component={NetworkOverviewScreen}
      options={{ title: '', presentation: 'modal', headerShown:true }}
    />

  </Stack.Navigator>
  )
}

export default NetworkNavigator;