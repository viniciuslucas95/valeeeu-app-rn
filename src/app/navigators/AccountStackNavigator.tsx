import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AccountStack } from '../dataTypes/enums/stacks';
import { CreateAccountScreen, LoginScreen } from '../screens/accountScreens';
import { screenOptions } from './constants';

const Stack = createStackNavigator();

export function AccountStackNavigator() {
  return (
    <Stack.Navigator {...screenOptions}>
      <Stack.Screen name={AccountStack.login} options={{ title: 'Login' }}>
        {({ navigation }) => <LoginScreen navigation={navigation} />}
      </Stack.Screen>
      <Stack.Screen
        name={AccountStack.createAccount}
        options={{ title: 'Criar conta' }}
      >
        {({ navigation }) => <CreateAccountScreen navigation={navigation} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
