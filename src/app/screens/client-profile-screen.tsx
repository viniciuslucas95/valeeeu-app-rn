import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { ColorConfig, SizeConfig } from '../../configs';
import { accountContext } from '../contexts';
import { INavigate } from '../data-types/props';
import { Text } from '../styled-components';
import isBase64 from 'is-base64';
import { FontFamily } from '../data-types/enums';

export function ClientProfileScreen({ navigation }: INavigate) {
  const { accountInfo } = useContext(accountContext);
  if (!accountInfo) return null;
  const {
    profile: {
      picture: { picture },
      name,
    },
  } = accountInfo;

  return (
    <Container>
      <InfoContainer>
        <Picture source={{ uri: `data:image/jpeg;base64,${picture}` }} />
        <DataContainer>
          <Text fontFamily={FontFamily.medium}>{name}</Text>
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
