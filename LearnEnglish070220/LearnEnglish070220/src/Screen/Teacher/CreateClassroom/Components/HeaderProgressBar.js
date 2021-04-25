import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';

import {Ionicons} from '../../../../Assets/VectorIcons/Icons';
import {Assets} from '../../../../Ultis/Constant';
export const HeaderProgressBar = ({navigation, progress, setProgress}) => {
  const _goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.buttonBack} onPress={_goBack}>
        <Ionicons name={'close-outline'} color={'gray'} size={40} />
      </TouchableOpacity>
      <View style={styles.viewProgressBar}>
        <Progress.Bar
          style={styles.progressBar}
          borderColor={'rgba(192,192,192,0)'}
          progress={progress}
          width={null}
          height={15}
          color={Assets.Colors.Green}
          borderRadius={15}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  buttonBack: {
    flex: 1,
    height: 50,
    maxWidth: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewProgressBar: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  progressBar: {backgroundColor: '#C0C0C0'},
});
