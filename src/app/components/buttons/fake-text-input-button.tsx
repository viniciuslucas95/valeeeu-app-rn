import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/native';
import { ColorConfig, SizeConfig } from '../../../configs';
import { FontFamily } from '../../data-types/enums';
import { UnitHandler } from '../../helpers';
import { TouchableContainer } from '../auxiliaries';
import { Text } from '../../styled-components';
import { IStyleable } from '../../data-types/props';
import { IHaveWidth, IPressable } from '../interfaces';

interface IProps extends IStyleable, Partial<IHaveWidth>, IPressable {
  icon?: JSX.Element;
  label?: string;
  children: string;
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
        style={[style, { elevation: 1 }]}
        width={width ?? SizeConfig.maxElementWidth}
      >
        {icon ? <IconContainer>{icon}</IconContainer> : null}
        <Text fontFamily={FontFamily.regular} color={ColorConfig.gray4}>
          {children}
        </Text>
        {label ? (
          <LabelContainer>
            <Text fontFamily={FontFamily.medium} color={ColorConfig.black1}>
              {label}
            </Text>
          </LabelContainer>
        ) : null}
      </Container>
    </TouchableContainer>
  );
}

const Container = styled.View<IHaveWidth>`
  margin: ${SizeConfig.mediumMargin + 'px'} 0;
  width: ${({ width }) => width + 'px'};
  height: ${SizeConfig.buttonPressableArea + UnitHandler.rem(1) + 'px'};
  align-self: center;
  flex-direction: row;
  align-items: center;
  padding: 0 ${SizeConfig.mediumMargin + 'px'};
  background-color: ${ColorConfig.white1};
  border-radius: ${SizeConfig.borderRadius + 'px'};
  border-width: ${SizeConfig.thinBorderWidth + 'px'};
  border-color: ${ColorConfig.gray3};
`;

const IconContainer = styled.View`
  margin-right: ${SizeConfig.mediumMargin + 'px'};
  top: 1px;
`;

const LabelContainer = styled.View`
  background-color: ${ColorConfig.white1};
  position: absolute;
  padding: 0 ${SizeConfig.mediumMargin + 'px'};
  left: ${SizeConfig.mediumMargin + 'px'};
  top: -${SizeConfig.inputLabelPositionAdjust + 'px'};
`;
