import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Button } from 'react-native';
import CreateWalletScreen from './app/screens/CreateWalletScreen';
import LandingScreen from './app/screens/LandingScreen';
import 'react-native-gesture-handler';
import MessagesScreen from './app/screens/MessageScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WalletScreen from './app/screens/WalletScreen';
import ExploreScreen from './app/screens/ExploreScreen';
import SendScreen from './app/screens/SendScreen';
import colors from './app/config/colors';
import { AntDesign } from '@expo/vector-icons';
import ProfileScreen from './app/screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const TabNavigator = () =>{
  return (
      <Tab.Navigator // ...
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.black,
        tabBarStyle: {
          backgroundColor: colors.white
        }
      }}
       >
        <Tab.Screen name="Find" component={ExploreScreen}  options={{ tabBarIcon: ({size, color})=><AntDesign name="search1" size={size} color={color}/> }}/>
        <Tab.Screen name="Wallet" component={WalletScreen}  options={{ tabBarIcon: ({size, color})=><AntDesign name="wallet" size={size} color={color}/> }}/>
        <Tab.Screen name="Profile" component={ProfileScreen}  options={{ tabBarIcon: ({size, color})=><AntDesign name="user" size={size} color={color}/> }}/>
      </Tab.Navigator>
  );
}
const Stack = createStackNavigator();
const StackNavigator = () =>{
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

export default function App() {
  return (
      <NavigationContainer>
        <TabNavigator/>
      </NavigationContainer>
  );
}
