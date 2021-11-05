import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import React from 'react';
import { StorageService } from '../services';
import { AuthApiServiceFactory } from '../../factories';

interface IAuthContext {
  accessToken?: string;
  saveTokensInStorageAsync(tokens: ITokens): Promise<boolean>;
  deleteTokensFromStorageAsync(): Promise<boolean>;
}

interface ITokens {
  accessToken: string;
  refreshToken: string;
}

const accessTokenKey = '@access_token_key';
const refreshTokenKey = '@refresh_token_key';
const accessTokenStorageService = new StorageService(accessTokenKey);
const refreshTokenStorageService = new StorageService(refreshTokenKey);
const authApiService = AuthApiServiceFactory.create();

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: PropsWithChildren<any>) {
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const { accessToken, refreshToken } = await readTokensFromStorageAsync();
      if (!accessToken) return;
      const isAccessTokenValid = await authApiService.validateAccessTokenAsync(
        accessToken
      );
      if (isAccessTokenValid) {
        setAccessToken(accessToken);
        return;
      }
      if (!refreshToken) return;
      const accessTokenGenerationResult =
        await authApiService.generateNewAccessTokenAsync(refreshToken);
      if (!accessTokenGenerationResult) return;
      const { accessToken: newAccessToken } = accessTokenGenerationResult;
      await saveTokensInStorageAsync({
        accessToken: newAccessToken,
        refreshToken,
      });
    })();
  }, []);

  async function saveTokensInStorageAsync(tokens: ITokens) {
    const { accessToken, refreshToken } = tokens;
    const [accessTokenSaveResult, refreshTokenSaveResult] = await Promise.all([
      accessTokenStorageService.saveDataAsync(accessToken),
      refreshTokenStorageService.saveDataAsync(refreshToken),
    ]);
    if (!accessTokenSaveResult || !refreshTokenSaveResult) return false;
    setAccessToken(accessToken);
    return true;
  }

  async function readTokensFromStorageAsync(): Promise<Partial<ITokens>> {
    const [accessToken, refreshToken] = await Promise.all([
      accessTokenStorageService.getDataAsync(),
      refreshTokenStorageService.getDataAsync(),
    ]);
    return {
      accessToken,
      refreshToken,
    };
  }

  async function deleteTokensFromStorageAsync(): Promise<boolean> {
    const [accessTokenDeleteResult, refreshTokenDeleteResult] =
      await Promise.all([
        accessTokenStorageService.deleteDataAsync(),
        refreshTokenStorageService.deleteDataAsync(),
      ]);
    if (!accessTokenDeleteResult || !refreshTokenDeleteResult) return false;
    setAccessToken(undefined);
    return true;
  }

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        saveTokensInStorageAsync,
        deleteTokensFromStorageAsync,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
