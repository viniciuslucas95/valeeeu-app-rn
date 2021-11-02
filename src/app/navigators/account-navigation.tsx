import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { LoginScreen } from '../screens';
import { AccountScreen } from '../data-types/enums/screens';
import { INavigate } from '../data-types/interfaces';
import { ThemeConfig } from '../../configs';
import { View } from 'react-native';
import { CloseIcon } from '../../assets/svgs/icons';
import { IconButton } from '../components';
import { SizeConstant } from '../../configs/constants';

const Stack = createStackNavigator();

export function AccountStackNavigation({ navigation }: INavigate) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
      }}
    >
      <Stack.Screen
        name={AccountScreen.login}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: ThemeConfig.app, elevation: 0 },
          headerLeft: () => (
            <View style={{ flexDirection: 'row' }}>
              <IconButton side='left' onPress={() => navigation.goBack()}>
                <CloseIcon color={ThemeConfig.neutral} />
              </IconButton>
            </View>
          ),
          headerLeftContainerStyle: {
            marginLeft: SizeConstant.bigMargin,
          },
        })}
      >
        {({ navigation }) => <LoginScreen navigation={navigation} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
