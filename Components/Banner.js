import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';

const Banner = ({data}) => {
  return (
    <View>
      <Image source={data.image} style={{width: 300, height: 150}} />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({});
