import React from 'react';
import { LogoSvg } from '../../../assets/svgs';
import { ColorConstant } from '../../../configs/constants';
import { Container } from './styles';

export function LoadScreen() {
  return (
    <Container>
      <LogoSvg color={ColorConstant.white} />
    </Container>
  );
}
