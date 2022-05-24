import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Routes from './Routes';
import AuthProvider from './AuthProvider';
import {AuthContext} from './AuthProvider';
const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default Providers;
