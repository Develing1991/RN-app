import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {AuthStackParamList} from '../../navigations/stack/AuthStackNavigator';
import CustomButton from '../../components/CustomButton';
import {authNavigation} from '../../constants';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigation.AUTH_HOME
>;

const AuthHomeScreen = ({navigation}: AuthHomeScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../assets/matzip.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          label="로그인 화면으로 이동"
          // size="medium"
          onPress={() => navigation.navigate(authNavigation.LOGIN)}
        />
        <CustomButton
          label="회원가입 화면으로 이동"
          variant="outlined"
          onPress={() => navigation.navigate(authNavigation.SIGNUP)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 30,
  },
  imageContainer: {
    flex: 1.5,
    width: Dimensions.get('screen').width / 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 10,
  },
});

export default AuthHomeScreen;
