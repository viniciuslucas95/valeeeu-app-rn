import React from 'react';
import { ProfileIcon } from '../../../assets/svgs/icons';
import { ColorConfig } from '../../../configs';
import { IPressable } from '../../data-types/interfaces';
import { Container } from '../../styled-components';
import { TouchableContainer } from '../auxiliaries';

export function ProfileIconButton({ onPress }: IPressable) {
  return (
    <TouchableContainer style={{ flex: 1 }} onPress={onPress}>
      <Container>
        <ProfileIcon size='big' color={ColorConfig.gray4} />
      </Container>
    </TouchableContainer>
  );
}
