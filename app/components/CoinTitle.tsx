import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

import colors from "../config/colors";

function CoinTitle({ logoUrl, name, ticker}) {
  return (
    <View style={styles.container}>
            <Image source={{ uri: logoUrl }} style={styles.image} />
            <Text style={styles.subtitle}>{name} ({ticker.toUpperCase()})</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      image: {
        width: 24,
        height: 24,
        marginRight: 4,
      },
      subtitle: {
        fontSize: 14,
        color: '#A9ABB1',
      },
});

export default CoinTitle;