import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  setStatusBarBackgroundColor,
  setStatusBarStyle,
} from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import { useFonts } from './hooks';
import { AppNavigator } from './navigators';
import { ColorConfig } from '../configs';

export default function App() {
  const { hasFontsLoaded } = useFonts();

  useEffect(() => {
    if (Platform.OS === 'android')
      setStatusBarBackgroundColor(ColorConfig.blue2, false);
    setStatusBarStyle('light');
  }, []);

  if (!hasFontsLoaded) return <AppLoading autoHideSplash={true} />;

  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}

registerRootComponent(App);
