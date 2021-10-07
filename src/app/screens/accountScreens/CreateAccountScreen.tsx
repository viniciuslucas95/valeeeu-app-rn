import React, { useState } from 'react';
import { TextInput } from '../../components/textInputs/defaultTextInput';
import { PasswordTextInput } from '../../components/textInputs/passwordTextInput';
import { ScreenContainer } from '../../styles/components';
import { INavigate } from '../interfaces';
import { AccountApiService } from '../../services/apis';
import { TextButton } from '../../components/buttons/defaultButton';
import { CredentialsValidator } from './validators';

const credentialsValidator = new CredentialsValidator();
const accountApiService = new AccountApiService();

export function CreateAccountScreen({ navigation }: INavigate) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function createAccountAsync() {
    try {
      credentialsValidator.validate(email, password);
      const { status } = await accountApiService.createAsync({
        email,
        password,
      });
      if (status !== 201) throw new Error('CouldNotCreateAnAccount');
      navigation.goBack();
    } catch (err: any) {
      console.error(err.message);
    }
  }

  return (
    <ScreenContainer>
      <TextInput text={email} setText={setEmail} />
      <PasswordTextInput password={password} setPassword={setPassword} />
      <TextButton onPress={createAccountAsync}>Criar conta</TextButton>
    </ScreenContainer>
  );
}
