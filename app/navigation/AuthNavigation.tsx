import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import CreateWalletScreen from "../screens/CreateWalletScreen";
import LandingScreen from "../screens/LandingScreen";
import ImportWalletScreen from '../screens/ImportWalletScreen';
import { Platform } from 'react-native';

const Stack = createStackNavigator();
// with modal view no need to show header if IOS
// var showHeader:boolean = true;
// if(Platform.OS=="ios"){
//     showHeader = false;
// }
const AuthNavigator = () =>{
  return(
    <Stack.Navigator screenOptions={{headerShown: false, headerBackTitleVisible:true, headerTitleAlign:"center"}}>
      
    <Stack.Screen
      name="LandingScreen"
      component={LandingScreen}
      options={{ title: 'Welcome' }}
    />
    <Stack.Screen
      name="CreateWalletScreen"
      component={CreateWalletScreen}
      options={{ title: 'Create' }}
    />
    <Stack.Screen
      name="ImportWalletScreen"
      component={ImportWalletScreen}
      options={{ title: 'Import', presentation: 'modal', headerShown:true }}
    />
  </Stack.Navigator>
  )
}

export default AuthNavigator;