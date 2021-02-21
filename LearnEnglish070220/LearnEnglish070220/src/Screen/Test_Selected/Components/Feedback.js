import React, {useState, useEffect} from 'react';
import {StyleSheet, Alert, Text, View} from 'react-native';

import Animated from 'react-native-reanimated';

import {AntDesign} from '../../../Assets/VectorIcons/Icons';
import {Assets} from '../../../Ultis/Constant';

const AnimatedView = Animated.createAnimatedComponent(View);

export const Feedback = React.memo(({answer, itemRight, animBottom1Style}) => {
  return (
    <AnimatedView
      style={[
        styles.main,
        {
          backgroundColor: answer.isAnswer
            ? Assets.Colors.Green1
            : Assets.Colors.Red,
        },
        animBottom1Style,
      ]}>
      <View style={styles.viewTop1}>
        <Text
          style={[
            styles.title1,
            {
              color: answer.isAnswer ? 'green' : Assets.Colors.Red2,
            },
          ]}>
          {answer.isAnswer ? 'Bạn đã trả lời đúng' : 'Bạn đã trả lời sai'}
        </Text>
        <AntDesign
          name={'flag'}
          size={30}
          color={answer.isAnswer ? 'green' : Assets.Colors.Red2}
        />
      </View>
      <Text
        style={{
          color: answer.isAnswer ? 'green' : Assets.Colors.Red2,
        }}>
        {answer.isAnswer
          ? itemRight[0].title
          : `Câu đúng là ${itemRight[0].title}`}
      </Text>
    </AnimatedView>
  );
});
const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 120,
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 10,
  },
  viewTop1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title1: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'red',
    marginTop: 10,
  },
});
