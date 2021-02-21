import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Assets} from '../../Ultis/Constant';

export function Loading1() {
  return (
    <View style={styles.main}>
      <FastImage
        resizeMode={FastImage.resizeMode.contain}
        source={Assets.Images.DuolingoLoading.image}
        style={styles.img}
      />
      <Text style={styles.title}>Đang tải</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Assets.Colors.Text_Gray2,
    marginTop: 10,
  },
});
