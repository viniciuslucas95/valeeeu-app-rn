import React, { useContext } from 'react';
import { accountContext } from '../contexts';
import { AccountStackNavigator } from './AccountStackNavigator';
import { BottomTabNavigator } from './BottomTabNavigator';

export function MainNavigator() {
  const { accessToken } = useContext(accountContext);

  return (
    <>{accessToken ? <BottomTabNavigator /> : <AccountStackNavigator />}</>
  );
}
