import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';
import axios from 'axios';

function* getUserInformation_Facebook(data) {  
  let result = {status: true};
  yield axios
    .get(
      `https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=${data.accessToken.toString()}`,
      {
        headers: {
          // Authorization: 'Bearer ' + token,
          'Cache-Control': 'no-cache',
        },
      },
    )
    .then((res) => {
      result = {
        status: true,
        data: {
          id: res.data.id,
          username: res.data.name,
          avatar: `https://graph.facebook.com/${res.data.id}/picture?type=large`,
        },
      };
    })
    .catch((error) => {
      result = {status: false};
    });

  return result;
}
export const Api = {
  getUserInformation_Facebook,
};
