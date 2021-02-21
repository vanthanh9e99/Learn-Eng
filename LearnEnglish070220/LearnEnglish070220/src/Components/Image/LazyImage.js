import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Assets} from '../../Ultis/Constant';
import {Ionicons} from '../../Assets/VectorIcons/Icons';

export function LazyImage({style, source}) {
  const viewRef = useRef();
  return (
    <View>
      <FastImage
        resizeMode={FastImage.resizeMode.contain}
        source={source}
        style={style}
        onLoadStart={(e) =>
          viewRef.current.setNativeProps({
            opacity: 1,
          })
        }
        onLoad={() => {
          viewRef.current.setNativeProps({
            opacity: 0,
          });
        }}
      />
      <View ref={viewRef} style={[style, styles.img]}>
        <Ionicons
          name={'images-outline'}
          size={20}
          color={Assets.Colors.Gray2}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  img: {
    backgroundColor: Assets.Colors.Gray,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});
