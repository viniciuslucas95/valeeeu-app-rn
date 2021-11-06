import React from 'react';
import styled from 'styled-components/native';
import { LocationIcon } from '../../assets/svgs/icons';
import { ColorConfig, SizeConfig } from '../../configs';
import { IStyleable } from '../data-types/props';
import { UnitHandler } from '../helpers';
import { Text } from '../styled-components';

interface IProps extends IStyleable {
  distance: number;
}

export function Distance({ style, distance }: IProps) {
  return (
    <Container style={style}>
      <LocationIcon
        style={{
          bottom: UnitHandler.rem(3),
          marginRight: SizeConfig.tinyMargin,
        }}
        color={ColorConfig.red2}
        size='tiny'
      />
      <Text color={ColorConfig.gray5} fontSize={SizeConfig.smallText}>
        {distance > 1000
          ? (distance / 1000).toFixed(2).replace('0', '').replace('.', ',') +
            ' km'
          : distance + ' m'}
      </Text>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;
