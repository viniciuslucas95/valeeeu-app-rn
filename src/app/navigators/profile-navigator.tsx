import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { WorkerProfileScreen as WorkerProfileScreenStack } from '../data-types/enums/screens';
import { ProfileScreen } from '../screens';

const Stack = createStackNavigator();

export function ProfileNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={WorkerProfileScreenStack.profile}>
        {({ navigation }) => <ProfileScreen navigation={navigation} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
