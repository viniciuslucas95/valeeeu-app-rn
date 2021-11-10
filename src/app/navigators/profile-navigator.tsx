import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { SizeConfig } from '../../configs';
import { accountContext } from '../contexts';
import { FontFamily } from '../data-types/enums';
import { WorkerProfileScreen as WorkerProfileScreenStack } from '../data-types/enums/screens';
import { ProfileScreen } from '../screens';

const Stack = createStackNavigator();

export function ProfileNavigator() {
  const { account } = useContext(accountContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={WorkerProfileScreenStack.profile}
        options={{
          headerTitle: account?.profile.username ?? 'usuario1829',
          headerTitleStyle: {
            fontFamily: FontFamily.medium,
            fontSize: SizeConfig.bigText,
          },
        }}
      >
        {({ navigation }) => <ProfileScreen navigation={navigation} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
