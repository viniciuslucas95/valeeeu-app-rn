import React, { PropsWithChildren } from 'react';
import { AccountProvider, AuthProvider } from '../contexts';

export function ContextWrapper({ children }: PropsWithChildren<any>) {
  return (
    <AuthProvider>
      <AccountProvider>{children}</AccountProvider>
    </AuthProvider>
  );
}
