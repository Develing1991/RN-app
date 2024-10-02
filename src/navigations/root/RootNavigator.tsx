import React from 'react';
import {StyleSheet, View} from 'react-native';
import AuthStackNavigator from '../stack/AuthStackNavigator';
import MainDrawerNavigator from '../drawer/MainDrawerNavigator';

interface RootNavigatorProps {}

const RootNavigator = ({}: RootNavigatorProps) => {
  const isLoggedIn = false;
  return <>{isLoggedIn ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
};

const styles = StyleSheet.create({});

export default RootNavigator;
