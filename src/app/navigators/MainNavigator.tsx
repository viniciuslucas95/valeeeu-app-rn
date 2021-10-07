import React, { useContext } from 'react';
import { accountContext } from '../contexts';
import { BottomTabNavigator } from './BottomTabNavigator';
import { AccountStackNavigator } from './stacks/accountStackNavigator';

export function MainNavigator() {
  const { accessToken } = useContext(accountContext);

  return (
    <>{accessToken ? <BottomTabNavigator /> : <AccountStackNavigator />}</>
  );
}
