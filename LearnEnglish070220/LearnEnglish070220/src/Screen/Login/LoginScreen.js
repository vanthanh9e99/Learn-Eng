import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, LoginEmail, ModalUserInfo} from './Components';

export function LoginScreen({navigation, isHome}) {
  console.log('i123123123sHome');
  console.log(isHome);
  console.log('i123123123sHome');

  return (
    <View style={styles.main}>
      <Header navigation={navigation} />
      <LoginEmail navigation={navigation} />
      <ModalUserInfo navigation={navigation} isHome={isHome} />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
});
