import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useBackHandler} from '@react-native-community/hooks';

import {Loading1} from '../../Components/Loading';
import {HeaderProgressBar} from './Components/HeaderProgressBar';
import {Container} from './Components';

export function TestSelectedScreen({navigation}) {
  const [showLoading, setShowLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  useBackHandler(() => {
    if (1 == 1) {
      navigation.goBack();
      return true;
    }
    return false;
  });
  useEffect(() => {
    setShowLoading(false);
  }, []);
  return (
    <View style={styles.main}>
      <HeaderProgressBar
        navigation={navigation}
        progress={progress}
        setProgress={setProgress}
      />
      <Container
        navigation={navigation}
        progress={progress}
        setProgress={setProgress}
      />
      {showLoading ? <Loading1 /> : null}
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
});
