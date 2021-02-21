import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../../redux/user/login/action';

import {Assets} from '../../../Ultis/Constant';

export const LoginEmail = React.memo(({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
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
        ]}>
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
      {/* {loadingLogin ? <Loading1 /> : null} */}
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
