import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WorkerProfileCreationStack } from '../../dataTypes/enums/stacks';
import { WorkerProfileCreationIntroScreen } from '../../screens/mainScreens/workScreens';
import { screenOptions } from '../screenOptions';

const Stack = createStackNavigator();

export function WorkerProfileCreationStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ title: 'Serviço', ...screenOptions }}>
      <Stack.Screen name={WorkerProfileCreationStack.intro}>
        {({ navigation }) => (
          <WorkerProfileCreationIntroScreen navigation={navigation} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
