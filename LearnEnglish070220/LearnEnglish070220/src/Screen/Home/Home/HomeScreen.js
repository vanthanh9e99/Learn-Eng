import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import axios from 'axios';

import {Header} from './Components';
import {RenderItem} from './Components/RenderItem';
import {Data} from './Data';
export function HomeScreen({}) {
  const [data, setData] = useState([]);
  const getDataTopic = () => {
    axios({
      method: 'GET',
      url: 'https://duolingo-v1.herokuapp.com/api/topic',
      headers: {
        'Cache-Control': 'no-cache',
      },
      // timeout: 4000,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        getDataTopic();
      });
  };
  useEffect(() => {
    getDataTopic();
  }, []);
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
