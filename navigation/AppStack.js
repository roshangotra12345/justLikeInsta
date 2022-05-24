import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
//import {createStackNavigator} from '@react-navigation/stack';
//import HomeScreen from '../screens/HomeScreen';
//import {NavigationContainer} from '@react-navigation/native';
//import Setting from '../screens/Setting';
//import Post from '../screens/Post';
// import Setting from '../screens/Setting';
// import Post from '../screens/Setting';
//import Home from '../screens/Home';
import Setting from '../screens/Setting';
import Post from '../screens/Post';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';

const AppStack = () => {
  //const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    // <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
