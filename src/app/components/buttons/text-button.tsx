import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/native';
import { ColorConfig, SizeConfig } from '../../../configs';
import { FontFamily } from '../../data-types/enums';
import { IStyleable } from '../../data-types/props';
import { Text } from '../../styled-components';
import { TouchableContainer } from '../auxiliaries';
import { IHaveWidth, IPressable } from '../interfaces';

interface IProps extends IStyleable, IPressable, Partial<IHaveWidth> {
  children: string;
}

export function TextButton({
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

const Container = styled.View<IHaveWidth>`
  height: ${SizeConfig.buttonPressableArea + 'px'};
  width: ${({ width }) => width + 'px'};
  align-items: center;
  justify-content: center;
  background-color: ${ColorConfig.blue2};
  border-radius: ${SizeConfig.borderRadius + 'px'};
`;
