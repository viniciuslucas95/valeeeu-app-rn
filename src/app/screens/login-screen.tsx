import React, { useState } from 'react';
import styled from 'styled-components/native';
import { LogoWithBackgroundSvg, LogoSvg } from '../../assets/svgs';
import {
  EyeIcon,
  NoEyeIcon,
  GoogleLoginIcon,
  FacebookLoginIcon,
} from '../../assets/svgs/icons';
import { ColorConfig, SizeConfig } from '../../configs';
import { TextInput } from '../components';
import { JustTextButton, IconButton, Button } from '../components/buttons';
import { FontFamily } from '../data-types/enums';
import { INavigate } from '../data-types/interfaces';
import { UnitHandler } from '../helpers';
import { Text, Line } from '../styled-components';

const hidePasswordIconPositionAdjust = -UnitHandler.vw(0.4);
const createAccountMarginAdjust = -UnitHandler.rem(4);
const screenWidth = UnitHandler.vw(101);
const logoDifferenceFromScreenWidth = 40;
const maxWidth = 400;

export function LoginScreen({ navigation }: INavigate) {
  const [isShowingPassword, setIsShowingPassword] = useState(false);
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SafeContainer>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexGrow: 1,
        }}
        keyboardDismissMode='none'
        keyboardShouldPersistTaps='handled'
      >
        {screenWidth > maxWidth ? <FlexSpace style={{ flex: 25.92 }} /> : null}
        <LogoContainer
          style={{
            flex: 4.32,
            marginBottom:
              SizeConfig.inputLabelPositionAdjust + SizeConfig.bigMargin,
          }}
        >
          {screenWidth > maxWidth ? (
            <LogoSvg width={maxWidth} />
          ) : (
            <LogoWithBackgroundSvg
              width={
                screenWidth > maxWidth
                  ? maxWidth + logoDifferenceFromScreenWidth
                  : screenWidth
              }
            />
          )}
        </LogoContainer>
        <CredentialsContainer style={{ flex: 2.16 }}>
          <TextInput
            style={{
              marginBottom:
                SizeConfig.inputLabelPositionAdjust + SizeConfig.mediumMargin,
            }}
            width={screenWidth > maxWidth ? maxWidth : undefined}
            text={user}
            setText={setUser}
            label='Email ou celular'
            placeholder='Digite seu email ou seu celular'
          />
          <TextInput
            style={{ marginBottom: SizeConfig.bigMargin }}
            width={screenWidth > maxWidth ? maxWidth : undefined}
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
                  <NoEyeIcon color={ColorConfig.gray4} />
                ) : (
                  <EyeIcon color={ColorConfig.gray4} />
                )}
              </IconButton>
            }
          />
          <Button
            width={screenWidth > maxWidth ? maxWidth : undefined}
            onPress={() => console.log('Login button pressed...')}
          >
            Entrar
          </Button>
          <JustTextButton
            onPress={() => console.log('Forgot password button pressed...')}
          >
            Esqueceu a senha?
          </JustTextButton>
        </CredentialsContainer>
        <SeparatorContainer
          style={{ flex: 2.16, marginBottom: SizeConfig.smallMargin }}
        >
          <Line style={{ marginLeft: SizeConfig.bigMargin }} />
          <Text
            style={{
              paddingHorizontal: SizeConfig.mediumMargin,
              bottom: UnitHandler.rem(2),
            }}
            color={ColorConfig.gray4}
            fontFamily={FontFamily.light}
          >
            ou
          </Text>
          <Line style={{ marginRight: SizeConfig.bigMargin }} />
        </SeparatorContainer>
        <PlataformsLoginContainer style={{ flex: 2.16 }}>
          <IconButton
            extraPressableArea={24}
            onPress={() => console.log('Google login button pressed...')}
          >
            <GoogleLoginIcon />
          </IconButton>
          <IconButton
            extraPressableArea={24}
            onPress={() => console.log('Facebook login button pressed...')}
          >
            <FacebookLoginIcon />
          </IconButton>
        </PlataformsLoginContainer>
        <AccountCreationContainer
          style={{
            flex: 4,
            marginTop: SizeConfig.bigMargin,
            marginBottom: SizeConfig.mediumMargin,
          }}
        >
          <AccountCreationContent>
            <Text
              style={{ marginRight: createAccountMarginAdjust }}
              color={ColorConfig.gray5}
              fontFamily={FontFamily.light}
            >
              Ainda não possui uma conta?
            </Text>
            <JustTextButton
              removePressableAreaMargin
              style={{
                marginLeft: createAccountMarginAdjust,
                marginRight: createAccountMarginAdjust * 3,
              }}
              onPress={() => console.log('Account creation button pressed...')}
            >
              Cadastre-se agora!
            </JustTextButton>
          </AccountCreationContent>
        </AccountCreationContainer>
        {screenWidth > maxWidth ? <FlexSpace style={{ flex: 25.92 }} /> : null}
      </ScrollView>
    </SafeContainer>
  );
}

const ScrollView = styled.ScrollView``;

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${ColorConfig.white1};
`;

const LogoContainer = styled.View``;

const CredentialsContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const SeparatorContainer = styled.View`
  max-width: ${maxWidth + 'px'};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const PlataformsLoginContainer = styled.View`
  flex-direction: row;
  width: ${SizeConfig.maxElementWidth + 'px'};
  max-width: ${maxWidth + 'px'};
  justify-content: space-evenly;
  align-items: center;
`;

const AccountCreationContainer = styled.View`
  justify-content: flex-end;
`;

const AccountCreationContent = styled.View`
  width: ${(SizeConfig.maxElementWidth > maxWidth
    ? maxWidth
    : SizeConfig.maxElementWidth) + 'px'};
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const FlexSpace = styled.View``;
