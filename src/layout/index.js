import { Navigation } from 'react-native-navigation';

import Onboarding from './Onboarding';
import Main from './Main';
import VideoSession from './Sessions/Video';
import StilSession from './Sessions/Stil';
import AudioSession from './Sessions/Audio';
import ExtraSession from './Sessions/Extra';
import Done from './Done';

// register all screens of the app (including internal ones)
export function registerScreens() {
    Navigation.registerComponent('Mindfull.Onboarding', () => Onboarding);
    Navigation.registerComponent('Mindfull.Main', () => Main);
    Navigation.registerComponent('Mindfull.session.video', () => VideoSession);
    Navigation.registerComponent('Mindfull.session.audio', () => AudioSession);
    Navigation.registerComponent('Mindfull.session.extra', () => ExtraSession);
    Navigation.registerComponent('Mindfull.session.stil', () => StilSession);
    Navigation.registerComponent('Mindfull.Done', () => Done);
}
