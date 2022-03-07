import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import CreateWalletScreen from "../screens/CreateWalletScreen";
import LandingScreen from "../screens/LandingScreen";
import ImportWalletScreen from '../screens/ImportWalletScreen';

const Stack = createStackNavigator();
const AuthNavigator = () =>{
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      
    <Stack.Screen
      name="LandingScreen"
      component={LandingScreen}
      options={{ title: 'Welcome' }}
    />
    <Stack.Screen
      name="CreateWalletScreen"
      component={CreateWalletScreen}
      options={{ title: 'Create Wallet' }}
    />
    <Stack.Screen
      name="ImportWalletScreen"
      component={ImportWalletScreen}
      options={{ title: 'Import Wallet', headerShown:true }}
    />
  </Stack.Navigator>
  )
}

export default AuthNavigator;