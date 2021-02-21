import React, {useState, useEffect} from 'react';
import {Dimensions, StyleSheet, Alert, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  Easing,
  withTiming,
} from 'react-native-reanimated';
import Sound from 'react-native-sound';

import {Feedback} from './Feedback';
import {Ionicons} from '../../../Assets/VectorIcons/Icons';
import {Assets} from '../../../Ultis/Constant';
const {width} = Dimensions.get('screen');

const AnimatedView = Animated.createAnimatedComponent(View);

export const RenderItem = React.memo(
  ({navigation, item, index, length, setProgress, refFlatList, arrayMP3}) => {
    const [answer, setAnswer] = useState({
      id: 0,
      isAnswer: false,
      answered: false,
    });
    const animBottom1 = useSharedValue(120);
    const animBottom1Style = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: animBottom1.value,
          },
        ],
      };
    });
    const startAnimBottom1 = (value) => {
      animBottom1.value = withTiming(0, {
        duration: 800,
        easing: Easing.out(Easing.exp),
      });
    };

    const _checkAnswer = (value) => {
      if (answer.answered) {
        refFlatList.scrollToOffset({
          animated: true,
          offset: width * value,
        });
        if (length == value) {
          navigation.replace('HomeScreen');
        }
      } else {
        startAnimBottom1();
        setAnswer({...answer, answered: true});
        setProgress(value / length);
      }
    };
    return (
      <View style={[styles.main]}>
        <View style={styles.viewTitle}>
          <View style={styles.viewIconTitle}>
            <Ionicons name={'flask'} color={'white'} size={18} />
          </View>
          <Text style={styles.title}>Từ vựng mới</Text>
        </View>
        <Text style={styles.content}>{item.content}</Text>
        <FlatList
          data={item.answers}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <View style={styles.viewItem}>
                <View
                  style={[
                    styles.ItemCard,
                    {
                      backgroundColor:
                        index + 1 == answer.id
                          ? Assets.Colors.Green_Blur1
                          : 'white',
                      borderColor:
                        index + 1 == answer.id
                          ? Assets.Colors.Green
                          : Assets.Colors.Gray,
                    },
                  ]}>
                  <TouchableOpacity
                    disabled={answer.answered}
                    activeOpacity={0.6}
                    onPress={() => {
                      const array = arrayMP3.filter((e) => e.id === item.title);
                      if (array.length == 0) {
                        console.log('vao if');
                        const track = new Sound(item.sound, null, () => {
                          track.play();
                          arrayMP3.push({id: item.title, music: track});
                        });
                      } else {
                        console.log('vao else');
                        array[0].music.play();
                      }
                      setAnswer({id: index + 1, isAnswer: item.isCorrect});
                    }}
                    style={styles.touchItem}>
                    <FastImage
                      resizeMode={FastImage.resizeMode.contain}
                      source={{uri: item.image}}
                      style={styles.img}
                    />
                    <Text>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
          keyExtractor={(e, index) => `renderItemTestSelected${index}`}
        />
        <Feedback
          itemRight={item.answers.filter((e) => e.isCorrect)}
          answer={answer}
          animBottom1Style={animBottom1Style}
        />
        <View style={styles.viewBottom}>
          <TouchableOpacity
            activeOpacity={0.6}
            disabled={answer.id == 0 ? true : false}
            onPress={() => _checkAnswer(index + 1)}
            style={[
              styles.touchCheck,
              {
                backgroundColor:
                  answer.isAnswer && answer.answered
                    ? Assets.Colors.Green
                    : !answer.isAnswer && answer.answered
                    ? Assets.Colors.Red2
                    : answer.id == 0 || answer.id == 0
                    ? Assets.Colors.Gray
                    : Assets.Colors.Green,
              },
            ]}>
            <Text
              style={
                (styles.titleCheck,
                [
                  {
                    color:
                      answer.id == 0 || answer.id == 0
                        ? Assets.Colors.Gray2
                        : 'white',
                  },
                ])
              }>
              {answer.answered ? 'Tiếp tục' : 'Kiểm tra'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  },
);
const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: width,
    backgroundColor: 'white',
    paddingBottom: 50,
  },
  viewTitle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  viewIconTitle: {
    width: 33,
    height: 33,
    borderRadius: 33,
    backgroundColor: Assets.Colors.Pink,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Assets.Colors.Pink,
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
  },
  content: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Assets.Colors.Black,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  viewItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  ItemCard: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '80%',
    paddingVertical: 20,
    borderWidth: 2,
    borderBottomWidth: 4,
  },
  touchItem: {
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '80%',
  },
  img: {
    width: 200,
    height: 100,
    marginBottom: 10,
  },
  viewBottom: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchCheck: {
    minWidth: '85%',
    maxWidth: '85%',
    height: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  titleCheck: {
    fontWeight: 'bold',
    fontSize: 17,
  },
});
