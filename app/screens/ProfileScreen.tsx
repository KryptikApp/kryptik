import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Pressable
  } from 'react-native';
import CollapsibleView from "@eliav2/react-native-collapsible-view";

import AppButton from '../components/Button';
import FollowButton from '../components/FollowButton';

import Screen from "../components/Screen";
import AppText from "../components/Text";
import colors from '../config/colors';
import { ListItemSeparator } from '../components/lists';
import AddressButton from '../components/AddressButton';

function ProfileScreen(props:any) {
    let x:string = "Profile Screen!";
    console.log(x);
    
    let handleAddfriend = function(){
      console.log("Add friend!");
  }
  
    return (
        <Screen>          
          <LinearGradient colors={[colors.blueMid, colors.blueLight, colors.blue]} style={styles.headerBack}></LinearGradient>
          <View style={styles.containerButton}> 
          <FollowButton title="Add" onPress={handleAddfriend}></FollowButton>
          </View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.headerProfileContainer}>
              <Text style={styles.name}>Jerry Prell</Text>
              <AddressButton addy="0x...89e3" image={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}></AddressButton>
            </View>  
              <AppText style={styles.profileDescription}>Hey! I'm funky and fun. Come join the movement.</AppText> 
            <ListItemSeparator></ListItemSeparator>
          </View>
        </Screen>
    );

}

const styles = StyleSheet.create({
    headerBack:{
      backgroundColor: colors.blueLight,
      width:"100%",
      height: "20%"
    },
    headerProfileContainer:{
        alignItems: 'center',
    },
    headerAddresscontainer:{
      width: "80%",
      alignItems: "center"
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:5, 
      alignSelf:'center',
      position: 'absolute',
      top: "10%",
    },
    containerButton:{
      position: "absolute",
      top: "2%",
      right: "3.5%",
    },
    body:{
      marginTop:60,
    },
    profileDescription:{
     paddingHorizontal: "7%"
    },
    containerMain:{
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        backgroundColor: colors.blueLight
    },
    name:{
      fontSize:22,
      color: colors.black,
      fontWeight:'600',
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    info:{
      fontSize:16,
      color: "black",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    }
  });

export default ProfileScreen;