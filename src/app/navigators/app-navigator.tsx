import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AppScreen } from '../data-types/enums/screens';
import { AccountNavigator } from './account-navigator';
import { MainNavigator } from './main-navigator';

const Stack = createStackNavigator();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={AppScreen.main}>
          {({ navigation }) => <MainNavigator navigation={navigation} />}
        </Stack.Screen>
        <Stack.Screen
          name={AppScreen.account}
          options={{
            presentation: 'modal',
          }}
        >
          {({ navigation }) => <AccountNavigator navigation={navigation} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
