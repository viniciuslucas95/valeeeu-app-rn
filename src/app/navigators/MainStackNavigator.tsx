import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchScreen } from '../screens/mainScreens/searchScreens';
import { ColorConstant } from '../../configs/constants';
import { MessageScreen } from '../screens/mainScreens/messageScreens';
import { ScheduleScreen } from '../screens/mainScreens/scheduleScreens';
import { ServiceNavigator } from './serviceNavigators';
import {
  MessageIcon,
  ScheduleIcon,
  SearchIcon,
  ServiceIcon,
} from '../../assets/svgs/icons';

const Tab = createBottomTabNavigator();
const iconTopMargin = 6;
const labelBottomMargin = 4;

export function MainStackNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: ColorConstant.purple,
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name='Busca'
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <SearchIcon color={focused ? ColorConstant.purple : undefined} />
          ),
          tabBarIconStyle: { marginTop: iconTopMargin },
          tabBarLabelStyle: { marginBottom: labelBottomMargin },
        }}
      />
      <Tab.Screen
        name='Mensagens'
        component={MessageScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MessageIcon color={focused ? ColorConstant.purple : undefined} />
          ),
          tabBarIconStyle: { marginTop: iconTopMargin },
          tabBarLabelStyle: { marginBottom: labelBottomMargin },
        }}
      />
      <Tab.Screen
        name='Agendamentos'
        component={ScheduleScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <ScheduleIcon color={focused ? ColorConstant.purple : undefined} />
          ),
          tabBarIconStyle: { marginTop: iconTopMargin },
          tabBarLabelStyle: { marginBottom: labelBottomMargin },
        }}
      />
      <Tab.Screen
        name='Serviço'
        component={ServiceNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <ServiceIcon color={focused ? ColorConstant.purple : undefined} />
          ),
          tabBarIconStyle: { marginTop: iconTopMargin },
          tabBarLabelStyle: { marginBottom: labelBottomMargin },
        }}
      />
    </Tab.Navigator>
  );
}
