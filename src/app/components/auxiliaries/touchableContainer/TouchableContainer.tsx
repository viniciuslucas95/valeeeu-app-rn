import React, { PropsWithChildren, useState } from 'react';
import { ViewElementStyle } from '../../../dataTypes/types/elements';
import { IHighlightColors } from './interfaces';
import {
  WrapperContainer,
  TouchableContainer as TouchableContainerStyle,
  Container,
} from './styles';

interface IProps {
  style?: ViewElementStyle;
  colors: IHighlightColors;
  onPress(): void;
}

export function TouchableContainer({
  children,
  style,
  colors,
  onPress,
}: PropsWithChildren<IProps>) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <WrapperContainer style={style}>
      <TouchableContainerStyle
        onPressIn={() => setIsHighlighted(true)}
        onPressOut={() => setIsHighlighted(false)}
        onPress={() => onPress()}
      >
        <Container isHighlighted={isHighlighted} colors={colors}>
          {children}
        </Container>
      </TouchableContainerStyle>
    </WrapperContainer>
  );
}
