import React, { PropsWithChildren } from 'react';
import { TouchableContainer } from './touchable-container';
import { Text } from '../styled-components';
import { ViewElementStyle } from '../data-types/types';
import styled, { css } from 'styled-components/native';
import { FontFamily } from '../data-types/enums';
import { ThemeConfig } from '../../configs';
import { UnitHandler } from '../helpers';

interface IProps {
  onPress(): void;
  style?: ViewElementStyle;
  children: string;
  extraTouchableArea?: number;
  removePressableAreaMargin?: boolean;
}

export function TextButton({
  onPress,
  children,
  style,
  extraTouchableArea = 0,
  removePressableAreaMargin = false,
}: PropsWithChildren<IProps>) {
  return (
    <TouchableContainer onPress={onPress} style={style}>
      <TouchableTextArea
        removePressableAreaMargin={removePressableAreaMargin}
        extraTouchableArea={extraTouchableArea}
      >
        <Text fontFamily={FontFamily.light} color={ThemeConfig.app}>
          {children}
        </Text>
      </TouchableTextArea>
    </TouchableContainer>
  );
}

interface ITextAreaProps {
  extraTouchableArea: number;
  removePressableAreaMargin: boolean;
}

const TouchableTextArea = styled.View<ITextAreaProps>`
  border-radius: ${({ extraTouchableArea }) =>
    UnitHandler.rem(10) + extraTouchableArea + 'px'};
  padding: ${({ extraTouchableArea }) =>
    UnitHandler.rem(10) + extraTouchableArea + 'px'};
  ${({ removePressableAreaMargin }) =>
    removePressableAreaMargin
      ? css`
          margin-top: -${UnitHandler.rem(10) + 'px'};
          margin-bottom: -${UnitHandler.rem(10) + 'px'};
        `
      : null};
`;
