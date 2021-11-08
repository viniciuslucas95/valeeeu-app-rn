import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { ColorConfig, SizeConfig } from '../../configs';
import { accountContext } from '../contexts';
import { INavigate } from '../data-types/props';
import { Text } from '../styled-components';
import { FontFamily } from '../data-types/enums';
import { Modal } from '../components';
import { ProfileOptionsButton } from '../components/buttons';

export function ClientProfileScreen({ navigation }: INavigate) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { accountInfo } = useContext(accountContext);
  if (!accountInfo) return null;
  const {
    profile: {
      picture: { picture },
      name,
    },
  } = accountInfo;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ProfileOptionsButton
          style={{ marginRight: SizeConfig.bigMargin }}
          navigation={navigation}
          onPress={() => setIsModalOpen(true)}
        />
      ),
    });
  }, []);

  return (
    <Container>
      <InfoContainer>
        <Picture source={{ uri: `data:image/jpeg;base64,${picture}` }} />
        <DataContainer>
          <Text fontFamily={FontFamily.medium}>{name}</Text>
        </DataContainer>
      </InfoContainer>
      <Modal isVisible={isModalOpen} setIsVisible={setIsModalOpen} />
    </Container>
  );
}

const Container = styled.SafeAreaView`
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
