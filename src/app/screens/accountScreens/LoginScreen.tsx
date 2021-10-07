import React, { useContext, useState } from 'react';
import { TextButton } from '../../components/buttons/defaultButton';
import { TextInput } from '../../components/textInputs/defaultTextInput';
import { PasswordTextInput } from '../../components/textInputs/passwordTextInput';
import { accountContext } from '../../contexts';
import { AccountStack } from '../../dataTypes/enums/stacks';
import { AuthApiService } from '../../services/apis';
import { ScreenContainer } from '../../styles/components';
import { INavigate } from '../interfaces';
import { CredentialsValidator } from './validators';

const credentialsValidator = new CredentialsValidator();
const authApiService = new AuthApiService();

export function LoginScreen({ navigation }: INavigate) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setTokensAsync } = useContext(accountContext);

  function goToAccountCreationScreen() {
    navigation.navigate(AccountStack.createAccount);
  }

  async function logInAsync() {
    try {
      credentialsValidator.validate(email, password);
      const { data, status } = await authApiService.getTokensAsync({
        email,
        password,
      });
      if (status !== 200) throw new Error('CouldNotGetTokens');
      await setTokensAsync(data.accessToken, data.refreshToken);
    } catch (err: any) {
      console.error(err.message);
    }
  }

  return (
    <ScreenContainer>
      <TextInput text={email} setText={setEmail} />
      <PasswordTextInput password={password} setPassword={setPassword} />
      <TextButton onPress={logInAsync}>Logar</TextButton>
      <TextButton onPress={goToAccountCreationScreen}>Criar conta</TextButton>
    </ScreenContainer>
  );
}
