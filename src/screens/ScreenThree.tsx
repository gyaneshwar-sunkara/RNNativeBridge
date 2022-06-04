import {Alert, Button, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {selectName} from '../app/slices/globalSlice';
import {useAppSelector} from '../app/hooks';
import CommonText from '../components/CommonText';
import SwipeButton from '../components/SwipeButton';

export default function ScreenThree() {
  const name = useAppSelector(selectName);

  const [toggleState, setToggleState] = useState(false);

  const handleToggle = (value: boolean) => setToggleState(value);
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <CommonText
        text={`Try out the following buttons ${name}`}
        color="white"
      />
      <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
        <Text style={{color: 'gold', textAlign: 'center'}}>
          4 variations of a button
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{padding: 5}}
          onPress={() => Alert.alert('Button One')}>
          <Text style={{color: '#59bfff', textAlign: 'center', margin: 10}}>
            Press me
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{padding: 5}}
          onPress={() => Alert.alert('Button Two')}>
          <View style={{backgroundColor: '#3f3f3f', borderRadius: 10}}>
            <Text style={{color: '#59bfff', textAlign: 'center', margin: 15}}>
              Press me
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{padding: 5}}
          onPress={() => Alert.alert('Button Three')}>
          <View style={{backgroundColor: '#59bfff', borderRadius: 10}}>
            <Text style={{color: 'white', textAlign: 'center', margin: 15}}>
              Press me
            </Text>
          </View>
        </TouchableOpacity>
        <SwipeButton onToggle={handleToggle} />
      </View>
    </View>
  );
}
