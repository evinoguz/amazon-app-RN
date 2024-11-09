import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Router from './src/navigation/Router';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'#9ee4d4'} barStyle={'dark-content'} />
      <Router />
    </SafeAreaView>
  );
};

export default App;
