import React, { PropsWithChildren } from 'react';
import { IProps } from './IProps';
import { Container, InsideContainer } from './styles';

export function ScreenContainer({
  children,
  contentPosition: startingContent,
}: PropsWithChildren<IProps>) {
  return (
    <Container>
      <InsideContainer contentPosition={startingContent}>
        {children}
      </InsideContainer>
    </Container>
  );
}
