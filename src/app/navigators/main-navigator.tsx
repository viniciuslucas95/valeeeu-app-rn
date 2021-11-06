import React, { useContext } from 'react';
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
import { INavigate } from '../data-types/props';
import {
  AccountScreen,
  AppScreen,
  MainScreen,
} from '../data-types/enums/screens';
import { ColorConfig } from '../../configs';
import { ProfileIconButton } from '../components/buttons';
import { authContext } from '../contexts';

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
        component={ClientProfileScreen}
        options={
          accessToken && accessToken.length > 0
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
                      navigation.navigate(AppScreen.account, {
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
