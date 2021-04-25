import React, {useState, useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
const {width, height} = Dimensions.get('window');
const AnimatedView = Animated.createAnimatedComponent(View);
export const Modal1 = ({showModal, content}) => {
  const animScale = useSharedValue(0);
  const animScaleStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: animScale.value}],
    };
  });
  useEffect(() => {
    if (showModal) {
      animScale.value = withTiming(1, {
        duration: 1000,
        easing: Easing.linear,
      });
    } else {
      animScale.value = withTiming(0, {
        duration: 1000,
        easing: Easing.linear,
      });
    }
  }, [showModal]);
  return (
    <AnimatedView style={styles.modalMain}>
      <TouchableOpacity
        style={{
          width,
          height,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <AnimatedView style={[styles.modal, animScaleStyle]}>
          {content}
        </AnimatedView>
      </TouchableOpacity>
    </AnimatedView>
  );
};
const styles = StyleSheet.create({
  modalMain: {
    width: '100%',
    height,
    position: 'absolute',
    backgroundColor: 'rgba(1,1,1,0.5)',
    zIndex: 100,
    top: -50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
