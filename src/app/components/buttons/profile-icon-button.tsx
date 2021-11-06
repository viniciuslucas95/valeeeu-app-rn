import React from 'react';
import { ProfileIcon } from '../../../assets/svgs/icons';
import { ColorConfig } from '../../../configs';
import styled from 'styled-components/native';
import { TouchableContainer } from '../auxiliaries';
import { IPressable } from '../interfaces';

export function ProfileIconButton({ onPress }: IPressable) {
  return (
    <TouchableContainer style={{ flex: 1 }} onPress={onPress}>
      <Container>
        <ProfileIcon size='big' color={ColorConfig.gray4} />
      </Container>
    </TouchableContainer>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
