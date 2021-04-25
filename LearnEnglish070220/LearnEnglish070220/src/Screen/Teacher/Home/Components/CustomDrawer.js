import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {LazyImage} from '../../../../Components/Image';
import {
  Feather,
  MaterialCommunityIcons,
} from '../../../../Assets/VectorIcons/Icons';
export const CustomDrawer = ({navigation}) => {
  const [checkedItem, setCheckedItem] = useState(0);
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <LazyImage
          source={require('../../../../Assets/Images/Avatar-User.jpg')}
          style={styles.image}
        />
        <View style={styles.viewName}>
          <Text>Nguyen Bao</Text>
        </View>
        <Image
          //   resizeMode={FastImage.resizeMode.contain}
          source={require('../../../../Assets/Images/School-Buildings.png')}
          style={styles.img1}
        />
      </View>
      <View styles={styles.content}>
        <TouchableOpacity
          onPress={() => {
            if (checkedItem !== 0) {
              setCheckedItem(0);
            }
          }}>
          <View
            style={[
              styles.viewItem,
              {
                backgroundColor:
                  checkedItem == 0 ? 'rgba(0,134,211,0.3)' : 'white',
              },
            ]}>
            <MaterialCommunityIcons
              name="home-outline"
              color={checkedItem == 0 ? '#0086D3' : 'gray'}
              size={23}
            />
            <Text
              style={[
                styles.titleItem,
                {color: checkedItem == 0 ? '#0086D3' : 'gray'},
              ]}>
              Home
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (checkedItem !== 1) {
              setCheckedItem(1);
            }
          }}>
          <View
            style={[
              styles.viewItem,
              {
                backgroundColor:
                  checkedItem == 1 ? 'rgba(0,134,211,0.3)' : 'white',
              },
            ]}>
            <Feather
              name="settings"
              color={checkedItem == 1 ? '#0086D3' : 'gray'}
              size={20}
            />
            <Text
              style={[
                styles.titleItem,
                {color: checkedItem == 1 ? '#0086D3' : 'gray'},
              ]}>
              Student privacy settings
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            if (checkedItem !== 2) {
              setCheckedItem(2);
            }
          }}>
          <View
            style={[
              styles.viewItem,
              {
                backgroundColor:
                  checkedItem == 2 ? 'rgba(0,134,211,0.3)' : 'white',
              },
            ]}>
            <MaterialCommunityIcons
              name="logout"
              color={checkedItem == 2 ? '#0086D3' : 'gray'}
              size={23}
            />
            <Text
              style={[
                styles.titleItem,
                {color: checkedItem == 2 ? '#0086D3' : 'gray'},
              ]}>
              LogOut
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {},
  header: {
    height: 100,
    backgroundColor: '#00A3F9',
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  img1: {
    position: 'absolute',
    right: 0,
    height: 50,
    width: 50,
    resizeMode: 'contain',
    tintColor: 'rgba(128,128,128,0.5)',
  },
  viewName: {
    height: 50,
    justifyContent: 'center',
  },
  content: {},
  viewItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    height: 40,
  },
  titleItem: {
    marginHorizontal: 5,
  },
});
