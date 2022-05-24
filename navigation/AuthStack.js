import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
//import Onboardingscreen from '../screens/Onboardingscreen';
import Onboardingscreen from '../screens/Onboardingscreen';
//import Sign from '../screens/Sign';
//import Onboarding from 'react-native-onboarding-swiper';
import Sign from '../screens/Sign';
//import {GoogleSignin} from '@react-native-google-signin/google-signin';
const Stack = createStackNavigator();

const AuthStack = () => {
  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '360152394538-p93dh251urk6r2t9r9aknu2o9rbs18pl.apps.googleusercontent.com',
  //   });
  // }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboardingscreen"
        component={Onboardingscreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sign"
        component={Sign}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
