import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {Header} from './Components';
import {RenderItem} from './Components/RenderItem';
import {Data} from './Data';
export function HomeScreen({}) {
  return (
    <View style={styles.main}>
      <Header />
      <FlatList
        data={Data}
        scrollEventThrottle={16}
        renderItem={({item, index}) => {
          return <RenderItem item={item} index={index} />;
        }}
        keyExtractor={(item, index) => `RenderItemHome${index}`}
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
