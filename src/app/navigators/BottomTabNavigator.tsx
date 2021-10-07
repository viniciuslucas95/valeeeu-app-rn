import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchScreen } from '../screens/mainScreens/searchScreens';
import { ThemeConstant } from '../../configs/constants';
import { ProfileCreationStackNavigator } from './mainStacks/workStacks';
import { HomeScreen } from '../screens/mainScreens/homeScreens';
import { MessageScreen } from '../screens/mainScreens/messageScreens';
import { ScheduleScreen } from '../screens/mainScreens/scheduleScreens';
import { screenOptions } from './constants';

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: ThemeConstant.purple,
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen name='Início' component={HomeScreen} />
      <Tab.Screen name='Busca' component={SearchScreen} />
      <Tab.Screen name='Mensagens' component={MessageScreen} />
      <Tab.Screen name='Agendamentos' component={ScheduleScreen} />
      <Tab.Screen name='Serviço' component={ProfileCreationStackNavigator} />
    </Tab.Navigator>
  );
}
