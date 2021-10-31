import React, { useState, createContext, PropsWithChildren } from 'react';

interface IAccountContext {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AccountContext = createContext<IAccountContext>(
  {} as IAccountContext
);

export function AccountProvider({ children }: PropsWithChildren<any>) {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <AccountContext.Provider
      value={{
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}
