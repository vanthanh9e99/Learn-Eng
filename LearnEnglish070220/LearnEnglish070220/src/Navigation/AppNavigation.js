import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';

import {HomeNavigation} from '../Navigation/HomeNavigation';
import {WelcomeScreen} from '../Screen/Welcome';
import {ChooseInformationScreen} from '../Screen/ChooseInformationWelCome';
import {TestSelectedScreen} from '../Screen/Test_Selected';
import {LoginScreen} from '../Screen/Login';
import {HomeScreen as HomeTeacherScreen} from '../Screen/Teacher/Home';

import {saveFromAsync} from '../redux/user/login/action';

const Stack = createStackNavigator();

function FirstScreens({route, navigation}) {
  let initialRouteName = 'WelcomeScreen';
  if (typeof route.params === 'undefined') {
    initialRouteName = 'WelcomeScreen';
  } else {
    initialRouteName = 'LoginScreen';
  }

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen
        name="ChooseInformationScreen"
        component={ChooseInformationScreen}
      />
      <Stack.Screen name="TestSelectedScreen" component={TestSelectedScreen} />

      <Stack.Screen
        name="LoginScreen"
        // component={LoginScreen}
        children={() => (
          <LoginScreen
            isHome={initialRouteName === 'LoginScreen' ? true : false}
            navigation={navigation}
          />
        )}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigation({initialRouteName}) {
  const dispatch = useDispatch();
  useEffect(() => {
    //Change route
    async function getRoute() {
      let response = await AsyncStorage.getItem('loginReducer');
      if (response) {
        dispatch(saveFromAsync(JSON.parse(response)));
      }
    }
    getRoute();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        // initialRouteName={"HomeTeacherScreen"}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeNavigation} />
        <Stack.Screen name="FirstScreens" component={FirstScreens} />
        <Stack.Screen name="HomeTeacherScreen" component={HomeTeacherScreen} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
