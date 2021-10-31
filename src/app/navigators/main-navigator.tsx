import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AccountProvider } from '../context';
import { MainScreen } from '../data-types/enums/screens';
import { AccountStackNavigation } from './account-navigation';
import { TabNavigation } from './tab-navigation';

const Stack = createStackNavigator();

export function MainNavigator() {
  return (
    <NavigationContainer>
      <AccountProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={MainScreen.main}>
            {({ navigation }) => <TabNavigation navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name={MainScreen.account}>
            {({ navigation }) => (
              <AccountStackNavigation navigation={navigation} />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </AccountProvider>
    </NavigationContainer>
  );
}
