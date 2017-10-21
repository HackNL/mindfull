import { Navigation } from 'react-native-navigation';

import Main from './Main';
import VideoSession from './VideoSession';
import StilSession from './StilSession';
import ExtraSession from './ExtraSession';
import AudioSession from './AudioSession';

// register all screens of the app (including internal ones)
export function registerScreens() {
    Navigation.registerComponent('Mindfull.Main', () => Main);
    Navigation.registerComponent('Mindfull.video.session', () => VideoSession);
    Navigation.registerComponent('Mindfull.audio.session', () => AudioSession);
    Navigation.registerComponent('Mindfull.extra.session', () => ExtraSession);
    Navigation.registerComponent('Mindfull.stil.session', () => StilSession);
}
