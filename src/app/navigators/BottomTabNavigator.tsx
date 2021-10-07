import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../pages/homeScreen';
import { MessageScreen } from '../pages/messageScreen';
import { ScheduleScreen } from '../pages/scheduleScreen';
import { SearchScreen } from '../pages/searchScreen';
import { WorkScreen } from '../pages/workScreen';

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Início' component={HomeScreen} />
      <Tab.Screen name='Busca' component={SearchScreen} />
      <Tab.Screen name='Mensagens' component={MessageScreen} />
      <Tab.Screen name='Agendamentos' component={ScheduleScreen} />
      <Tab.Screen name='Trabalho' component={WorkScreen} />
    </Tab.Navigator>
  );
}
