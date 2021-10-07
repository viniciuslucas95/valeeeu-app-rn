import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './navigators';
import { AccountProvider } from './contexts';

export default function App() {
  return (
    <AccountProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </AccountProvider>
  );
}

registerRootComponent(App);
