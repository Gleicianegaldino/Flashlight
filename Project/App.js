import React from 'react';
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert} from 'react-native';
import Torch from 'react-native-torch';
import { Platform } from 'react-native';
import RNShake from 'react-native-shake';

export default function App() {

  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      handleChangeToggle(oldToggle => !oldToggle);
    });
    return () => subscription.remove();
  },[]);
  
  return (

    <View style={toggle ? style.containerLigth : styles.container}>
      <TouchableOpacity onPress={handleChangeToggle}>
            <Image 
              style={toggle ? style.lightingOn : style.lightingOff} 
              source={
                toggle
                  ? require('./assets/icons/eco-light-on.png')
                  : require('./assets/icons/eco-light-off.png')
                } 
              />
            <Image 
              style={style.dioLogo} 
              source={
                toggle
                  ? require('./assets/icons/logo-dio-black.png')
                  : require('./assets/icons/logo-dio-white.png')
                } 
              />  
        </TouchableOpacity> 
      <Text style={toggle ? style.textOn : style.textOff}>By Paiva</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

   containerLigth: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightingOn: {
      resizeMode: 'contain',
      alignSelf: 'center',
      width: 150,
      height: 150,
    },

    lightingOff: {
      resizeMode: 'contain',
      alignSelf: 'center',
      tintColor: 'white',
      width: 150,
      height: 150,
    },

    dioLogo: {
      resizeMode: 'contain',
      alignSelf: 'center',
      width: 250,
      height: 250,
    },

    textOn: {
      fontSize: 18,
      marginTop:60,
    },

    textOff: {
      fontSize: 18,
      marginTop:60,
      color: 'white',
    },

});
