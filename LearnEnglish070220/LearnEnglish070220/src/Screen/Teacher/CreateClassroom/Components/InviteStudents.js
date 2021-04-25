import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Assets} from '../../../../Ultis/Constant';
import {AntDesign} from '../../../../Assets/VectorIcons/Icons';

export const CreateClassroom = ({}) => {
  const [className, setClassName] = useState('');
  const [studying, setStudying] = useState('English');
  const [speak, setSpeak] = useState('Vietnamese');
  return (
    <View style={styles.main}>
      <Text style={[styles.title, {textAlign: 'center'}]}>
        Create a classroom
      </Text>
      {/* className */}
      <View style={{paddingHorizontal: 10, marginTop: 10}}>
        <Text style={styles.titleInput}>Name of your classroom</Text>
        <TextInput
          style={styles.inputClassName}
          onChangeText={(text) => setClassName(text)}
          value={className}
        />
      </View>
      {/* studying */}
      <View style={{paddingHorizontal: 10, marginTop: 10}}>
        <Text style={styles.titleInput}>My students are studying...</Text>
        <TouchableOpacity>
          <View
            style={[
              styles.inputClassName,
              {
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
              },
            ]}>
            <Text>{studying}</Text>
            <AntDesign name={'down'} size={20} color={'gray'} />
          </View>
        </TouchableOpacity>
      </View>
      {/* speak */}
      <View style={{paddingHorizontal: 10, marginTop: 10}}>
        <Text style={styles.titleInput}>My students speak...</Text>
        <TouchableOpacity>
          <View
            style={[
              styles.inputClassName,
              {
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
              },
            ]}>
            <Text>{speak}</Text>
            <AntDesign name={'down'} size={20} color={'gray'} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleInput: {
    color: Assets.Colors.Text_Gray3,
  },
  inputClassName: {
    minWidth: '100%',
    height: 45,
    borderWidth: 2,
    borderColor: Assets.Colors.Gray,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
});
