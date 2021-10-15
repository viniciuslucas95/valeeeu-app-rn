import React, { useContext, useState } from 'react';
import { LogoSvg } from '../../../assets/svgs';
import { Button, TextButton } from '../../components/buttons';
import { TextInput, PasswordInput } from '../../components/textInputs';
import { AccountStack } from '../../dataTypes/enums/stacks';
import { UnitHandler } from '../../helpers';
import { ScreenContainer } from '../../styles/components';
import { INavigate } from '../INavigate';
import { Text } from '../../styles/components';
import { SizeConstant } from '../../../configs/constants';
import { CreateAccountContainer, SecondaryOptionsContanier } from './styles';
import { accountContext } from '../../contexts';

export function LoginScreen({ navigation }: INavigate) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAccessToken } = useContext(accountContext);

  function goToAccountCreationScreen() {
    navigation.navigate(AccountStack.createAccount);
  }

  function goToPasswordRecoveryScreen() {
    console.log('RECOVER PASSWORD PRESSED');
  }

  async function logInAsync() {
    console.log('LOG IN PRESSED');
    setAccessToken('123');
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
      <Button style={{ marginBottom: UnitHandler.vh(1) }} onPress={logInAsync}>
        Entrar
      </Button>
      <SecondaryOptionsContanier>
        <TextButton
          style={{ marginBottom: UnitHandler.vh(0.25) }}
          onPress={goToPasswordRecoveryScreen}
        >
          Esqueceu a senha?
        </TextButton>
        <CreateAccountContainer>
          <Text size={SizeConstant.fontSize14}>Não tem conta?</Text>
          <TextButton
            style={{ marginLeft: 4 }}
            onPress={goToAccountCreationScreen}
          >
            Criar conta
          </TextButton>
        </CreateAccountContainer>
      </SecondaryOptionsContanier>
    </ScreenContainer>
  );
}
