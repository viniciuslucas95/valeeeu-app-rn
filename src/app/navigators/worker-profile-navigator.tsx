import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { accountContext } from '../contexts';
import { WorkerProfileScreen as WorkerProfileScreenStack } from '../data-types/enums/screens';
import { INavigate } from '../data-types/props';
import { WorkerProfileScreen } from '../screens';

const Stack = createStackNavigator();

export function WorkerProfileNavigator({ navigation }: INavigate) {
  const { accountInfo } = useContext(accountContext);

  return (
    <Stack.Navigator
      screenOptions={{ headerTitle: accountInfo?.profile.username }}
    >
      <Stack.Screen name={WorkerProfileScreenStack.profile}>
        {({ navigation }) => <WorkerProfileScreen navigation={navigation} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
