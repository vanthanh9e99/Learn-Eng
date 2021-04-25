import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import Animated, {
  useAnimatedScrollHandler,
  withTiming,
  Easing,
  useSharedValue,
  useDerivedValue,
  interpolate,
  Extrapolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {
  FontAwesome5,
  MaterialCommunityIcons,
} from '../../../../Assets/VectorIcons/Icons';
import {Assets} from '../../../../Ultis/Constant';
import {LazyImage} from '../../../../Components/Image';

const AnimatedView = Animated.createAnimatedComponent(View);

export const Avatar = React.memo(({scrollY}) => {
  const avatar = useSelector((state) => state.loginReducer.avatar);
  const animXYZ = useDerivedValue(() => {
    return interpolate(scrollY.value, [0, 40], [1, 0.5], Extrapolate.CLAMP);
  });
  const animTranslate = useDerivedValue(() => {
    return interpolate(scrollY.value, [0, 40], [0, 28], Extrapolate.CLAMP);
  });
  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: animXYZ.value,
        },
        {translateX: animTranslate.value},
        {translateY: -animTranslate.value},
      ],
    };
  });
  return (
    <AnimatedView style={[styleAvatar.mainAvatar, animationStyle]}>
      <TouchableOpacity>
        <LazyImage source={{uri: avatar}} style={styleAvatar.avatar} />
        <View style={styleAvatar.viewEdit}>
          <FontAwesome5 name={'pencil-alt'} size={15} color={'white'} />
        </View>
      </TouchableOpacity>
    </AnimatedView>
  );
});
const styleAvatar = StyleSheet.create({
  mainAvatar: {
    width: 80,
    height: 80,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    top: 50,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  viewEdit: {
    backgroundColor: Assets.Colors.Green,
    width: 25,
    height: 25,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    borderWidth: 1.5,
    borderColor: 'white',
  },
});
export const UserInfo = React.memo(() => {
  const id = useSelector((state) => state.loginReducer.id);
  const username = useSelector((state) => state.loginReducer.username);

  return (
    <View style={[styles.main]}>
      <View style={styles.viewLeft}>
        <Text style={styles.username}>{username}</Text>
        <Text>{id}</Text>
      </View>
      <View style={[styles.viewRight]}></View>
    </View>
  );
});
export const UserInfo1 = React.memo(() => {
  return (
    <>
      <View style={styles.viewOtherInformation}>
        <MaterialCommunityIcons
          name={'clock-outline'}
          size={11}
          color={'gray'}
        />
        <Text style={{marginHorizontal: 5, color: 'gray'}}>
          Tham giao thông từ tháng 1 2021
        </Text>
      </View>
      <View style={styles.viewOtherInformation}>
        <FontAwesome5 name={'user-friends'} size={10} color={'gray'} />
        <Text style={{marginHorizontal: 5, color: 'gray'}}>0 bạn bè</Text>
      </View>
    </>
  );
});
const styles = StyleSheet.create({
  main: {
    width: '100%',
    flexDirection: 'row',
    paddingBottom: 5,
  },
  username: {
    fontSize: 18,
    color: 'rgba(1,1,1,0.8)',
    fontWeight: 'bold',
  },
  viewOtherInformation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewLeft: {flex: 1, paddingLeft: 10},
  viewRight: {
    flex: 1,
    maxWidth: 55,
    minWidth: 55,
  },
});
