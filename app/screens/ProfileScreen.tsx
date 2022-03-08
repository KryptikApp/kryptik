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
import Collapsible from 'react-native-collapsible';
import AppButton from '../components/Button';
import FollowButton from '../components/FollowButton';

import Screen from "../components/Screen";
import AppText from "../components/Text";
import colors from '../config/colors';

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
          <View style={styles.headerProfileContainer}>
            <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
              <Text style={styles.name}>Jerry Prell</Text>
              <Text style={styles.info}>0x...89e3</Text>
              <Collapsible >
               <AppText>Hello! I am a native programmer interested in pandas and python. Follow me to learn more!</AppText>
              </Collapsible>
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
        position: 'absolute',
        top: "10%",
        alignItems: 'center',
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:5, 
    },
    containerButton:{
      position: "absolute",
      top: "2%",
      right: "3.5%",
    },
    name:{
      fontSize:22,
      color: colors.black,
      fontWeight:'600',
    },
    body:{
      marginTop:40,
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