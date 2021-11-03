import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/native';
import { ViewElementStyle } from '../../data-types/types';

interface IProps {
  onPress(): void;
  style?: ViewElementStyle;
  children: JSX.Element;
}

export function TouchableContainer({
  onPress,
  style,
  children,
}: PropsWithChildren<IProps>) {
  return (
    <Style style={style}>
      <Touchable onPress={onPress}>{children}</Touchable>
    </Style>
  );
}

const Style = styled.View``;

const Touchable = styled.TouchableWithoutFeedback``;
