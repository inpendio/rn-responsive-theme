import React,{useState, useRef, useEffect, ReactElement} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ThemeProvider from 'rn-responsive-theme';
import Root from './src/Root';

declare const global: { HermesInternal: null | {} };

console.log(111,{global,ThemeProvider});


function App():ReactElement {
  console.log(333,{global},View);
  return (
    <ThemeProvider view={View}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Root/>
      </SafeAreaView>
</ThemeProvider>
  );
};

const styles = {
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
};

export default App;
