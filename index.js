/**
 * @format
 */

import {AppRegistry} from 'react-native';
//  import App from './App';
import MainScreen from './components/MainScreen';
import Robot from './components/Robot';
import Blintext from './components/BlinText';
import MultipleGreeting from './components/MultipleGreeting';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Blintext);
