import {View, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {selectName} from '../app/slices/globalSlice';
import {useAppSelector} from '../app/hooks';
import CommonText from '../components/CommonText';

export default function ScreenTwo() {
  const name = useAppSelector(selectName);

  return (
    <SafeAreaView style={{flex: 1}}>
      <CommonText text={`Have a good day ${name}`} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
