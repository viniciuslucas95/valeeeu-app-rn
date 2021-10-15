import React, { PropsWithChildren, useState } from 'react';
import { IProps } from './IProps';
import {
  ButtonContainer,
  Container,
  TextInsideButtonContainer,
  TouchableContainer,
} from './styles';

interface IButton extends IProps {
  width?: string;
}

export function Button({
  children,
  onPress,
  width,
  style,
}: PropsWithChildren<IButton>) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <Container style={style}>
      <TouchableContainer
        onPressIn={() => setIsHighlighted(true)}
        onPressOut={() => setIsHighlighted(false)}
        onPress={onPress}
      >
        <ButtonContainer isHighlighted={isHighlighted} width={width}>
          <TextInsideButtonContainer>{children}</TextInsideButtonContainer>
        </ButtonContainer>
      </TouchableContainer>
    </Container>
  );
}
