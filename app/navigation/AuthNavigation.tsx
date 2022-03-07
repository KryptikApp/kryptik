import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import CreateWalletScreen from "../screens/CreateWalletScreen";
import LandingScreen from "../screens/LandingScreen";

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
  </Stack.Navigator>
  )
}

export default AuthNavigator;