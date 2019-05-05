/**
 * @format
 */

import {AppRegistry} from 'react-native';
//  import App from './App';
import MainScreen from './components/MainScreen';
import Robot from './components/Robot';
import Blintext from './components/BlinText';
import MultipleGreeting from './components/MultipleGreeting';
import Mystylesheet from './components/myStyleSheet';
import MyDimentsion from './components/Dimentsion';
import MyTextInput from './components/MyTextInput';
import MyButton from './components/myButton';
import VerticalScrollView from './components/VerticalScrollView';
import HorizontalScrollView from './components/HorizontalScrollView';
import MyViewPager from './components/MyViewPager';
import myFlatList from './components/myFlatList';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => myFlatList);
