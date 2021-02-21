import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Feather} from '../../../../Assets/VectorIcons/Icons';
import {Assets} from '../../../../Ultis/Constant';

export const Header = React.memo(() => {
  _settting = () => {
    alert('setting');
  };
  return (
    <View style={[styles.main]}>
      <Text style={styles.title}>Hồ sơ</Text>
      <View style={styles.viewSetting}>
        <TouchableOpacity activeOpacity={0.6} onPress={_settting}>
          <Feather name={'settings'} color={Assets.Colors.Green} size={30} />
        </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Assets.Colors.Gray2,
  },
  viewSetting: {
    position: 'absolute',
    right: 0,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
