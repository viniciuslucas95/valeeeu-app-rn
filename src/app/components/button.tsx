import React, { PropsWithChildren } from 'react';
import { ViewElementStyle } from '../data-types/types';
import { TouchableContainer } from './touchable-container';
import { Text } from '../styled-components';
import { FontFamily } from '../data-types/enums';
import { ThemeConfig } from '../../configs';
import styled from 'styled-components/native';
import { SizeConstant } from '../../configs/constants';

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
  width = SizeConstant.maxElementWidth,
}: PropsWithChildren<IProps>) {
  return (
    <TouchableContainer onPress={onPress} style={style}>
      <Container width={width}>
        <Text
          fontFamily={FontFamily.medium}
          color={ThemeConfig.neutral}
          fontSize={SizeConstant.bigText + 'px'}
        >
          {children}
        </Text>
      </Container>
    </TouchableContainer>
  );
}

interface IProps {
  width: number;
}

const Container = styled.View<IProps>`
  height: ${SizeConstant.buttonPressableArea + 'px'};
  width: ${({ width }) => width + 'px'};
  align-items: center;
  justify-content: center;
  background-color: ${ThemeConfig.app};
  border-radius: ${SizeConstant.borderRadius + 'px'};
`;
