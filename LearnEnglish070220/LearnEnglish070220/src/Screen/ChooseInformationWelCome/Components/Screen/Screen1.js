import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import {Assets} from '../../../../Ultis/Constant';
const data = [
  {image: require('../../../../Assets/Images/coVN.jpg'), title: 'Tiếng Anh'},
  {
    image: require('../../../../Assets/Images/coVN.jpg'),
    title: 'Tiếng Trung Quốc',
  },
];
const {width} = Dimensions.get('screen');
export const Screen1 = ({navigation, refFlatList, progress, setProgress}) => {
  return (
    <View style={styles.main}>
      <ScrollView style={{padding: 5}}>
        <Text style={styles.title}>Tôi muốn học</Text>
        <View style={styles.viewBorder}>
          {data.map((item, index) => {
            return (
              <RenderItem
                key={`Screen1ChooseInformationWelCome${index}`}
                item={item}
                index={index}
                refFlatList={refFlatList}
                progress={progress}
                setProgress={setProgress}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    width,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Assets.Colors.Text_Gray3,
    marginVertical: 10,
  },
  viewBorder: {
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: Assets.Colors.Border_Gray,
    marginHorizontal: 10,
  },
});

//RenderItem
//RenderItem
//RenderItem
//RenderItem
//RenderItem
//RenderItem

const RenderItem = React.memo(
  ({item, index, refFlatList, progress, setProgress}) => {
    return (
      <View
        style={[
          stylesRenderItem.main,
          {borderBottomWidth: index + 1 == data.length ? 0 : 1.5},
        ]}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={stylesRenderItem.button}
          onPress={() => {
            refFlatList.scrollToOffset({
              animated: true,
              offset: width,
            });
            setProgress(0.2);
          }}>
          <FastImage
            resizeMode={FastImage.resizeMode.contain}
            source={item.image}
            style={stylesRenderItem.img}
          />
          <Text style={stylesRenderItem.title}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  },
);
const stylesRenderItem = StyleSheet.create({
  main: {
    width: '100%',
    height: 50,

    borderColor: Assets.Colors.Border_Gray,
  },
  button: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 50,
    height: (300 * 50) / 450,
    marginLeft: 10,
    marginRight: 20,
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
