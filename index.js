/**
 * @format
 */

import {AppRegistry} from 'react-native';
//  import App from './App';
import MainScreen from './components/MainScreen';
import Robot from './components/Robot';
import MultipleGreeting from './components/MultipleGreeting';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MultipleGreeting);
