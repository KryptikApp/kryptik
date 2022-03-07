import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, colorButton = "black", colorText="white" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[colorButton] }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colorText}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "80%",
    height: 70,
    backgroundColor: colors.black,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default AppButton;