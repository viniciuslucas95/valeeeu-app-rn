import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainStack } from '../constants';
import { HomeScreen } from '../screens';
import { noHeader } from './constants';
import { HomeIcon } from '../../assets/svgs';

const Tab = createBottomTabNavigator();

export function MainNavigator() {
  return (
    <Tab.Navigator screenOptions={{ tabBarLabel: () => null }}>
      <Tab.Screen
        name={MainStack.home}
        component={HomeScreen}
        options={{
          tabBarIcon: () => <HomeIcon />,
          ...noHeader,
        }}
      />
    </Tab.Navigator>
  );
}
