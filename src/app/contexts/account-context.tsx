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
import { hideAsync } from 'expo-splash-screen';

interface IAccountContext {
  account: IAccountDto | undefined;
  setAccount: React.Dispatch<React.SetStateAction<IAccountDto | undefined>>;
}

const accountApiService = AccountApiServiceFactory.create();

export const AccountContext = createContext<IAccountContext>(
  {} as IAccountContext
);

export function AccountProvider({ children }: PropsWithChildren<any>) {
  const {
    accessToken,
    deleteTokensFromStorageAsync,
    wereTokensCheckedOnAppLoad,
  } = useContext(authContext);
  const [account, setAccount] = useState<IAccountDto | undefined>();
  const [wasAccountCheckedOnAppLoad, setWasAccountCheckedOnAppLoad] =
    useState(false);

  useEffect(() => {
    if (accessToken) return;
    setAccount(undefined);
  }, [accessToken]);

  useEffect(() => {
    if (!wereTokensCheckedOnAppLoad) return;
    (async () => {
      await getMeAsync();
    })();
  }, [wereTokensCheckedOnAppLoad]);

  useEffect(() => {
    if (!wasAccountCheckedOnAppLoad) return;
    (async () => {
      await hideAsync();
    })();
  }, [wasAccountCheckedOnAppLoad]);

  async function getMeAsync() {
    if (!accessToken) {
      setWasAccountCheckedOnAppLoad(true);
      return;
    }
    try {
      const result = await accountApiService.getMeAsync(accessToken);
      if (!result) {
        await deleteTokensFromStorageAsync();
        throw new Error('No account found');
      }
      setAccount(result);
    } catch (err) {
      console.error(err);
    } finally {
      setWasAccountCheckedOnAppLoad(true);
    }
  }

  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      {children}
    </AccountContext.Provider>
  );
}
