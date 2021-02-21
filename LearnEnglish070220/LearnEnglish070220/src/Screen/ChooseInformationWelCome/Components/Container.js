import React, {useState, useRef} from 'react';
import {StyleSheet,  Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import {Screen1, Screen2, Screen3, Screen4, Screen5} from './Screen';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export const Container = ({
  navigation,
  progress,
  setProgress,
  refFlatList,
  setRefFlatList,
}) => {
  return (
    <View style={styles.main}>
      <AnimatedFlatList
        ref={(e) => {
          setRefFlatList(e);
        }}
        scrollEnabled={false}
        pagingEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={[1, 2, 3, 4, 5]}
        renderItem={({item, index}) => {
          return item == 1 ? (
            <Screen1
              navigation={navigation}
              progress={progress}
              setProgress={setProgress}
              refFlatList={refFlatList}
            />
          ) : item == 2 ? (
            <Screen2
              navigation={navigation}
              progress={progress}
              setProgress={setProgress}
              refFlatList={refFlatList}
            />
          ) : item == 3 ? (
            <Screen3
              navigation={navigation}
              progress={progress}
              setProgress={setProgress}
              refFlatList={refFlatList}
            />
          ) : item == 4 ? (
            <Screen4
              navigation={navigation}
              progress={progress}
              setProgress={setProgress}
              refFlatList={refFlatList}
            />
          ) : (
            <Screen5
              navigation={navigation}
              progress={progress}
              setProgress={setProgress}
              refFlatList={refFlatList}
            />
          );
        }}
        keyExtractor={(item, index) => `ChooseInformationScreen${index}`}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
