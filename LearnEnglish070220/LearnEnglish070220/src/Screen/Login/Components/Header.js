import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Assets} from '../../../Ultis/Constant';

import {Ionicons} from '../../../Assets/VectorIcons/Icons';

export const Header = React.memo(({navigation}) => {
  const _goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.main}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Đăng nhập</Text>
      </View>
      <View style={styles.viewBack}>
        <TouchableOpacity onPress={_goBack}>
          <Ionicons
            name={'close-outline'}
            color={Assets.Colors.Gray2}
            size={35}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
});
const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 50,
  },
  viewBack: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
  },
  touch: {
    padding: 6,
  },
  viewTitle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  title: {
    fontWeight: 'bold',
    color: Assets.Colors.Gray2,
    fontSize: 17,
  },
});
