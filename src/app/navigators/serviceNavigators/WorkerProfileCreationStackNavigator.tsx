import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ServiceStack } from '../../dataTypes/enums/stacks';
import {
  CreateWorkerProfileScreen,
  EditWorkerProfileScreen1,
  EditWorkerProfileScreen2,
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
        name={ServiceStack.editWorkerProfile1}
        options={{ title: 'Criar perfil (1 de 2)' }}
      >
        {({ navigation }) => (
          <EditWorkerProfileScreen1 navigation={navigation} />
        )}
      </Stack.Screen>
      <Stack.Screen
        name={ServiceStack.editWorkerProfile2}
        options={{ title: 'Criar perfil (2 de 2)' }}
      >
        {({ navigation }) => (
          <EditWorkerProfileScreen2 navigation={navigation} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
