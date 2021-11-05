import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/native';
import { Pressable } from '../pressable';

export function TouchableContainer({
  onPress,
  style,
  children,
}: PropsWithChildren<Pressable>) {
  return (
    <Style style={style}>
      <Touchable onPress={onPress}>{children}</Touchable>
    </Style>
  );
}

const Style = styled.View``;

const Touchable = styled.TouchableWithoutFeedback``;
