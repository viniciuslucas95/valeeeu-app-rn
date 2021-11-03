import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens';
import { AccountScreen } from '../data-types/enums/screens';
import { INavigate } from '../data-types/interfaces';
import { View } from 'react-native';
import { CloseIcon } from '../../assets/svgs/icons';
import { ColorConstant, SizeConstant } from '../../configs';
import { IconButton } from '../components/buttons';

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
          headerStyle: { backgroundColor: ColorConstant.blue2, elevation: 0 },
          headerLeft: () => (
            <View style={{ flexDirection: 'row' }}>
              <IconButton side='left' onPress={() => navigation.goBack()}>
                <CloseIcon color={ColorConstant.white1} />
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
