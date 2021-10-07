import React, { useState } from 'react';
import { Container, TextInput, ShowPasswordButton } from './styles';

interface IProps {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export function PasswordTextInput({ password, setPassword }: IProps) {
  const [isShowingPassword, setIsShowingPassword] = useState(false);

  return (
    <Container>
      <TextInput
        placeholder='Senha'
        secureTextEntry={!isShowingPassword}
        value={password}
        onChangeText={(e) => setPassword(e)}
      />
      <ShowPasswordButton
        title={isShowingPassword ? 'Esconder' : 'Mostrar'}
        onPress={() => setIsShowingPassword(!isShowingPassword)}
      />
    </Container>
  );
}
