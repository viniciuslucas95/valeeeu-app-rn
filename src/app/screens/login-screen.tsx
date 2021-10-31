import React, { useState } from 'react';
import styled from 'styled-components/native';
import { EyeIcon, NoEyeIcon } from '../../assets/svgs/icons';
import { SizeConfig, ThemeConfig } from '../../configs';
import { IconButton, TextInput } from '../components';
import { UnitHandler } from '../helpers';

const hidePasswordIconPositionAdjust = -UnitHandler.vw(0.4);

export function LoginScreen() {
  const [isShowingPassword, setIsShowingPassword] = useState(false);
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Container>
      <TextInput
        style={{ marginBottom: SizeConfig.hugeMarginVw }}
        text={user}
        setText={setUser}
        label='Email ou celular'
        placeholder='Digite seu email ou seu celular'
      />
      <TextInput
        text={password}
        setText={setPassword}
        hasSecureText={!isShowingPassword}
        label='Senha'
        placeholder='Digite sua senha'
        button={
          <IconButton
            side='right'
            onPress={() => setIsShowingPassword(!isShowingPassword)}
            style={
              isShowingPassword
                ? { marginRight: hidePasswordIconPositionAdjust }
                : null
            }
          >
            {isShowingPassword ? (
              <NoEyeIcon color={ThemeConfig.inactive} size='medium' />
            ) : (
              <EyeIcon color={ThemeConfig.inactive} size='medium' />
            )}
          </IconButton>
        }
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${ThemeConfig.background};
`;
