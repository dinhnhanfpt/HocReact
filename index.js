/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import MainScreen from './components/MainScreen';
import Robot from './components/Robot';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Robot);
