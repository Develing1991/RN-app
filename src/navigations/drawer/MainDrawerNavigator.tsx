import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import FeedHomeScreen from '../../screens/feed/FeedHomeScreen';
import CalendarHomeScreen from '../../screens/calender/CalendarHomeScreen';
import MapHomeScreen from '../../screens/map/MapHomeScreen';

interface MainDrawerNavigatorProps {}

const MainDrawerNavigator = ({}: MainDrawerNavigatorProps) => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={MapHomeScreen} />
      <Drawer.Screen name="FeedHome" component={FeedHomeScreen} />
      <Drawer.Screen name="CalendarHome" component={CalendarHomeScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({});

export default MainDrawerNavigator;
