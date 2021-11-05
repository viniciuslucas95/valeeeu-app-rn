import React, { PropsWithChildren } from 'react';
import { FontFamily } from '../../data-types/enums';
import { TextAlign } from '../../data-types/types';
import { TouchableContainer } from '../auxiliaries';
import styled, { css } from 'styled-components/native';
import { ColorConfig } from '../../../configs';
import { Text } from '../../styled-components';
import { UnitHandler } from '../../helpers';
import { PressableWithStringChildren } from './pressable-with-string-children';

interface IHaveArea {
  extraTouchableArea: number;
  removePressableAreaMargin: boolean;
}

interface IProps extends PressableWithStringChildren, Partial<IHaveArea> {
  fontFamily?: string;
  color?: string;
  textAlign?: TextAlign;
}

export const pressableArea = UnitHandler.rem(10);

export function JustTextButton({
  onPress,
  children,
  style,
  extraTouchableArea = 0,
  removePressableAreaMargin = false,
  fontFamily = FontFamily.light,
  textAlign = 'left',
  color = ColorConfig.blue2,
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

const TouchableTextArea = styled.View<IHaveArea>`
  border-radius: ${({ extraTouchableArea }) =>
    pressableArea + extraTouchableArea + 'px'};
  padding: ${({ extraTouchableArea }) =>
    pressableArea + extraTouchableArea + 'px'};
  ${({ removePressableAreaMargin }) =>
    removePressableAreaMargin
      ? css`
          margin-top: -${pressableArea + 'px'};
          margin-bottom: -${pressableArea + 'px'};
        `
      : null};
`;
