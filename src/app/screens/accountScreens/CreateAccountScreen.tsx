import React, { useState } from 'react';
import { ScreenContainer } from '../../styles/components';
import { INavigate } from '../INavigate';
import { Button } from '../../components/buttons';
import { LogoSvg } from '../../../assets/svgs';
import { UnitHandler } from '../../helpers';
import { PasswordInput, TextInput } from '../../components/textInputs';

export function CreateAccountScreen({ navigation }: INavigate) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function createAccountAsync() {
    console.log('CREATE ACCOUNT PRESSED');
  }

  return (
    <ScreenContainer>
      <LogoSvg style={{ marginBottom: UnitHandler.vh(4) }} />
      <TextInput
        style={{ marginBottom: UnitHandler.vh(1) }}
        text={email}
        setText={setEmail}
        placeholder='Email'
      />
      <PasswordInput
        style={{ marginBottom: UnitHandler.vh(2) }}
        text={password}
        setText={setPassword}
        placeholder='Senha'
      />
      <Button onPress={createAccountAsync}>Criar conta</Button>
    </ScreenContainer>
  );
}
