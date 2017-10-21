import { Navigation } from 'react-native-navigation';

import Main from './Main';
import VideoSession from './VideoSession';

// register all screens of the app (including internal ones)
export function registerScreens() {
    Navigation.registerComponent('Mindfull.Main', () => Main);
    Navigation.registerComponent('Mindfull.VideoSession', () => VideoSession);
}
