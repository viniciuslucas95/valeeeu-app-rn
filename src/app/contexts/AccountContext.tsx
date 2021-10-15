import React, { useState, createContext, PropsWithChildren } from 'react';

interface IAccountContext {
  accessToken: string;
  refreshToken: string;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
  setRefreshToken: React.Dispatch<React.SetStateAction<string>>;
}

export const AccountContext = createContext<IAccountContext>(
  {} as IAccountContext
);

export function AccountProvider({ children }: PropsWithChildren<any>) {
  const [accessToken, setAccessToken] = useState<string>('');
  const [refreshToken, setRefreshToken] = useState<string>('');

  return (
    <AccountContext.Provider
      value={{
        accessToken,
        refreshToken,
        setAccessToken,
        setRefreshToken,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}
