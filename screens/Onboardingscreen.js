import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const Onboardingscreen = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => {
        navigation.replace('Login');
      }}
      onDone={() => {
        navigation.navigate('Login');
      }}
      pages={[
        {
          backgroundColor: '#5B84B0',
          image: <Image source={require('../assets/on1.png')} />,
          title: 'Welcome',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/on2.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#FC766A',
          image: <Image source={require('../assets/on3.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

export default Onboardingscreen;

const styles = StyleSheet.create({});
