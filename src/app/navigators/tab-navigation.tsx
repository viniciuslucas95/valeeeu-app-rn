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
import { INavigate } from '../data-types/interfaces';
import {
  AccountScreen,
  MainScreen,
  TabScreen,
} from '../data-types/enums/screens';
import { ColorConfig } from '../../configs';
import { ProfileIconButton } from '../components/buttons';

const Tab = createBottomTabNavigator();

export function TabNavigation({ navigation }: INavigate) {
  const isLogged = false; // Change to account conext

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={TabScreen.home}
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
        name={TabScreen.search}
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
        name={TabScreen.message}
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
        name={TabScreen.profile}
        component={ClientProfileScreen}
        options={
          isLogged
            ? {
                tabBarIcon: ({ focused }) => (
                  <ProfileIcon
                    size='big'
                    color={focused ? ColorConfig.blue2 : ColorConfig.gray4}
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
