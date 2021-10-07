import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WorkerProfileCreationStack } from '../../../dataTypes/enums/stacks/mainStacks/workStacks';
import {
  ProfileCreationIntroScreen,
  ProfileCreationTestScreen,
} from '../../../screens/mainScreens/workScreens/profileCreationScreens';

const Stack = createStackNavigator();

export function ProfileCreationStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ title: 'Serviço' }}>
      <Stack.Screen name={WorkerProfileCreationStack.intro}>
        {({ navigation }) => (
          <ProfileCreationIntroScreen navigation={navigation} />
        )}
      </Stack.Screen>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={WorkerProfileCreationStack.test}
          options={{ presentation: 'modal' }}
        >
          {({ navigation }) => (
            <ProfileCreationTestScreen navigation={navigation} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name={WorkerProfileCreationStack.test2}
          options={{ presentation: 'modal' }}
        >
          {({ navigation }) => (
            <ProfileCreationTestScreen navigation={navigation} />
          )}
        </Stack.Screen>
      </Stack.Group>
    </Stack.Navigator>
  );
}
