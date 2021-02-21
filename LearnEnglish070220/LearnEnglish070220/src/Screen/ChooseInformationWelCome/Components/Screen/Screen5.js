import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Assets} from '../../../../Ultis/Constant';
const {width}=Dimensions.get('screen')

export const Screen5 = ({navigation, refFlatList, progress, setProgress}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Chọn một hướng đi</Text>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          navigation.navigate('TestSelectedScreen');
        }}>
        <View style={styles.card}>
          <View style={styles.viewImg}>
            <FastImage
              resizeMode={FastImage.resizeMode.contain}
              source={Assets.Images.Newbie.image}
              style={styles.img}
            />
          </View>
          <View style={styles.viewContent}>
            <Text style={[styles.title, {fontSize: 16}]}>
              Đây là lần đầu bạn học Tiếng Anh?
            </Text>
            <Text style={styles.content}>Bắt đầu từ bài tập cơ bản nhé!</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          setProgress(1);
          navigation.navigate('TestSelectedScreen');
        }}>
        <View style={styles.card}>
          <View style={styles.viewImg}>
            <FastImage
              resizeMode={FastImage.resizeMode.contain}
              source={Assets.Images.Newbie1.image}
              style={styles.img}
            />
          </View>
          <View style={styles.viewContent}>
            <Text style={[styles.title, {fontSize: 16}]}>
              Bạn đã biết một chút Tiếng Anh?
            </Text>
            <Text style={styles.content}>Kiểm tra trình độ đây!</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    width,
    padding: 5,
  },
  card: {
    flexDirection: 'row',
    minWidth: '80%',
    padding: 5,
    borderWidth: 2,
    borderColor: Assets.Colors.Border_Gray,
    marginVertical: 10,
    borderRadius: 10,
  },
  viewContent: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Assets.Colors.Text_Gray3,
  },
  content: {
    fontWeight: 'bold',
    color: Assets.Colors.Text_Gray2,
    textAlign: 'auto',
    marginTop: 5,
  },
  viewImg: {
    minWidth: 80,
    maxWidth: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  img: {
    width: 50,
    height: 50,
  },
});
