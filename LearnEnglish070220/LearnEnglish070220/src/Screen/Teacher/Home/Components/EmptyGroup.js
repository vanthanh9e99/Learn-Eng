import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Assets} from '../../../../Ultis/Constant';
export const EmptyGroup = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Image
        source={require('../../../../Assets/Images/No-Group-Yet.png')}
        style={styles.img}
      />
      <Text
        style={{
          fontWeight: 'bold',
          color: Assets.Colors.Text_Gray2,
          fontSize: 16,
        }}>
        Your classrooms will appear here!
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          color: Assets.Colors.Text_Gray,
          fontSize: 16,
          textAlign: 'center',
        }}>
        Create your first classroom to get started with Duolingo for Schools.
      </Text>
      <TouchableOpacity
        style={styles.buttonCreate}
        onPress={() => navigation.navigate('CreateClassroomScreen')}>
        <Text style={styles.titleButton}>Create a classroom</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },
  buttonCreate: {
    minWidth: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF9400',
    borderRadius: 50,
    marginVertical: 15,
  },
  titleButton: {
    color: 'white',
    fontWeight: 'bold',
  },
});
