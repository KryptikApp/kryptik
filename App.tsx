import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WalletScreen from './app/screens/WalletScreen';
import colors from './app/config/colors';
import { AntDesign } from '@expo/vector-icons';
import ProfileScreen from './app/screens/ProfileScreen';
import navigationTheme from './app/navigation/navigationTheme';
import NetworkNavigator from './app/navigation/NetworkNavigation';
import AssetPriceService from './app/services/AssetPriceService';
import WalletNavigator from './app/navigation/WalletNavigation';


const Tab = createBottomTabNavigator();
  // initialize search asset service
global.assetPriceService = new AssetPriceService();
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
        <Tab.Screen name="Find" component={NetworkNavigator}  options={{ tabBarIcon: ({size, color})=><AntDesign name="search1" size={size} color={color}/> }}/>
        <Tab.Screen name="Wallet" component={WalletNavigator}  options={{ tabBarIcon: ({size, color})=><AntDesign name="wallet" size={size} color={color}/> }}/>
        <Tab.Screen name="Profile" component={ProfileScreen}  options={{ tabBarIcon: ({size, color})=><AntDesign name="user" size={size} color={color}/> }}/>
      </Tab.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer theme={navigationTheme}>
        <TabNavigator/>
      </NavigationContainer>
  );
}
