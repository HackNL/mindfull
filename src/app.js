import {Platform, AsyncStorage} from 'react-native';
import {Navigation} from 'react-native-navigation';

// screen related book keeping
import {registerScreens} from './layout';
import generalText from '../resources/data/generalText';

import color from './style/Colors'

registerScreens();

export default class App {
 constructor() {

 }
}

Navigation.startSingleScreenApp({
 screen: {
  //  orientation: 'portrait',
  screen: 'Mindfull.Main',
  title: generalText.main.title,
  navigatorStyle: {
   drawUnderNavBar: true,
   navBarTranslucent: true,
   navBarTransparent: true,
   navBarTitleTextCentered: true,
   navBarTextColor: '#ffffff',
   navBarSubtitleTextColor: '#ffffff',
   navBarButtonColor: '#ffffff',
   topBarElevationShadowEnabled: false,
   navBarNoBorder: true,
   statusBarTextColorScheme: 'light',
   screenBackgroundColor: color.secodary
 },

 },
 appStyle: {
    orientation: 'portrait',
  }
});
