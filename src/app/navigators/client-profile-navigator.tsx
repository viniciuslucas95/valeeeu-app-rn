import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { accountContext } from '../contexts';
import { INavigate } from '../data-types/props';
import { ClientProfileScreen } from '../screens';
import { ClientProfileScreen as ClientProfileScreenStack } from '../data-types/enums/screens';
import { FontFamily } from '../data-types/enums';
import { ColorConfig, SizeConfig } from '../../configs';

const Stack = createStackNavigator();

export function ClientProfileNavigator({ navigation }: INavigate) {
  const { accountInfo } = useContext(accountContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: accountInfo?.profile.username,
        headerTitleStyle: {
          fontFamily: FontFamily.medium,
          fontSize: SizeConfig.bigText,
          color: ColorConfig.black1,
        },
      }}
    >
      <Stack.Screen name={ClientProfileScreenStack.profile}>
        {({ navigation }) => <ClientProfileScreen navigation={navigation} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
