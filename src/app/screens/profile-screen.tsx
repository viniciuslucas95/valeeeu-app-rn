import React, { useContext, useEffect } from 'react';
import styled from 'styled-components/native';
import { ColorConfig, SizeConfig } from '../../configs';
import { accountContext, authContext, modalContext } from '../contexts';
import { INavigate } from '../data-types/props';
import { Text } from '../styled-components';
import { FontFamily } from '../data-types/enums';
import { ProfileOptionsButton, TextButton } from '../components/buttons';
import { AppScreen, MainScreen } from '../data-types/enums/screens';

export function ProfileScreen({ navigation }: INavigate) {
  const { account } = useContext(accountContext);
  const { openModal, closeModal, setupContent, dragRef } =
    useContext(modalContext);
  const { deleteTokensFromStorageAsync } = useContext(authContext);

  useEffect(() => {
    setupContent(<TextButton onPress={logOutAsync}>Sair</TextButton>);
    navigation.setOptions({
      headerRight: () => (
        <ProfileOptionsButton
          style={{ marginRight: SizeConfig.bigMargin }}
          navigation={navigation}
          onPress={() => openModal()}
        />
      ),
      headerTitle: account?.profile.username ?? 'usuario1829',
      headerTitleStyle: {
        fontFamily: FontFamily.medium,
        fontSize: SizeConfig.bigText,
      },
    });
  }, []);

  async function logOutAsync() {
    if (dragRef && dragRef.current) return;
    if (!(await deleteTokensFromStorageAsync())) return;
    closeModal();
    navigation.navigate(AppScreen.main, { screen: MainScreen.home });
  }

  return (
    <Container>
      <InfoContainer>
        <Picture
          source={{
            uri: `data:image/jpeg;base64,${account?.profile.picture.picture}`,
          }}
        />
        <DataContainer>
          <Text fontFamily={FontFamily.medium}>{account?.profile.name}</Text>
        </DataContainer>
      </InfoContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${ColorConfig.white1};
`;

const InfoContainer = styled.View`
  flex-direction: row;
  width: ${SizeConfig.maxElementWidth + 'px'};
  margin-top: ${SizeConfig.mediumMargin + 'px'};
  margin-left: ${SizeConfig.bigMargin + 'px'};
`;

const Picture = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: ${ColorConfig.gray3};
`;

const DataContainer = styled.View`
  margin-left: ${SizeConfig.mediumMargin + 'px'};
  justify-content: center;
`;
