import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/native';
import { ColorConfig, SizeConfig } from '../../../configs';
import { FontFamily } from '../../data-types/enums';
import { IStyleable } from '../../data-types/props';
import { Text } from '../../styled-components';
import { TouchableContainer } from '../auxiliaries';
import { IHaveWidth, IPressable } from '../interfaces';

interface IHaveBackgroundColor {
  backgroundColor: string;
}

interface IHaveHeight {
  height: number;
}

interface IProps
  extends IStyleable,
    IPressable,
    Partial<IHaveWidth>,
    Partial<IHaveBackgroundColor>,
    Partial<IHaveHeight> {
  children: string;
  fontColor?: string;
  isDragging: React.MutableRefObject<boolean>;
}

export function TextButton({
  onPress,
  children,
  style,
  width = SizeConfig.maxElementWidth,
  backgroundColor = ColorConfig.blue2,
  fontColor = ColorConfig.white1,
  height = SizeConfig.buttonPressableArea,
  isDragging,
}: PropsWithChildren<IProps>) {
  function pressHandler() {
    if (isDragging && isDragging.current) return;
    onPress();
  }

  return (
    <TouchableContainer onPress={pressHandler} style={style}>
      <Container
        height={height}
        width={width}
        backgroundColor={backgroundColor}
      >
        <Text fontFamily={FontFamily.medium} color={fontColor}>
          {children}
        </Text>
      </Container>
    </TouchableContainer>
  );
}

type ContainerProps = IHaveWidth & IHaveBackgroundColor & IHaveHeight;

const Container = styled.View<ContainerProps>`
  height: ${({ height }) => height + 'px'};
  width: ${({ width }) => width + 'px'};
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${SizeConfig.borderRadius + 'px'};
`;
