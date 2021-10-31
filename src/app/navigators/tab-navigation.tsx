import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  ClientProfileScreen,
  HomeScreen,
  MessageScreen,
  SearchScreen,
} from '../screens';
import {
  HomeIcon,
  MessageIcon,
  ProfileIcon,
  SearchIcon,
} from '../../assets/svgs/icons';
import { ThemeConfig } from '../../configs';
import { INavigate } from '../data-types/interfaces';
import {
  AccountScreen,
  MainScreen,
  TabScreen,
} from '../data-types/enums/screens';
import { ProfileIconButton } from './profile-icon-button';

const Tab = createBottomTabNavigator();

export function TabNavigation({ navigation }: INavigate) {
  const isLogged = false;

  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tab.Screen
        name={TabScreen.home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              color={focused ? ThemeConfig.active : ThemeConfig.inactive}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabScreen.search}
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <SearchIcon
              color={focused ? ThemeConfig.active : ThemeConfig.inactive}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabScreen.message}
        component={MessageScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MessageIcon
              color={focused ? ThemeConfig.active : ThemeConfig.inactive}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabScreen.profile}
        component={ClientProfileScreen}
        options={
          isLogged
            ? {
                tabBarIcon: ({ focused }) => (
                  <ProfileIcon
                    color={focused ? ThemeConfig.active : ThemeConfig.inactive}
                  />
                ),
              }
            : ({ navigation }) => ({
                tabBarButton: () => (
                  <ProfileIconButton
                    onPress={() =>
                      navigation.navigate(MainScreen.account, {
                        screen: AccountScreen.login,
                      })
                    }
                  />
                ),
              })
        }
      />
    </Tab.Navigator>
  );
}
