import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {AntDesign, FontAwesome5} from '../../../../Assets/VectorIcons/Icons';

export const Header = React.memo(({navigation, item, index}) => {
  return (
    <View style={[styles.main]}>
      <View
        style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
        <FastImage
          resizeMode={FastImage.resizeMode.contain}
          source={require('../../../../Assets/Images/coVN.jpg')}
          style={{width: 70, height: 35}}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome5 name={'crown'} size={25} color={'orange'} />
          <Text
            style={{color: 'orange', fontWeight: 'bold', marginHorizontal: 5}}>
            5
          </Text>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome5 name={'fire'} size={25} color={'orange'} />
          <Text
            style={{color: 'orange', fontWeight: 'bold', marginHorizontal: 5}}>
            5
          </Text>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name={'heart'} size={25} color={'red'} />
          <Text style={{color: 'red', marginHorizontal: 5}}>5</Text>
        </View>
      </View>
    </View>
  );
});
const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 50,
    borderBottomWidth: 2,
    borderColor: 'rgba(192,192,192,0.5)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
