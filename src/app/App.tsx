import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import React from 'react';
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_300Light_Italic,
} from '@expo-google-fonts/roboto';
import {
  setStatusBarBackgroundColor,
  setStatusBarStyle,
} from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { MainNavigator } from './navigators';
import { ColorConfig } from '../configs';
import { Platform } from 'react-native';

export default function App() {
  const [hasFontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_500Medium,
  });
  if (Platform.OS === 'android')
    setStatusBarBackgroundColor(ColorConfig.blue2, false);
  setStatusBarStyle('light');
  if (!hasFontsLoaded) return <AppLoading />;
  return <MainNavigator />;
}

registerRootComponent(App);
