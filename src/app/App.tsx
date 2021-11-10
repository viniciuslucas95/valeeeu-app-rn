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
import { AppNavigator } from './navigators';
import { ColorConfig } from '../configs';
import { Platform, SafeAreaView } from 'react-native';
import { AccountProvider, AuthProvider, ModalProvider } from './contexts';

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ModalProvider>
        <AuthProvider>
          <AccountProvider>
            <AppNavigator />
          </AccountProvider>
        </AuthProvider>
      </ModalProvider>
    </SafeAreaView>
  );
}

registerRootComponent(App);
