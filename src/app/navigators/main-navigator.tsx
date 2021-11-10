import React, { useContext, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, MessageScreen, SearchScreen } from '../screens';
import { HomeIcon, MessageIcon, SearchIcon } from '../../assets/svgs/icons';
import { INavigate } from '../data-types/props';
import {
  AccountScreen,
  AppScreen,
  MainScreen,
} from '../data-types/enums/screens';
import { ColorConfig } from '../../configs';
import { ProfileIconButton } from '../components/buttons';
import { authContext } from '../contexts';
import { ProfileNavigator } from './profile-navigator';

const Tab = createBottomTabNavigator();

export function MainNavigator({ navigation }: INavigate) {
  const { accessToken } = useContext(authContext);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={MainScreen.home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              size='big'
              color={focused ? ColorConfig.blue2 : ColorConfig.gray4}
            />
          ),
        }}
      />
      <Tab.Screen
        name={MainScreen.search}
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <SearchIcon
              size='big'
              color={focused ? ColorConfig.blue2 : ColorConfig.gray4}
            />
          ),
        }}
      />
      <Tab.Screen
        name={MainScreen.message}
        component={MessageScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MessageIcon
              size='big'
              color={focused ? ColorConfig.blue2 : ColorConfig.gray4}
            />
          ),
        }}
      />
      <Tab.Screen
        name={MainScreen.profile}
        component={ProfileNavigator}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <ProfileIconButton
              navigation={navigation}
              onPress={
                accessToken && accessToken.length > 0
                  ? () =>
                      navigation.navigate(AppScreen.main, {
                        screen: MainScreen.profile,
                      })
                  : () =>
                      navigation.navigate(AppScreen.account, {
                        screen: AccountScreen.login,
                      })
              }
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
}
