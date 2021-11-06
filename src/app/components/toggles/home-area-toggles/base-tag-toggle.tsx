import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/native';
import { ColorConfig, SizeConfig } from '../../../../configs';
import { IconButton } from '../../buttons';
import { UnitHandler } from '../../../helpers';
import { JustTextButton } from '../../buttons';
import { FontFamily } from '../../../data-types/enums';
import { Toggleable } from '../types';

interface IProps extends Toggleable {
  label: string;
  children: JSX.Element;
}

const areaTagMaxWidth =
  UnitHandler.rem(SizeConfig.buttonPressableArea * 1.7) + 'px';

export const pressableAreaAdjust = UnitHandler.rem(6);

export function BaseTagToggle({
  onPress,
  label,
  isToggled = false,
  children,
  style,
}: PropsWithChildren<IProps>) {
  return (
    <Container style={style}>
      <IconButton
        backgroundColor={isToggled ? ColorConfig.blue2 : ColorConfig.gray3}
        onPress={onPress}
      >
        {children}
      </IconButton>
      <JustTextButton
        fontFamily={isToggled ? FontFamily.regular : FontFamily.light}
        textAlign='center'
        extraTouchableArea={-pressableAreaAdjust}
        color={isToggled ? ColorConfig.blue2 : ColorConfig.gray5}
        onPress={onPress}
      >
        {label}
      </JustTextButton>
    </Container>
  );
}

const Container = styled.View`
  margin-top: ${SizeConfig.mediumMargin + 'px'};
  width: ${areaTagMaxWidth};
  align-items: center;
`;
