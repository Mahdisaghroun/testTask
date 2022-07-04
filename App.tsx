/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import Button from './src/components/Button';
import AddUserModal from './src/container/AddUserModal/AddModal';
import Home from './src/screen/Home';
import configureStore from './src/store/store';
const store = configureStore({});
const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content"></StatusBar>
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
        <Home></Home>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
