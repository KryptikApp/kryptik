import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, Image, View, Button, Pressable, FlatList } from 'react-native';

import Screen from "../components/Screen";
import React, { useState } from 'react';
import { ListItem, ListItemDeleteAction, ListItemSeparator } from "../components/lists";


const initialMessages = [
    {
      id: 1,
      title: "Kryptik App.",
      description: "Heyyy! Welcome to Kryptik. Let's show you around.",
      image: require("../assets/media/kryptik/kryptikKGradient.png"),
    },
    {
      id: 2,
      title: "Kryptik App.",
      description:
        "Ether to the moon? What do you think? The price has been volatile, but staking has seen a 2x increase.",
      image: require("../assets/media/kryptik/kryptikKGradient.png"),
    },
  ];
  
function MessagesScreen(props:any) {
        let x:string = "Messages Screen!";
        console.log(x);
        
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };
      
        return (
            <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/media/kryptik/kryptikKGradient.png"),
            },
          ]);
        }}
      />
    </Screen>
        );

}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#24a7ff",
      alignItems: 'center',
    },
    
    textMain: {
      fontWeight: "900",
      fontSize: 60,
      color: "white",
    },
    textSubTitle: {
      fontWeight: "500",
      fontSize: 20,
      color: "white",
      paddingRight: "40%",
    },
    buttonBottom:{
        position:"absolute",
        bottom: 40,
        width: "80%",
        height: 70,
        backgroundColor: "black",
        borderRadius: 12,
        alignItems: 'center',
      justifyContent: 'center',
    },
    textButton:{
      fontSize: 28,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    containerText:{
        position: "absolute",
        top: "20%",
        paddingLeft:"4%"
    }
  });

export default MessagesScreen;