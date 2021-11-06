import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import React from 'react';
import { IAccountDto } from '../dtos';
import { AccountApiServiceFactory } from '../factories';
import { AuthContext as authContext } from './auth-context';

interface IAccountContext {
  account: IAccountDto | undefined;
  setAccount: React.Dispatch<React.SetStateAction<IAccountDto | undefined>>;
}

const accountApiService = AccountApiServiceFactory.create();

export const AccountContext = createContext<IAccountContext>(
  {} as IAccountContext
);

export function AccountProvider({ children }: PropsWithChildren<any>) {
  const { accessToken } = useContext(authContext);
  const [account, setAccount] = useState<IAccountDto | undefined>();

  useEffect(() => {
    if (!accessToken) return;
    (async () => {
      const result = await accountApiService.getMeAsync(accessToken);
      if (!result) return;
      setAccount(result);
    })();
  }, [accessToken]);

  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      {children}
    </AccountContext.Provider>
  );
}
