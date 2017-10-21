import {
  Dimensions
} from 'react-native';

export const NavigationStyle = {
  navBarTitleTextCentered: true,
  navBarTextColor: '#ffffff',
  navBarSubtitleTextColor: '#ffffff',
  navBarButtonColor: '#ffffff',
  topBarElevationShadowEnabled: false,
  navBarNoBorder: true,
  drawUnderNavBar: true,
  navBarTranslucent: true,
};

export const appVars = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
};
