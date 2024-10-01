/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>텍스트</Text>
        <Button title="버튼이름" onPress={() => console.log('클릭됨')} />{' '}
        <TextInput />
      </View>
    </SafeAreaView>
  );
}

/**
 * style의 픽셀 값은 숫자나 %로
 * margin: 10px 20px; 대신
 * marginVertical: 10
 * marginHorizontal: 20
 */

const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
    backgroundColor: 'red',
    // margin: 10,
    marginHorizontal: 10,
    // marginVertical: 50,
  },
});
export default App;
