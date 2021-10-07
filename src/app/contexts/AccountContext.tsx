import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  useState,
  createContext,
  PropsWithChildren,
  useEffect,
} from 'react';
import { ITokensDto } from '../dtos';
import { AuthApiService } from '../services/apis';

interface IAccountContext {
  accessToken: string;
  refreshToken: string;
  setTokensAsync(accessToken: string, refreshToken?: string): Promise<void>;
  refreshAccessTokenAsync(): Promise<void>;
}

const accessTokenKey = 'access_token';
const refreshTokenKey = 'refresh_token';
const authApiService = new AuthApiService();

export const AccountContext = createContext<IAccountContext>({
  accessToken: 'false',
  refreshToken: 'false',
  setTokensAsync: async () => {},
  refreshAccessTokenAsync: async () => {},
});

export function AccountProvider({ children }: PropsWithChildren<any>) {
  const [accessToken, setAccessToken] = useState<string>('');
  const [refreshToken, setRefreshToken] = useState<string>('');

  useEffect(() => {
    (async () => {
      const { accessToken, refreshToken } = await readTokensAsync();
      await verifyTokensAsync({ accessToken, refreshToken });
    })();
  }, []);

  async function readTokensAsync(): Promise<ITokensDto> {
    const accessTokenJson = await AsyncStorage.getItem(accessTokenKey);
    const accessToken = accessTokenJson ? JSON.parse(accessTokenJson) : '';
    const refreshTokenJson = await AsyncStorage.getItem(refreshTokenKey);
    const refreshToken = refreshTokenJson ? JSON.parse(refreshTokenJson) : '';
    return { accessToken, refreshToken };
  }

  async function verifyTokensAsync(tokens: ITokensDto) {
    const { accessToken, refreshToken } = tokens;
    if (!accessToken && !refreshToken) return;
    const {
      data: { accessTokenResponse, refreshTokenResponse },
      status,
    } = await authApiService.verifyTokensAsync({
      accessToken,
      refreshToken,
    });
    if (status !== 200) return console.error('CouldNotVerifyTokens');
    if (accessTokenResponse === 'valid') setAccessToken(accessToken);
    if (refreshTokenResponse === 'valid') setRefreshToken(refreshToken);
    if (accessTokenResponse !== 'valid') {
      if (refreshTokenResponse !== 'valid') return await clearTokensAsync();
      const {
        data: { accessToken },
      } = await authApiService.refreshAccessTokenAsync(refreshToken);
      if (!accessToken) return await clearTokensAsync();
      await setTokensAsync(accessToken);
    }
  }

  async function refreshAccessTokenAsync() {
    const {
      data: { accessToken },
    } = await authApiService.refreshAccessTokenAsync(refreshToken);
    if (!accessToken) return await clearTokensAsync();
    await setTokensAsync(accessToken);
  }

  async function clearTokensAsync() {
    await AsyncStorage.removeItem(accessTokenKey);
    await AsyncStorage.removeItem(refreshTokenKey);
    setAccessToken('');
    setRefreshToken('');
  }

  async function setTokensAsync(
    accessToken: string,
    refreshToken?: string
  ): Promise<void> {
    const accessTokenJson = JSON.stringify(accessToken);
    await AsyncStorage.setItem(accessTokenKey, accessTokenJson);
    if (refreshToken) {
      const refreshTokenJson = JSON.stringify(refreshToken);
      await AsyncStorage.setItem(refreshTokenKey, refreshTokenJson);
      setRefreshToken(refreshToken);
    }
    setAccessToken(accessToken);
  }

  return (
    <AccountContext.Provider
      value={{
        accessToken,
        refreshToken,
        setTokensAsync,
        refreshAccessTokenAsync,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}
