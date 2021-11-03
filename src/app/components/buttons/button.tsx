import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/native';
import { ColorConstant, SizeConstant } from '../../../configs';
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
  width = SizeConstant.maxElementWidth,
}: PropsWithChildren<IProps>) {
  return (
    <TouchableContainer onPress={onPress} style={style}>
      <Container width={width}>
        <Text
          fontFamily={FontFamily.medium}
          color={ColorConstant.white1}
          fontSize={SizeConstant.bigText + 'px'}
        >
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
  height: ${SizeConstant.buttonPressableArea + 'px'};
  width: ${({ width }) => width + 'px'};
  align-items: center;
  justify-content: center;
  background-color: ${ColorConstant.blue2};
  border-radius: ${SizeConstant.borderRadius + 'px'};
`;
