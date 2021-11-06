import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/native';
import { ColorConfig, SizeConfig } from '../../../configs';
import { UnitHandler } from '../../helpers';
import { FontFamily } from '../../data-types/enums';
import { Text } from '../../styled-components';
import { TouchableContainer } from '../auxiliaries';
import { Toggleable } from './types';
import { IToggleable } from './interfaces';

interface IProps extends Toggleable {
  children: string;
}

export function HomeFilterToggle({
  children,
  onPress,
  style,
  isToggled = false,
}: PropsWithChildren<IProps>) {
  return (
    <TouchableContainer style={style} onPress={onPress}>
      <TouchableArea
        isToggled={isToggled}
        style={{ elevation: 0.5, marginVertical: 2 }}
      >
        <Text
          fontFamily={isToggled ? FontFamily.regular : FontFamily.light}
          color={isToggled ? ColorConfig.white1 : ColorConfig.gray5}
        >
          {children}
        </Text>
      </TouchableArea>
    </TouchableContainer>
  );
}

// prettier-ignore
const TouchableArea = styled.View<IToggleable>`
  border-radius: ${UnitHandler.rem(20) + 'px'};
  border-width: ${SizeConfig.thinBorderWidth + 'px'};
  border-color: ${({ isToggled }) =>
    isToggled ? ColorConfig.blue2 : ColorConfig.gray3};
  background-color: ${({ isToggled }) =>
    isToggled ? ColorConfig.blue2 : ColorConfig.white1};
  justify-content: center;
  align-items: center;
  padding: ${UnitHandler.rem(6) + 'px'} ${({ isToggled }) => isToggled ? UnitHandler.rem(11.25) + 'px' : UnitHandler.rem(12) + 'px'};
`;
