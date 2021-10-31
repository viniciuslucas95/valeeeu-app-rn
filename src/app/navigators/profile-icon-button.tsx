import React from 'react';
import { ProfileIcon } from '../../assets/svgs/icons';
import { ThemeConfig } from '../../configs';
import { TouchableContainer } from '../components';
import styled from 'styled-components/native';

interface IProps {
  onPress(): void;
}

export function ProfileIconButton({ onPress }: IProps) {
  return (
    <TouchableContainer style={{ flex: 1 }} onPress={onPress}>
      <Container>
        <ProfileIcon color={ThemeConfig.inactive} />
      </Container>
    </TouchableContainer>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
