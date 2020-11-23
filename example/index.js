import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

console.log(222, {AppRegistry,App});

AppRegistry.registerComponent(appName, () => App);
