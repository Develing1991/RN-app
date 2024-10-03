import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import AuthHomeScreen from '../../screens/auth/AuthHomeScreen';

import {authNavigation, colors} from '../../constants';
import SignupScreen from '../../screens/auth/SignupScreen';
import LoginScreen from '../../screens/auth/LoginScreen';

export type AuthStackParamList = {
  [authNavigation.AUTH_HOME]: undefined;
  [authNavigation.LOGIN]: undefined;
  [authNavigation.SIGNUP]: undefined;
};

interface AuthStackNavigatorProps {}

const AuthStackNavigator = ({}: AuthStackNavigatorProps) => {
  const Stack = createStackNavigator<AuthStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.WHITE,
        },
        headerStyle: {
          backgroundColor: colors.WHITE,
          shadowColor: 'gray',
        },
        headerTitleStyle: {
          fontSize: 15,
        },
        headerTintColor: '#000',
      }}>
      <Stack.Screen
        name={authNavigation.AUTH_HOME}
        component={AuthHomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={authNavigation.LOGIN}
        component={LoginScreen}
        options={{
          headerTitle: '로그인',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name={authNavigation.SIGNUP}
        component={SignupScreen}
        options={{
          headerTitle: '회원가입',
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default AuthStackNavigator;
