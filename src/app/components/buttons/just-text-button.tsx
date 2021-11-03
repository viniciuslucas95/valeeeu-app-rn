import React, { PropsWithChildren } from 'react';
import { FontFamily } from '../../data-types/enums';
import { TextAlign, ViewElementStyle } from '../../data-types/types';
import { TouchableContainer } from '../auxiliaries';
import styled, { css } from 'styled-components/native';
import { ColorConstant } from '../../../configs';
import { Text } from '../../styled-components';
import { UnitHandler } from '../../helpers';

interface IProps {
  onPress(): void;
  style?: ViewElementStyle;
  children: string;
  extraTouchableArea?: number;
  removePressableAreaMargin?: boolean;
  fontFamily?: string;
  color?: string;
  textAlign?: TextAlign;
}

export function JustTextButton({
  onPress,
  children,
  style,
  extraTouchableArea = 0,
  removePressableAreaMargin = false,
  fontFamily = FontFamily.light,
  textAlign = 'left',
  color = ColorConstant.blue2,
}: PropsWithChildren<IProps>) {
  return (
    <TouchableContainer onPress={onPress} style={style}>
      <TouchableTextArea
        removePressableAreaMargin={removePressableAreaMargin}
        extraTouchableArea={extraTouchableArea}
      >
        <Text textAlign={textAlign} fontFamily={fontFamily} color={color}>
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
