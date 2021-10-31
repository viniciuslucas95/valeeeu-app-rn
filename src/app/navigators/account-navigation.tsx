import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens';
import { AccountScreen } from '../data-types/enums/screens';
import { INavigate } from '../data-types/interfaces';
import { SizeConfig, ThemeConfig } from '../../configs';
import { View } from 'react-native';
import { CloseIcon } from '../../assets/svgs/icons';
import { IconButton } from '../components';

const Stack = createStackNavigator();

export function AccountStackNavigation({ navigation }: INavigate) {
  return (
    <Stack.Navigator screenOptions={{ headerTitle: '' }}>
      <Stack.Screen
        name={AccountScreen.login}
        options={({ navigation }) => ({
          presentation: 'modal',
          headerStyle: { backgroundColor: ThemeConfig.app, elevation: 0 },
          headerLeft: () => (
            <View style={{ flexDirection: 'row' }}>
              <IconButton side='left' onPress={() => navigation.goBack()}>
                <CloseIcon color={ThemeConfig.neutral} size='medium' />
              </IconButton>
            </View>
          ),
          headerLeftContainerStyle: {
            marginLeft: SizeConfig.hugeMarginVw,
          },
        })}
      >
        {({ navigation }) => <LoginScreen />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
