/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const RootComponent = () => (
    
      <App />
    
  );
  
  AppRegistry.registerComponent(appName, () => RootComponent);