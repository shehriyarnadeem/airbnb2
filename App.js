import React from 'react';
import {useColorScheme, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Router from './src/navigation/Router';
import HomeScreen from './src/screens/Home';
import Feeds from './assets/data/feed';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const posts = Feeds[0];

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return <Router />;
};

export default App;
