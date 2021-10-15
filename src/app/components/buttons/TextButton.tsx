import React, { PropsWithChildren, useState } from 'react';
import { IProps } from './IProps';
import {
  TextWithoutButtonContainer,
  Container,
  TouchableContainer,
} from './styles';

export function TextButton({
  children,
  style,
  onPress,
}: PropsWithChildren<IProps>) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <Container style={style}>
      <TouchableContainer
        onPressIn={() => setIsHighlighted(true)}
        onPressOut={() => setIsHighlighted(false)}
        onPress={onPress}
      >
        <TextWithoutButtonContainer isHighlighted={isHighlighted}>
          {children}
        </TextWithoutButtonContainer>
      </TouchableContainer>
    </Container>
  );
}
