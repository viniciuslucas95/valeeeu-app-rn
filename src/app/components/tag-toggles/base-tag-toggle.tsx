import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/native';
import { ColorConfig, SizeConfig } from '../../../configs';
import { ViewElementStyle } from '../../data-types/types';
import { IconButton } from '../buttons';
import { UnitHandler } from '../../helpers';
import { JustTextButton } from '../buttons';
import { FontFamily } from '../../data-types/enums';

interface IProps {
  onPress(): void;
  children: JSX.Element;
  label: string;
  isToggled?: boolean;
  style?: ViewElementStyle;
  elevation?: number;
}

const areaTagMaxWidth =
  UnitHandler.rem(SizeConfig.buttonPressableArea * 1.7) + 'px';

export const pressabledAreaAdjust = UnitHandler.rem(6);

export function BaseTagToggle({
  onPress,
  label,
  isToggled,
  children,
  style,
}: PropsWithChildren<IProps>) {
  return (
    <Container style={style}>
      <IconButton
        background={{
          backgroundColor: isToggled ? ColorConfig.blue2 : ColorConfig.gray3,
          elevation: 2.5,
        }}
        onPress={onPress}
      >
        {children}
      </IconButton>
      <JustTextButton
        fontFamily={isToggled ? FontFamily.regular : FontFamily.light}
        textAlign='center'
        extraTouchableArea={-pressabledAreaAdjust}
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
