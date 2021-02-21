import React, {useState, useEffect} from 'react';
import {Dimensions, StyleSheet, Image, Alert, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Assets} from '../../../../Ultis/Constant';
import Svg, {G, Circle} from 'react-native-svg';

const {width} = Dimensions.get('screen');
const d = width / 4;
const strokeWidth = 7;
const halfCircle = d / 2 + strokeWidth;
export const RenderItem = React.memo(({navigation, item, index}) => {
  const disble = item.opened;
  return (
    <View style={[styles.main]}>
      {item.chapter.map((item, index) => {
        const [circumference, setCircumference] = useState(
          d * Math.PI - (item.part * d * Math.PI) / item.maxPart,
        );
        return (
          <View key={`renderItemDetail${index}`} style={styles.mainItem}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.touch}
              onPress={() => {}}>
              <View style={styles.containerItem}>
                <View
                  style={[
                    styles.viewImg,
                    {
                      backgroundColor: item.opened
                        ? Assets.Colors.Blue_blur1
                        : 'rgba(192,192,192,0.5)',
                    },
                  ]}>
                  <FastImage
                    resizeMode={FastImage.resizeMode.contain}
                    source={require('../../../../Assets/Images/Dinosaur-Egg.png')}
                    style={[styles.img]}
                  />
                  {item.opened ? null : (
                    <Image
                      resizeMode={FastImage.resizeMode.contain}
                      source={require('../../../../Assets/Images/Dinosaur-Egg.png')}
                      style={[
                        styles.img,
                        {
                          position: 'absolute',
                          tintColor: 'rgba(173, 173, 173,0.75)',
                        },
                      ]}
                    />
                  )}
                </View>

                <Svg
                  style={styles.svg}
                  height={d}
                  width={d}
                  viewBox={`0 0 ${d + strokeWidth} ${d + strokeWidth}`}>
                  <G
                    rotation="-90"
                    origin={`${(d + strokeWidth) / 2}, ${
                      (d + strokeWidth) / 2
                    }`}>
                    <Circle
                      // ref={circleRef}
                      cx="50%"
                      cy="50%"
                      r={d / 2}
                      fill="transparent"
                      stroke={Assets.Colors.Green}
                      strokeWidth={strokeWidth}
                      strokeLinecap="round"
                      strokeDashoffset={circumference}
                      strokeDasharray={d * Math.PI}
                    />
                    <Circle
                      cx="50%"
                      cy="50%"
                      r={d / 2}
                      fill="transparent"
                      stroke={Assets.Colors.Gray3}
                      strokeWidth={strokeWidth}
                      strokeLinejoin="round"
                      strokeOpacity=".1"
                    />
                  </G>
                </Svg>
              </View>
              <Text style={[styles.title, {opacity: item.opened ? 1 : 0.5}]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
});
const styles = StyleSheet.create({
  main: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  mainItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerItem: {
    width: width / 4,
    height: width / 4,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svg: {
    position: 'absolute',
  },
  viewImg: {
    width: width / 5.2,
    height: width / 5.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width / 5.2,
  },
  img: {
    width: width / 8,
    height: width / 8,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Assets.Colors.Gray3,
  },
  touch: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
