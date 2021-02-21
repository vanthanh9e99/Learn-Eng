import React, {useState, useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Ionicons} from '../../../Assets/VectorIcons/Icons';
import * as Progress from 'react-native-progress';
import {Assets} from '../../../Ultis/Constant';
const {width} = Dimensions.get('screen');
export const HeaderProgressBar = ({
  navigation,
  progress,
  setProgress,
  refFlatList,
}) => {
  // const {width} = useDimensions().window;
  const _goBack = () => {
    if (progress == 0) {
      navigation.goBack();
    } else if (progress == 0.2) {
      refFlatList.scrollToOffset({
        animated: true,
        offset: 0,
      });
      setProgress(0);
    } else if (progress == 0.4) {
      refFlatList.scrollToOffset({
        animated: true,
        offset: width * 1,
      });
      setProgress(0.2);
    } else if (progress == 0.6) {
      refFlatList.scrollToOffset({
        animated: true,
        offset: width * 2,
      });
      setProgress(0.4);
    } else if (progress == 0.8) {
      refFlatList.scrollToOffset({
        animated: true,
        offset: width * 3,
      });
      setProgress(0.6);
    } else {
      refFlatList.scrollToOffset({
        animated: true,
        offset: width * 4,
      });
      setProgress(0.8);
    }
  };
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.buttonBack} onPress={_goBack}>
        <Ionicons name={'arrow-back-outline'} size={25} color={'gray'} />
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
