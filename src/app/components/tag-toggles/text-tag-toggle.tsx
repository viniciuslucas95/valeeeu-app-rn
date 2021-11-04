import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/native';
import { ColorConfig, SizeConfig } from '../../../configs';
import { ViewElementStyle } from '../../data-types/types';
import { UnitHandler } from '../../helpers';
import { FontFamily } from '../../data-types/enums';
import { Text } from '../../styled-components';
import { TouchableContainer } from '../auxiliaries';

interface IProps {
  children: string;
  onPress(): void;
  style?: ViewElementStyle;
  isActive?: boolean;
}

export function TextTagToggle({
  children,
  onPress,
  style,
  isActive = false,
}: PropsWithChildren<IProps>) {
  return (
    <TouchableContainer style={style} onPress={onPress}>
      <TouchableArea
        isActive={isActive}
        style={{ elevation: 0.5, marginVertical: 2 }}
      >
        <Text
          fontFamily={isActive ? FontFamily.regular : FontFamily.light}
          color={isActive ? ColorConfig.white1 : ColorConfig.gray5}
        >
          {children}
        </Text>
      </TouchableArea>
    </TouchableContainer>
  );
}

interface ITouchableAreaProps {
  isActive: boolean;
}

// prettier-ignore
const TouchableArea = styled.View<ITouchableAreaProps>`
  border-radius: ${UnitHandler.rem(20) + 'px'};
  border-width: ${SizeConfig.thinBorderWidth + 'px'};
  border-color: ${({ isActive }) =>
    isActive ? ColorConfig.blue2 : ColorConfig.gray3};
  background-color: ${({ isActive }) =>
    isActive ? ColorConfig.blue2 : ColorConfig.white1};
  justify-content: center;
  align-items: center;
  padding: ${UnitHandler.rem(6) + 'px'} ${({ isActive }) => isActive ? UnitHandler.rem(11.25) + 'px' : UnitHandler.rem(12) + 'px'};
`;
