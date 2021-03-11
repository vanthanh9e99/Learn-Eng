import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Tts from 'react-native-tts';
Tts.setDefaultLanguage('en-US');

export function RankScreen({}) {
  return (
    <View style={styles.main}>
      <Text>RankScreen</Text>
      <TouchableOpacity
        onPress={async () => {
          Tts.voices().then((voices) => console.log(voices));
          Tts.stop();
          console.log('123123');
          Tts.setDefaultRate(0.5);
          Tts.speak('va');
        }}>
        <Text>Tts.speak</Text>
        <Text>Tts.speak</Text>
        <Text>Tts.speak</Text>
        <Text>Tts.speak</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
});
