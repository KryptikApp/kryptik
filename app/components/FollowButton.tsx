import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

export default function Button(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    borderRadius: 8,
    borderColor: colors.secondary,
    borderWidth: 3
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: '600',
    letterSpacing: 0.25,
    color: 'white',
  },
});