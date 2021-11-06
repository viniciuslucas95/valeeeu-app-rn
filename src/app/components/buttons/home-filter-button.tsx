import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/native';
import { ExpandIcon } from '../../../assets/svgs/icons';
import { ColorConfig, SizeConfig } from '../../../configs';
import { FontFamily } from '../../data-types/enums';
import { IStyleable } from '../../data-types/props';
import { UnitHandler } from '../../helpers';
import { Text } from '../../styled-components';
import { TouchableContainer } from '../auxiliaries';
import { IPressable } from '../interfaces';

interface IProps extends IStyleable, IPressable {
  children: string;
}

export function HomeFilterButton({
  children,
  onPress,
  style,
}: PropsWithChildren<IProps>) {
  return (
    <TouchableContainer style={style} onPress={onPress}>
      <TouchableArea style={{ elevation: 0.5, marginVertical: 2 }}>
        <Text fontFamily={FontFamily.light} color={ColorConfig.gray5}>
          {children}
        </Text>
        <ExpandIcon
          size='tiny'
          style={{ marginLeft: SizeConfig.smallMargin, top: 1 }}
          color={ColorConfig.gray4}
        />
      </TouchableArea>
    </TouchableContainer>
  );
}

// prettier-ignore
const TouchableArea = styled.View`
  flex-direction: row;
  border-radius: ${UnitHandler.rem(20) + 'px'};
  border-width: ${SizeConfig.thinBorderWidth + 'px'};
  border-color: ${ColorConfig.gray3};
  padding: ${UnitHandler.rem(6) + 'px'} ${UnitHandler.rem(12) + 'px'};
  background-color: ${ColorConfig.white1};
  align-items: center;
`;
