import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import Animated, {
  useAnimatedScrollHandler,
  withTiming,
  Easing,
  useSharedValue,
} from 'react-native-reanimated';
import {Header} from './Components/Header';
import {NotLoggedIn} from '../Components/NotLoggedIn';
import {Avatar, UserInfo, UserInfo1} from './Components';
import {Assets} from '../../../Ultis/Constant';

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

export function PersonalScreen({navigation}) {
  let arrayMP3 = [];
  const {username, avatar} = useSelector((state) => state.loginReducer);

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });
  return (
    <View style={styles.main}>
      <Header />
      {username.trim().length == 0 ? (
        <NotLoggedIn
          navigation={navigation}
          title={'Bạn cần đăng nhập để kết nối bạn bè'}
        />
      ) : (
        <>
          <UserInfo />
          <Avatar scrollY={scrollY} />
          <AnimatedScrollView
            onScroll={scrollHandler}
            style={{paddingHorizontal: 5}}
            stickyHeaderIndices={[1]}
            showsVerticalScrollIndicator={false}>
            <UserInfo1 />
            <View
              style={{
                borderTopWidth: 2,
                borderColor: Assets.Colors.Gray,
              }}></View>
            <Text>
              Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc
              {'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test
              abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}
              Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc
              {'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test
              abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}
              Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc
              {'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test
              abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}
              Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc
              {'\n'}Test abc{'\n'}
              Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc
              {'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test
              abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}
              Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc
              {'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test
              abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}
              Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc
              {'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test
              abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}
              Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc{'\n'}Test abc
              {'\n'}Test abc{'\n'}
            </Text>
          </AnimatedScrollView>
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
});
