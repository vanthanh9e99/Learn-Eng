import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export function StoreScreen({}) {
  return (
    <View style={styles.main}>
      <Text>StoreScreen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
});
