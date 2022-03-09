import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import colors from '../config/colors';

export default function Button(props) {
  const { onPress, addy = 'Save',  image, width="80%" } = props;
  return (
    // outer container for address button 
    <View style={{width:width, alignItems: 'center'}}>
    {/* clickable address button */}
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.container}>
      <View>
          {image && <Image style={styles.image} source={image} />}
      </View>
      <View style={styles.addyContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {addy}
            </Text>
       </View>
        </View>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    borderRadius: 18,
    borderColor: colors.secondary,
    borderWidth: 1
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.25,
    color: 'white',
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.white,
    justifyContent: "center",
    margin: 0,
    padding: 0
  },
  addyContainer: {
    paddingLeft: 5
  },
  image: {
    width: 20,
    height: 20,
    borderRadius: 35,
    justifyContent: "center",
    alignSelf: "center",
  },
  title: {
    fontWeight: "500",
  },
});
