import React, { useContext } from 'react';
import { accountContext } from '../contexts';
import { AccountStackNavigator } from './AccountStackNavigator';
import { MainStackNavigator } from './MainStackNavigator';

export function MainNavigator() {
  const { accessToken } = useContext(accountContext);

  return (
    <>{accessToken ? <MainStackNavigator /> : <AccountStackNavigator />}</>
  );
}
