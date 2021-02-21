import React, {useState, useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {useBackHandler} from '@react-native-community/hooks';
import {Container, HeaderProgressBar} from './Components';
const {width} = Dimensions.get('screen');

export function ChooseInformationScreen({navigation}) {
  let abc = 0;
  // const {width} = useDimensions().window;
  const [progress, setProgress] = useState(0);
  const [refFlatList, setRefFlatList] = useState();

  useBackHandler(() => {
    // alert('vao:: ' + abc);
    if (1 == 1) {
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
      return true;
    }
    // let the default thing happen
    return false;
  });

  return (
    <View style={styles.main}>
      <HeaderProgressBar
        navigation={navigation}
        progress={progress}
        setProgress={setProgress}
        refFlatList={refFlatList}
      />
      <Container
        navigation={navigation}
        progress={progress}
        setProgress={setProgress}
        refFlatList={refFlatList}
        setRefFlatList={setRefFlatList}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
});
