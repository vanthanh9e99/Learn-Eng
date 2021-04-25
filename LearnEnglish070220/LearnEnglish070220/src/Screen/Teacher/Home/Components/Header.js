import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '../../../../Assets/VectorIcons/Icons';
export const Header = ({navigation}) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <MaterialCommunityIcons name={'menu'} color={'white'} size={30} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    height: 50,
    backgroundColor: 'rgb(0,163,249)',
    justifyContent: 'center',
    paddingLeft: 10,
  },
});
