import { createContext, PropsWithChildren } from 'react';
import React from 'react';

export const AccountContext = createContext({});

export function AccountProvider({ children }: PropsWithChildren<any>) {
  return (
    <AccountContext.Provider value={{}}>{children}</AccountContext.Provider>
  );
}
