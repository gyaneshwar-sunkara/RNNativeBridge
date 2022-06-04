import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {selectName, setName} from '../app/slices/globalSlice';
import CommonText from '../components/CommonText';

export default function ScreenOne() {
  const dispatch = useAppDispatch();
  const name = useAppSelector(selectName);
  return (
    <View>
      <CommonText text={`Hello, ${name}`} />
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={e => dispatch(setName(e))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
