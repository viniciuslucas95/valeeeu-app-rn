import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ServiceStack } from '../../dataTypes/enums/stacks';
import {
  CreateWorkerProfileScreen,
  EditWorkerProfileScreen,
} from '../../screens/mainScreens/serviceScreens';
import { screenOptions } from '../screenOptions';

const Stack = createStackNavigator();

export function WorkerProfileCreationStackNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={ServiceStack.createWorkerProfile}
        options={{ title: 'Serviço' }}
      >
        {({ navigation }) => (
          <CreateWorkerProfileScreen navigation={navigation} />
        )}
      </Stack.Screen>
      <Stack.Screen
        name={ServiceStack.editWorkerProfile}
        options={{ title: 'Criar perfil' }}
      >
        {({ navigation }) => (
          <EditWorkerProfileScreen navigation={navigation} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
