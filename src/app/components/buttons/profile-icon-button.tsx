import React from 'react';
import styled from 'styled-components/native';
import { ProfileIcon } from '../../../assets/svgs/icons';
import { ColorConstant } from '../../../configs';
import { TouchableContainer } from '../auxiliaries';

interface IProps {
  onPress(): void;
}

export function ProfileIconButton({ onPress }: IProps) {
  return (
    <TouchableContainer style={{ flex: 1 }} onPress={onPress}>
      <Container>
        <ProfileIcon size='big' color={ColorConstant.gray4} />
      </Container>
    </TouchableContainer>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
