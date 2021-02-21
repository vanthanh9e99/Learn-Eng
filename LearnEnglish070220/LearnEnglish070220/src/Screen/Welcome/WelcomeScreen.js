import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Assets} from '../../Ultis/Constant';

export function WelcomeScreen({navigation}) {
  const _navigateChooseInformationScreen = () => {
    navigation.navigate('ChooseInformationScreen');
  };
  const _navigateLoginScreen = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <View style={styles.main}>
      <View style={styles.viewTop}>
        <FastImage
          resizeMode={FastImage.resizeMode.contain}
          source={Assets.Images.DualingoWelcome.image}
          style={styles.imgWelcome}
        />
        <FastImage
          tintColor={Assets.Colors.StatusBar}
          resizeMode={FastImage.resizeMode.contain}
          source={Assets.Images.Logo_Text.image}
          style={styles.logoText}
        />
        <Text style={styles.title}>Học ngoại ngữ miễn phí. Mãi mãi</Text>
      </View>
      <View style={styles.viewBottom}>
        <View style={styles.viewButtonLetGo}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.buttonLetGo}
            onPress={_navigateChooseInformationScreen}>
            <Text style={styles.letGo}>BẮT ĐẦU NGAY</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewButtonLetGo}>
          <TouchableOpacity
            onPress={_navigateLoginScreen}
            activeOpacity={0.6}
            style={[
              styles.buttonLetGo,
              {
                backgroundColor: 'white',
                borderWidth: 2,
                borderColor: Assets.Colors.Border_Gray,
              },
            ]}>
            <Text style={[styles.letGo, {color: Assets.Colors.StatusBar}]}>
              BẮT ĐẦU NGAY
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBottom: {
    height: 100,
  },
  imgWelcome: {
    width: 150,
    height:
      (Assets.Images.DualingoWelcome.size.h * 150) /
      Assets.Images.DualingoWelcome.size.w,
  },
  logoText: {
    marginTop: 5,
    tintColor: 'red',
    width: 150,
    height:
      (Assets.Images.Logo_Text.size.h * 150) / Assets.Images.Logo_Text.size.w,
  },
  title: {
    color: 'gray',
    fontSize: 17,
  },
  viewButtonLetGo: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLetGo: {
    minWidth: '80%',
    height: 45,
    backgroundColor: Assets.Colors.StatusBar,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letGo: {
    color: 'white',
  },
});
