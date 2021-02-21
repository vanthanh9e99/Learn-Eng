import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {FlatList} from 'react-native-gesture-handler';

import {RenderItem} from './RenderItem';

const Data = [
  {
    title: 'Từ vựng mới',
    content: 'Đâu là sữa',
    answers: [
      {
        image: 'https://img.icons8.com/plasticine/2x/rice-bowl.png',
        title: 'Rice',
        isCorrect: false,
        sound:
          'https://raw.githubusercontent.com/thanhnvpk01168/UploadImageReactJS/main/web/rice.mp3',
      },
      {
        image: 'https://image.flaticon.com/icons/png/512/869/869664.png',
        title: 'Milk',
        isCorrect: true,
        sound:
          'https://raw.githubusercontent.com/thanhnvpk01168/UploadImageReactJS/main/web/milk.mp3',
      },
      {
        image:
          'https://i.pinimg.com/originals/aa/95/01/aa9501df489c885cce3f31b0fc6234ef.png',
        title: 'Coffee',
        isCorrect: false,
        sound:
          'https://raw.githubusercontent.com/thanhnvpk01168/UploadImageReactJS/main/web/couple.mp3',
      },
      {
        image: 'https://img.icons8.com/cotton/2x/like.png',
        title: 'heart',
        isCorrect: false,
        sound:
          'https://raw.githubusercontent.com/thanhnvpk01168/UploadImageReactJS/main/web/heart.mp3',
      },
    ],
  },
  {
    title: 'Từ vựng mới',
    content: 'Đâu là gạo',
    answers: [
      {
        image: 'https://img.icons8.com/plasticine/2x/rice-bowl.png',
        title: 'Rice',
        isCorrect: true,
        sound:
          'https://raw.githubusercontent.com/thanhnvpk01168/UploadImageReactJS/main/web/rice.mp3',
      },
      {
        image: 'https://image.flaticon.com/icons/png/512/869/869664.png',
        title: 'Milk',
        isCorrect: false,
        sound:
          'https://raw.githubusercontent.com/thanhnvpk01168/UploadImageReactJS/main/web/milk.mp3',
      },
      {
        image:
          'https://i.pinimg.com/originals/aa/95/01/aa9501df489c885cce3f31b0fc6234ef.png',
        title: 'Coffee',
        isCorrect: false,
        sound:
          'https://raw.githubusercontent.com/thanhnvpk01168/UploadImageReactJS/main/web/couple.mp3',
      },
      {
        image: 'https://img.icons8.com/cotton/2x/like.png',
        title: 'heart',
        isCorrect: false,
        sound:
          'https://raw.githubusercontent.com/thanhnvpk01168/UploadImageReactJS/main/web/heart.mp3',
      },
    ],
  },
];
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
export const Container = ({navigation, progress, setProgress}) => {
  let arrayMP3 = [];
  const [refFlatList, setRefFlatList] = useState();
  return (
    <View style={styles.main}>
      <AnimatedFlatList
        ref={(e) => setRefFlatList(e)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        scrollEnabled={false}
        style={{backgroundColor: 'pink'}}
        data={Data}
        renderItem={({item, index}) => {
          return (
            <RenderItem
              progress={progress}
              setProgress={setProgress}
              item={item}
              index={index}
              length={Data.length}
              refFlatList={refFlatList}
              navigation={navigation}
              arrayMP3={arrayMP3}
            />
          );
        }}
        keyExtractor={(e, index) => `Test_Selected${index}`}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
});
