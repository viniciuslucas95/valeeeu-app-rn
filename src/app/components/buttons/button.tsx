import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/native';
import { ColorConfig, SizeConfig } from '../../../configs';
import { FontFamily } from '../../data-types/enums';
import { ViewElementStyle } from '../../data-types/types';
import { Text } from '../../styled-components';
import { TouchableContainer } from '../auxiliaries';

interface IProps {
  onPress(): void;
  children: string;
  style?: ViewElementStyle;
  width?: number;
}

export function Button({
  onPress,
  children,
  style,
  width = SizeConfig.maxElementWidth,
}: PropsWithChildren<IProps>) {
  return (
    <TouchableContainer onPress={onPress} style={style}>
      <Container width={width}>
        <Text fontFamily={FontFamily.medium} color={ColorConfig.white1}>
          {children}
        </Text>
      </Container>
    </TouchableContainer>
  );
}

interface IButtonProps {
  width: number;
}

const Container = styled.View<IButtonProps>`
  height: ${SizeConfig.buttonPressableArea + 'px'};
  width: ${({ width }) => width + 'px'};
  align-items: center;
  justify-content: center;
  background-color: ${ColorConfig.blue2};
  border-radius: ${SizeConfig.borderRadius + 'px'};
`;
