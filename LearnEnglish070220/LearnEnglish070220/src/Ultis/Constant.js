import {useDimensions} from '@react-native-community/hooks';
export const server = {
  serverURL: '',
};
export const Assets = {
  // Width: useDimensions().window.width,
  Images: {
    //gif
    DualingoWelcome: {
      image: require('../Assets/Gifs/Duolingo_Welcome.gif'),
      size: {w: 500, h: 471},
    },
    DuolingoLoading: {
      image: require('../Assets/Gifs/Duolingo-Loading.gif'),
    },

    //image
    AvatarUser: {
      image: require('../Assets/Images/Avatar-User.jpg'),
    },
    Castle: {
      image: require('../Assets/Images/Castle.png'),
      size: {w: 300, h: 78},
    },
    Logo_Text: {
      image: require('../Assets/Images/logo.png'),
      size: {w: 300, h: 78},
    },
    Vocabulary: {
      image: require('../Assets/Images/Vocabulary.png'),
    },
    Pen: {
      image: require('../Assets/Images/Pen.png'),
    },
    Lamp: {
      image: require('../Assets/Images/Lamp.png'),
    },
    Location: {
      image: require('../Assets/Images/Location.png'),
    },
    Growth: {
      image: require('../Assets/Images/Growth.png'),
    },
    Newbie: {
      image: require('../Assets/Images/Newbie.png'),
    },
    Newbie1: {
      image: require('../Assets/Images/Newbie1.png'),
    },
    Facebook: {
      image: require('../Assets/Images/Facebook.png'),
    },
    Google: {
      image: require('../Assets/Images/Google.png'),
    },
  },

  Colors: {
    StatusBar: '#6AC00D',
    StatusBar_RGBA: 'rgb(106, 192, 13,1)',
    Border_Gray: 'rgba(192,192,192,1)',
    Border_Gray2: 'rgba(128,128,128,1)',
    Border_Gray3: 'rgba(0,0,0,0.7)',

    //Text
    Text_Gray: 'rgba(192,192,192,1)',
    Text_Gray2: 'rgba(128,128,128,1)',
    Text_Gray3: 'rgba(0,0,0,0.7)',
    // color
    ////Green
    Green: '#6AC00D',
    Green1: 'hsl(89, 60%, 70%)',
    Green_Blur1: 'rgba(106, 192, 13,0.2)',
    ////Gray
    Gray: 'rgba(192,192,192,1)',
    Gray2: 'rgba(128,128,128,1)',
    Gray3: 'rgba(0,0,0,0.7)',
    //blue
    Blue_blur: 'hsl(204, 100%, 50%)',
    Blue_blur1: 'hsl(204, 100%, 90%)',
    //Pink
    Pink: 'rgba(255,0,255,0.6)',
    Pink1: 'rgba(255,0,255,1)',
    Pink2: 'rgba(128,0,128,1)',
    ////Black
    Black: 'rgba(0,0,0,0.8)',

    ////Red
    Red: 'hsl(0, 100%, 85%)',
    Red1: 'rgba(255,0,0,0.5)',
    Red2: 'rgba(255,0,0,1)',
    //end

    Color_Facebook: '#4267b2',
  },
};
