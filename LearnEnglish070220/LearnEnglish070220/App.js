import React, {useEffect, useState} from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/store';
import AppNavigation from './src/Navigation/AppNavigation';
import {StatusBar} from 'react-native';
import {Assets} from './src/Ultis/Constant';

const getUserInfo = async () => {
  return await AsyncStorage.getItem('loginReducer');
};

function App() {
  const [initialRouteName, setInitialRouteName] = useState('FirstScreens');
  useEffect(() => {
    //Hide splash
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
    //Change route
    async function getRoute() {
      let response = await AsyncStorage.getItem('loginReducer');
      if (response) {
        setInitialRouteName('HomeScreen');
      }
    }
    getRoute();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Assets.Colors.StatusBar}}>
      <SafeAreaProvider>
        <StatusBar translucent backgroundColor={Assets.Colors.StatusBar} />
        <StoreProvider store={store}>
          <AppNavigation initialRouteName={initialRouteName} />
        </StoreProvider>
      </SafeAreaProvider>
    </SafeAreaView>
  );
}

export default App;
