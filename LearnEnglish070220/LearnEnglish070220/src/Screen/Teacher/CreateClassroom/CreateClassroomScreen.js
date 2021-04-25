import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {HeaderProgressBar, CreateClassroom} from './Components';

export const CreateClassroomScreen = ({navigation}) => {
  const [progress, setProgress] = useState(0);
  return (
    <View style={styles.main}>
      <HeaderProgressBar
        navigation={navigation}
        progress={progress}
        setProgress={setProgress}
      />
      <CreateClassroom navigation={navigation} />
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.buttonBottom}>
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonBottom,
            {backgroundColor: '#FF9400', borderWidth: 0},
          ]}>
          <Text style={{color: 'white'}}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  bottom: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    bottom: 0,
    position: 'absolute',
  },
  buttonBottom: {
    minWidth: '40%',
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#D6D6D6',
  },
});
