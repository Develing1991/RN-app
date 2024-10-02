import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapHomeScreen from '../../screens/MapHomeScreen';

interface MainDrawerNavigatorProps {}

const MainDrawerNavigator = ({}: MainDrawerNavigatorProps) => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={MapHomeScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({});

export default MainDrawerNavigator;
