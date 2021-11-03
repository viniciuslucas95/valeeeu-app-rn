import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/native';
import { ColorConstant, SizeConstant } from '../../../configs';
import { FontFamily } from '../../data-types/enums';
import { UnitHandler } from '../../helpers';
import { TouchableContainer } from '../auxiliaries';
import { Text } from '../../styled-components';
import { ViewElementStyle } from '../../data-types/types';

interface IProps {
  onPress(): void;
  icon?: JSX.Element;
  width?: number;
  style?: ViewElementStyle;
  children: string;
  label?: string;
}

export function FakeTextInputButton({
  onPress,
  icon,
  width,
  style,
  children,
  label,
}: PropsWithChildren<IProps>) {
  return (
    <TouchableContainer onPress={onPress}>
      <Container
        style={[style, { elevation: 2.5 }]}
        width={width ?? SizeConstant.maxElementWidth}
      >
        {icon ? <IconContainer>{icon}</IconContainer> : null}
        <Text fontFamily={FontFamily.regular} color={ColorConstant.gray4}>
          {children}
        </Text>
        {label ? (
          <LabelContainer>
            <Text fontFamily={FontFamily.medium} color={ColorConstant.black1}>
              {label}
            </Text>
          </LabelContainer>
        ) : null}
      </Container>
    </TouchableContainer>
  );
}

const Test = styled.View``;

interface IContainerProps {
  width: number;
}

const Container = styled.View<IContainerProps>`
  margin: ${SizeConstant.mediumMargin + 'px'} 0;
  width: ${({ width }) => width + 'px'};
  height: ${UnitHandler.rem(
    SizeConstant.buttonPressableArea + SizeConstant.thinBorderWidth
  ) + 'px'};
  align-self: center;
  flex-direction: row;
  align-items: center;
  padding: 0 ${SizeConstant.mediumMargin + 'px'};
  background-color: ${ColorConstant.white1};
  border-radius: ${SizeConstant.borderRadius + 'px'};
  border-width: ${SizeConstant.thickBorderWidth + 'px'};
  border-color: ${ColorConstant.gray3};
`;

const IconContainer = styled.View`
  margin-right: ${SizeConstant.mediumMargin + 'px'};
  top: 1px;
`;

const LabelContainer = styled.View`
  background-color: ${ColorConstant.white1};
  position: absolute;
  padding: 0 ${SizeConstant.mediumMargin + 'px'};
  left: ${SizeConstant.mediumMargin + 'px'};
  top: -${SizeConstant.inputLabelPositionAdjust + 'px'};
`;
