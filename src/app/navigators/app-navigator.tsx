import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AppStack } from '../constants';
import { MainNavigator } from './main-navigator';
import { noHeader } from './constants';

const Stack = createStackNavigator();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={noHeader}>
        <Stack.Screen name={AppStack.main} component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
