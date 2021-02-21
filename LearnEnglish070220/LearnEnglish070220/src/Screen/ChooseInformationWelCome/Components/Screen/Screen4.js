import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Assets} from '../../../../Ultis/Constant';

const data = [
  {
    title: 'Gọi món và hỏi đường như người bản địa',
    image: Assets.Images.Location.image,
  },
  {
    title: 'Hỗ trợ giúp lớp học của bạn nổi bật ở trường',
    image: Assets.Images.Lamp.image,
  },
  {title: 'Đáp ứng nhu cầu thăng tiến', image: Assets.Images.Growth.image},
];
const {width}=Dimensions.get("screen")
export const Screen4 = ({navigation, refFlatList, progress, setProgress}) => {
  // const {width} = useDimensions().window;
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Tổng quan khoá học</Text>
      <Text style={styles.content}>
        Học từ cấp độ cơ bản các kỹ năng nghe, nói, đọc, viết và ngữ pháp Tiếng
        Anh.
      </Text>
      <View style={styles.container}>
        <Text style={styles.title}>Nội dung</Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View style={styles.content1}>
            <FastImage
              resizeMode={FastImage.resizeMode.contain}
              source={Assets.Images.Vocabulary.image}
              style={styles.img}
            />
            <View style={{paddingLeft: 10}}>
              <Text style={[styles.title, {fontSize: 16}]}>3.600+</Text>
              <Text>Từ vựng</Text>
            </View>
          </View>
          <View style={styles.content1}>
            <FastImage
              resizeMode={FastImage.resizeMode.contain}
              source={Assets.Images.Pen.image}
              style={styles.img}
            />
            <View style={{paddingLeft: 10}}>
              <Text style={[styles.title, {fontSize: 16}]}>3.600+</Text>
              <Text>Từ vựng</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Xây dựng các kỹ năng của bạn</Text>
        {data.map((item, index) => {
          return (
            <RenderItem
              key={`Screen4ChooseInformationWelCome${index}`}
              item={item}
              index={index}
            />
          );
        })}
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.touch}
          onPress={() => {
            refFlatList.scrollToOffset({
              animated: true,
              offset: width * 4,
            });
            setProgress(0.8);
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    width,
    padding: 5,
  },
  container: {
    marginTop: 20,
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
  content1: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 50,
    height: 50,
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  touch: {
    minWidth: '90%',
    height: 50,
    backgroundColor: Assets.Colors.Green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

//RenderItem
//RenderItem
//RenderItem
//RenderItem
//RenderItem
//RenderItem

const RenderItem = React.memo(({item, index}) => {
  return (
    <View style={stylesRenderItem.main}>
      <View style={stylesRenderItem.viewImg}>
        <FastImage
          resizeMode={FastImage.resizeMode.contain}
          source={item.image}
          style={stylesRenderItem.img}
        />
      </View>
      <View style={{flex: 1}}>
        <Text style={stylesRenderItem.title}>{item.title}</Text>
      </View>
    </View>
  );
});
const stylesRenderItem = StyleSheet.create({
  main: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewImg: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 35,
    height: 35,
  },
  title: {
    fontWeight: 'bold',
    color: Assets.Colors.Text_Gray2,
    textAlign: 'auto',
    marginTop: 5,
  },
});
