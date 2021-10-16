import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './navigators';
import {
  useFonts,
  Roboto_500Medium,
  Roboto_400Regular_Italic,
} from '@expo-google-fonts/roboto';
import { FugazOne_400Regular } from '@expo-google-fonts/fugaz-one';
import { View } from 'react-native';
import {
  setStatusBarBackgroundColor,
  setStatusBarStyle,
} from 'expo-status-bar';
import { ColorConstant } from '../configs/constants';
import { AccountProvider } from './contexts';
import { LoadScreen } from './screens/loadScreen';

export default function App() {
  const [hasFontsLoaded] = useFonts({
    Roboto_500Medium,
    FugazOne_400Regular,
    Roboto_400Regular_Italic,
  });

  setStatusBarBackgroundColor(ColorConstant.purple, false);
  setStatusBarStyle('light');

  if (!hasFontsLoaded) return <LoadScreen />;

  return (
    <AccountProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </AccountProvider>
  );
}

registerRootComponent(App);
