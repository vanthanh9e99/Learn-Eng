import React, {useState, useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import {Assets} from '../../../../Ultis/Constant';
import {AntDesign} from '../../../../Assets/VectorIcons/Icons';
import Animated from 'react-native-reanimated';
import {Modal1} from '../../../../Components/Modal/Modal1';
const {width, height} = Dimensions.get('window');
const AnimatedView = Animated.createAnimatedComponent(View);
export const CreateClassroom = ({}) => {
  const [className, setClassName] = useState('');
  const [studying, setStudying] = useState('English');
  const [speak, setSpeak] = useState('Vietnamese');
  const [isModalVisible, setModalVisible] = useState(false);

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
        <TouchableOpacity activeOpacity={0.7}>
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
            <AntDesign name={'down'} size={15} color={'gray'} />
          </View>
        </TouchableOpacity>
      </View>
      {/* speak */}
      <View style={{paddingHorizontal: 10, marginTop: 10}}>
        <Text style={styles.titleInput}>My students speak...</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setModalVisible(true);
          }}>
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
            <AntDesign name={'down'} size={15} color={'gray'} />
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        // animationIn="zoomInDown"
        //         animationOut="zoomOutUp"
        //         animationInTiming={600}
        //         animationOutTiming={600}
        //         backdropTransitionInTiming={600}
        //         backdropTransitionOutTiming={600}
        //end

        useNativeDriver={true}
        backdropOpacity={1}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
        onBackButtonPress={() => {
          setModalVisible(false);
        }}
        isVisible={isModalVisible}
        backdropColor={'rgba(1,0,0,.5)'}>
        <View style={{ backgroundColor: 'white', padding: 40}}>
          <TouchableOpacity onPress={() => alert('fg')}>
            <Text>Hello!</Text>
            <Text>Hello!</Text>
            <Text>Hello!</Text>
            <Text>Hello!</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
