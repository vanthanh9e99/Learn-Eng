import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Feather} from '../../../Assets/VectorIcons/Icons';
import {Assets} from '../../../Ultis/Constant';
import {CommonActions} from '@react-navigation/native';

export const NotLoggedIn = React.memo(({navigation}) => {
  _login = () => {
    navigation.navigate('FirstScreens', {initialRouteName: 'LoginScreen'});
    // navigation.dispatch(
    //   CommonActions.reset({
    //     index: 1, //the stack index
    //     routes: [
    //       {name: 'LoginScreen'}, //to go to initial stack screen
    //     ],
    //   }),
    // );
  };
  return (
    <View style={[styles.main]}>
      <Text style={styles.title}>Bạn cần đăng nhập để kết nối bạn bè</Text>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.touchLogin}
        onPress={_login}>
        <Text style={styles.login}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
});
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Assets.Colors.Gray3,
  },
  touchLogin: {
    minWidth: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Assets.Colors.Green1,
    borderRadius: 10,
    marginTop: 10,
  },
  login: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Assets.Colors.Green,
  },
});
