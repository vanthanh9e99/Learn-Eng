import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {useDimensions} from '@react-native-community/hooks';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Assets} from '../../../../Ultis/Constant';

const data = [
  'Gia đình và bạn bè',
  'Đài phát thanh',
  'Mạng xã hội',
  'Quảng cáo trực tuyến',
  'Tin tức, báo hoặc blog',
  'Tìm trên web',
  'Cửa hàng ứng dụng',
  'TV',
  'Khác',
];
const {width} = Dimensions.get('screen');
export const Screen2 = ({navigation, refFlatList, progress, setProgress}) => {
  const {width} = useDimensions().window;
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Bạn biết tới Duolingo qua đâu</Text>
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
    marginLeft: 5,
  },
  viewBorder: {
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: Assets.Colors.Border_Gray,
    marginHorizontal: 10,
    marginTop: 10,
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
          onPress={() => {
            refFlatList.scrollToOffset({
              animated: true,
              offset: width * 2,
            });
            setProgress(0.4);
          }}>
          <Text style={stylesRenderItem.title}>{item}</Text>
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
    justifyContent: 'center',
    paddingLeft: 10,
  },
  title: {
    fontWeight: 'bold',
    color: Assets.Colors.Text_Gray3,
  },
});
