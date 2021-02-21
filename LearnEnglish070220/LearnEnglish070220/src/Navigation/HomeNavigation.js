import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen} from '../Screen/Home/Home';
import {PersonalScreen} from '../Screen/Home/Personal';
import {RankScreen} from '../Screen/Home/Rank';
import {StoreScreen} from '../Screen/Home/Store';
import FastImage from 'react-native-fast-image';

const Tab = createBottomTabNavigator();

export function HomeNavigation({}) {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          activeTintColor: 'green',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 14,
          },
          style: {
            minHeight: 55,
          },
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'HomeScreen',
            tabBarIcon: ({focused, color, size}) =>
              focused ? (
                <FastImage
                  resizeMode={FastImage.resizeMode.contain}
                  source={require('../Assets/Images/Home.png')}
                  style={styles.img}
                />
              ) : (
                <FastImage
                  resizeMode={FastImage.resizeMode.contain}
                  source={require('../Assets/Images/Home1.png')}
                  style={styles.img}
                />
              ),
          }}
        />
        <Tab.Screen
          name="PersonalScreen"
          component={PersonalScreen}
          options={{
            tabBarLabel: 'PersonalScreen',
            tabBarIcon: ({focused, color, size}) =>
              focused ? (
                <FastImage
                  resizeMode={FastImage.resizeMode.contain}
                  source={require('../Assets/Images/Man.png')}
                  style={styles.img}
                />
              ) : (
                <FastImage
                  resizeMode={FastImage.resizeMode.contain}
                  source={require('../Assets/Images/Man1.png')}
                  style={styles.img}
                />
              ),
          }}
        />
        <Tab.Screen
          name="RankScreen"
          component={RankScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused, color, size}) =>
              focused ? (
                <FastImage
                  resizeMode={FastImage.resizeMode.contain}
                  source={require('../Assets/Images/Shield.png')}
                  style={styles.img}
                />
              ) : (
                <FastImage
                  resizeMode={FastImage.resizeMode.contain}
                  source={require('../Assets/Images/Shield1.png')}
                  style={styles.img}
                />
              ),
          }}
        />
        <Tab.Screen
          name="StoreScreen"
          component={StoreScreen}
          options={{
            tabBarLabel: 'StoreScreen',
            tabBarIcon: ({focused, color, size}) =>
              focused ? (
                <FastImage
                  resizeMode={FastImage.resizeMode.contain}
                  source={require('../Assets/Images/Store.png')}
                  style={styles.img}
                />
              ) : (
                <FastImage
                  resizeMode={FastImage.resizeMode.contain}
                  source={require('../Assets/Images/Store1.png')}
                  style={styles.img}
                />
              ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
const styles = StyleSheet.create({
  img: {
    width: 35,
    height: 35,
  },
});
