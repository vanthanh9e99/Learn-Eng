import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Assets} from '../../Ultis/Constant';
const {width, height} = Dimensions.get('screen');
export function Loading1({backgroundColor, title}) {
  return (
    <View
      style={[
        styles.main,
        {backgroundColor: !!backgroundColor ? backgroundColor : 'white'},
      ]}>
      <FastImage
        resizeMode={FastImage.resizeMode.contain}
        source={Assets.Images.DuolingoLoading.image}
        style={styles.img}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    width,
    height,
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
