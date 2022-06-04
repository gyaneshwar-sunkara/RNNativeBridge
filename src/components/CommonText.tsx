import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface props {
  text: string;
  color?: string;
}

export default function CommonText({text, color}: props) {
  return (
    <View>
      <Text style={[styles.text, {color: color}]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
