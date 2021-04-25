import * as React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {CreateClassroomScreen} from '../CreateClassroom';
import {CustomDrawer, EmptyGroup, Header} from './Components';
const Drawer = createDrawerNavigator();

function HomeScreen1({navigation}) {
  return (
    <View style={styles.main}>
      <Header navigation={navigation} />
      <EmptyGroup navigation={navigation} />
    </View>
  );
}

export function HomeScreen() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen1} />
      <Drawer.Screen
        name="CreateClassroomScreen"
        component={CreateClassroomScreen}
      />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
