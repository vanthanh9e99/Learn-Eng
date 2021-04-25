import React, {useState, useRef} from 'react';
import {Alert, StyleSheet, Text, View, Keyboard} from 'react-native';
import FastImage from 'react-native-fast-image';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {loginEmail} from '../../../redux/user/login/action';

import {Assets} from '../../../Ultis/Constant';
import {Loading1} from '../../../Components/Loading';

export const LoginEmail = React.memo(({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showLoadingLogin, setShowLoadingLogin] = useState(false);
  const dispatch = useDispatch();
  const _loginEmail = () => {
    /////////////////
    /////////////////
    /////////////////
    /////////////////
    axios.post(
      'url',
      {
        body: {
          username: 'VanThanh',
          password: '123456',
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${user.token}`,
        },
      },
    )
    axios({
      method: 'post',
      url: 'https://duolingo-v1.herokuapp.com/api/login',
      data: {
        username: 'VanThanh',
        password: '123456',
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${user.token}`,
      },
    })
      .then((res) => {
        //res.data
      })
      .catch(() => {});
    //////////////
    //////////////
    //////////////
    //////////////
    Keyboard.dismiss();
    setShowLoadingLogin(true);
    axios({
      method: 'post',
      url: 'https://duolingo-v1.herokuapp.com/api/login',
      data: {
        email: username,
        passWord: password,
      },
    })
      .then((res) => {
        setShowLoadingLogin(false);
        dispatch(
          loginEmail({
            username: username,
            token: res.data.token,
            id: '12314',
            avatar:
              'https://i.pinimg.com/originals/64/a8/13/64a81329eb236b62fc6ca92298e62280.jpg',
          }),
        );
        AsyncStorage.setItem(
          'loginReducer',
          JSON.stringify({
            username: username,
            token: res.data.token,
            id: '12314',
            avatar:
              'https://i.pinimg.com/originals/64/a8/13/64a81329eb236b62fc6ca92298e62280.jpg',
          }),
        );
      })
      .catch(() => {
        setShowLoadingLogin(false);
        Alert.alert(
          'Đăng nhập thất bại',
          'Tài khoản và mật khẩu không chính xác.',
        );
      });
  };
  return (
    <View style={styles.main}>
      <TextInput
        style={[styles.textInputUsername, styles.textInput]}
        placeholder={'Tên đăng nhập hoặc email'}
        onChangeText={(text) => setUsername(text.trim())}
        value={username}
      />
      <TextInput
        style={[styles.textInputPassword, styles.textInput]}
        placeholder={'Mật khẩu'}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text.trim())}
        value={password}
      />
      <TouchableOpacity
        disabled={username.length == 0 || password.length == 0 ? true : false}
        style={[
          styles.touchLogin,
          {
            backgroundColor:
              username.length == 0 || password.length == 0
                ? Assets.Colors.Gray
                : Assets.Colors.Green,
          },
        ]}
        onPress={() => _loginEmail()}>
        <Text
          style={[
            styles.titleButtonLogin,
            {
              color:
                username.length == 0 || password.length == 0
                  ? Assets.Colors.Gray2
                  : 'white',
            },
          ]}>
          Đăng nhập
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>QUÊN MẬT KHẨU</Text>
      </TouchableOpacity>
      <View style={styles.viewBottom}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.otherLogin}>
            <TouchableOpacity
              style={styles.touchLoginFaceAndGoogle}
              onPress={() => {
                dispatch(
                  login({type: 'facebook', data: {navigation: navigation}}),
                );
              }}>
              <FastImage
                resizeMode={FastImage.resizeMode.contain}
                source={Assets.Images.Facebook.image}
                style={{width: 25, height: 25}}
              />
              <Text style={styles.titleFacebook}>FACEBOOK</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.otherLogin}>
            <TouchableOpacity
              style={styles.touchLoginFaceAndGoogle}
              onPress={async () => {
                dispatch(
                  login({type: 'google', data: {navigation: navigation}}),
                );
              }}>
              <FastImage
                resizeMode={FastImage.resizeMode.contain}
                source={Assets.Images.Google.image}
                style={{width: 25, height: 25}}
              />
              <Text style={styles.titleFacebook}>GOOGLE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.privacyPolicy}>
          Khi đăng ký trên Duolingo, Bạn đã đông ý với{' '}
          <Text style={{fontWeight: 'bold'}}>Các chính sách</Text> và{' '}
          <Text style={{fontWeight: 'bold'}}>Chính sách bảo mật</Text> của chúng
          tôi.
        </Text>
      </View>

      {showLoadingLogin ? (
        <Loading1
          backgroundColor={'rgba(255,255,255,.4)'}
          title={'Đang đăng nhập'}
        />
      ) : null}
    </View>
  );
});
const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    paddingVertical: 20,
    flex: 1,
  },
  textInput: {
    minWidth: '85%',
    maxWidth: '85%',
    height: 45,
    borderColor: Assets.Colors.Gray,
    paddingHorizontal: 10,
  },
  textInputUsername: {
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    fontSize: 16,
  },
  textInputPassword: {
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    fontSize: 16,
  },
  touchLogin: {
    minWidth: '85%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 10,
  },
  touchLoginFaceAndGoogle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleButtonLogin: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  forgotPassword: {
    fontWeight: 'bold',
    color: Assets.Colors.Blue_blur,
  },
  viewBottom: {
    flex: 1,
    minWidth: '100%',
    justifyContent: 'flex-end',
  },
  otherLogin: {
    flex: 1,
    borderWidth: 1,
    borderColor: Assets.Colors.Gray,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  titleFacebook: {
    color: Assets.Colors.Color_Facebook,
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  privacyPolicy: {
    color: Assets.Colors.Gray2,
    textAlign: 'center',
    paddingTop: 15,
  },
});
