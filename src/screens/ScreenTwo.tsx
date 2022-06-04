import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {selectName} from '../app/slices/globalSlice';
import {useAppSelector} from '../app/hooks';
import CommonText from '../components/CommonText';

export default function ScreenTwo() {
  const name = useAppSelector(selectName);

  return (
    <View style={{flex: 1}}>
      <CommonText text={`Have a good day ${name}!`} />
    </View>
  );
}

const styles = StyleSheet.create({});
