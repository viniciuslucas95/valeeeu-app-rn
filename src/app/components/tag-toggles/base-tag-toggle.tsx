import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/native';
import { ColorConstant, SizeConstant } from '../../../configs';
import { ViewElementStyle } from '../../data-types/types';
import { IconButton } from '../buttons';
import { UnitHandler } from '../../helpers';
import { JustTextButton } from '../buttons';

interface IProps {
  onPress(): void;
  children: JSX.Element;
  label: string;
  isToggled?: boolean;
  style?: ViewElementStyle;
  elevation?: number;
}

const areaTagMaxWidth =
  UnitHandler.rem(SizeConstant.buttonPressableArea * 1.7) + 'px';

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
          backgroundColor: isToggled
            ? ColorConstant.blue2
            : ColorConstant.gray3,
          elevation: 2.5,
        }}
        onPress={onPress}
      >
        {children}
      </IconButton>
      <JustTextButton
        textAlign='center'
        extraTouchableArea={-pressabledAreaAdjust}
        color={isToggled ? ColorConstant.blue2 : ColorConstant.gray4}
        onPress={onPress}
      >
        {label}
      </JustTextButton>
    </Container>
  );
}

const Container = styled.View`
  margin-top: ${SizeConstant.mediumMargin + 'px'};
  width: ${areaTagMaxWidth};
  align-items: center;
`;
