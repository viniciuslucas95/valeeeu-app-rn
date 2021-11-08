import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import React from 'react';
import { AccountApiServiceFactory } from '../factories';
import { AuthContext as authContext } from './auth-context';
import { IAccountDto } from '../dtos';

interface IAccountContext {
  accountInfo: IAccountDto | undefined;
  setAccountInfo: React.Dispatch<React.SetStateAction<IAccountDto | undefined>>;
}

const accountApiService = AccountApiServiceFactory.create();

export const AccountContext = createContext<IAccountContext>(
  {} as IAccountContext
);

export function AccountProvider({ children }: PropsWithChildren<any>) {
  const { accessToken } = useContext(authContext);
  const [accountInfo, setAccountInfo] = useState<IAccountDto | undefined>();

  useEffect(() => {
    (async () => {
      await getMeAsync();
    })();
  }, [accessToken]);

  async function getMeAsync() {
    if (!accessToken) {
      setAccountInfo(undefined);
      return;
    }
    if (accountInfo) return;
    try {
      const result = await accountApiService.getMeAsync(accessToken);
      if (!result) throw new Error('No account found');
      setAccountInfo(result);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <AccountContext.Provider value={{ accountInfo, setAccountInfo }}>
      {children}
    </AccountContext.Provider>
  );
}
