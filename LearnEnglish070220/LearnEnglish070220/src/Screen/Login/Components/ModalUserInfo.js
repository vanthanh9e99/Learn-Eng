import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Assets} from '../../../Ultis/Constant';
import {LazyImage} from '../../../Components/Image';

const AnimatedView = Animated.createAnimatedComponent(View);
const {width, height} = Dimensions.get('screen');

export const ModalUserInfo = React.memo(({navigation, isHome}) => {
  const {username, avatar} = useSelector((state) => state.loginReducer);

  const animTranslateX = useSharedValue(-width);
  const animTranslateXView = useSharedValue(-width);
  const animOpacityViewBelow = useSharedValue(0);

  const animTranslateXStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: animTranslateX.value,
        },
      ],
    };
  });
  const animOpacityViewBelowStyle = useAnimatedStyle(() => {
    return {
      opacity: animOpacityViewBelow.value,
    };
  });
  const animTranslateXViewStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: animTranslateXView.value,
        },
      ],
    };
  });

  const startAnimTranslateX = (translateX, opacity) => {
    animTranslateXView.value = 0;
    animOpacityViewBelow.value = withTiming(opacity);
    animTranslateX.value = withTiming(translateX, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
  };
  useEffect(() => {
    if (username.trim().length != 0) {
      startAnimTranslateX(0, 1);
    }
  }, [username]);
  return (
    <AnimatedView style={[styles.main, animTranslateXViewStyle]}>
      <AnimatedView
        style={[styles.viewBelow, animOpacityViewBelowStyle]}></AnimatedView>
      <AnimatedView style={[styles.container, animTranslateXStyle]}>
        <LazyImage
          source={
            avatar.trim().length == 0
              ? Assets.Images.AvatarUser.image
              : {uri: avatar}
          }
          style={styles.img}
        />
        <Text style={styles.username}>{username}</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.touchContinue}
          onPress={() =>
            isHome ? navigation.goBack() : navigation.replace('HomeScreen')
          }>
          <Text style={styles.continue}>Tiếp tục</Text>
        </TouchableOpacity>
      </AnimatedView>
    </AnimatedView>
  );
});
const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBelow: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  container: {
    // borderWidth: 2,
    // borderColor: Assets.Colors.Gray,
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: (width * 30) / 100,
    height: (width * 30) / 100,
    borderRadius: width,
  },
  username: {
    color: Assets.Colors.Green,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
  },
  touchContinue: {
    width: (width * 40) / 100,
    height: 30,
    backgroundColor: Assets.Colors.Green,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continue: {
    color: 'white',
  },
});
