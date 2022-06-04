import {
  View,
  TextInput,
  StyleSheet,
  NativeModules,
  Text,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {selectName, setName} from '../app/slices/globalSlice';
import CommonText from '../components/CommonText';
import { SafeAreaView } from 'react-native-safe-area-context';

const {EmuCheck} = NativeModules;

export default function ScreenOne() {
  const dispatch = useAppDispatch();
  const name = useAppSelector(selectName);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    EmuCheck.isEmulator().then((isEmulator: boolean) => {
      setShowModal(isEmulator);
    });
  }, []);

  return (
    <SafeAreaView>
      <CommonText text={`Hello ${name}`} />
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={e => dispatch(setName(e))}
        placeholderTextColor="black"
      />

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          // transparent={true}
          visible={showModal}
          onRequestClose={() => {
            setShowModal(!showModal);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>You are on an Emulator!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setShowModal(!showModal)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 12,
    padding: 10,
    fontSize: 18,
    borderColor: '#59bfff',
    borderWidth: 3,
    borderRadius: 10,
    color: 'black',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: 'black',
    marginBottom: 15,
    textAlign: 'center',
  },
});
