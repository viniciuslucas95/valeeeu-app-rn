import React, { useState } from 'react';
import styled from 'styled-components/native';
import { LogoWithBackgroundSvg, LogoSvg } from '../../assets/svgs';
import {
  EyeIcon,
  NoEyeIcon,
  GoogleLoginIcon,
  FacebookLoginIcon,
} from '../../assets/svgs/icons';
import { ThemeConfig } from '../../configs';
import { SizeConstant } from '../../configs/constants';
import { IconButton, TextInput, Button } from '../components';
import { TextButton } from '../components';
import { FontFamily } from '../data-types/enums';
import { INavigate } from '../data-types/interfaces';
import { UnitHandler } from '../helpers';
import { Text } from '../styled-components';

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
              SizeConstant.inputLabelPositionAdjust + SizeConstant.bigMargin,
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
                SizeConstant.inputLabelPositionAdjust +
                SizeConstant.mediumMargin,
            }}
            width={screenWidth > maxWidth ? maxWidth : undefined}
            text={user}
            setText={setUser}
            label='Email ou celular'
            placeholder='Digite seu email ou seu celular'
          />
          <TextInput
            style={{ marginBottom: SizeConstant.bigMargin }}
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
                  <NoEyeIcon color={ThemeConfig.inactive} />
                ) : (
                  <EyeIcon color={ThemeConfig.inactive} />
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
          <TextButton
            onPress={() => console.log('Forgot password button pressed...')}
          >
            Esqueceu a senha?
          </TextButton>
        </CredentialsContainer>
        <SeparatorContainer
          style={{ flex: 2.16, marginBottom: SizeConstant.smallMargin }}
        >
          <LeftLine />
          <Text
            style={{
              paddingHorizontal: SizeConstant.mediumMargin,
              bottom: UnitHandler.rem(2),
            }}
            color={ThemeConfig.line}
            fontFamily={FontFamily.light}
          >
            ou
          </Text>
          <RightLine />
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
            marginTop: SizeConstant.bigMargin,
            marginBottom: SizeConstant.mediumMargin,
          }}
        >
          <AccountCreationContent>
            <Text
              style={{ marginRight: createAccountMarginAdjust }}
              color={ThemeConfig.secondaryText}
              fontFamily={FontFamily.light}
            >
              Ainda não possui uma conta?
            </Text>
            <TextButton
              removePressableAreaMargin
              style={{
                marginLeft: createAccountMarginAdjust,
                marginRight: createAccountMarginAdjust * 3,
              }}
              onPress={() => console.log('Account creation button pressed...')}
            >
              Cadastre-se agora!
            </TextButton>
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
  background-color: ${ThemeConfig.background};
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

const Line = styled.View`
  height: ${SizeConstant.thinBorderWidth + 'px'};
  flex: 1;
  background-color: ${ThemeConfig.line};
`;

const LeftLine = styled(Line)`
  margin-left: ${SizeConstant.bigMargin + 'px'};
`;

const RightLine = styled(Line)`
  margin-right: ${SizeConstant.bigMargin + 'px'};
`;

const PlataformsLoginContainer = styled.View`
  flex-direction: row;
  width: ${SizeConstant.maxElementWidth + 'px'};
  max-width: ${maxWidth + 'px'};
  justify-content: space-evenly;
  align-items: center;
`;

const AccountCreationContainer = styled.View`
  justify-content: flex-end;
`;

const AccountCreationContent = styled.View`
  width: ${(SizeConstant.maxElementWidth > maxWidth
    ? maxWidth
    : SizeConstant.maxElementWidth) + 'px'};
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const FlexSpace = styled.View``;
