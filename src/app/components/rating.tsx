import React from 'react';
import styled from 'styled-components/native';
import { StarIcon } from '../../assets/svgs/icons';
import { ColorConfig, SizeConfig } from '../../configs';
import { FontFamily } from '../data-types/enums';
import { ViewElementStyle } from '../data-types/types';
import { UnitHandler } from '../helpers';
import { Text } from '../styled-components';

interface IProps {
  style?: ViewElementStyle;
  rating: number;
  totalVotes: number;
}

export function Rating({ style, rating, totalVotes }: IProps) {
  return (
    <Container style={style}>
      <StarIcon
        style={{
          bottom: UnitHandler.rem(4.25),
          marginRight: SizeConfig.tinyMargin,
        }}
        color={ColorConfig.yellow1}
        size='tiny'
      />
      <Text
        fontFamily={FontFamily.medium}
        color={ColorConfig.yellow1}
        fontSize={SizeConfig.mediumText}
      >
        {rating.toString().replace('.', ',')}
      </Text>
      <Text
        style={{
          bottom: UnitHandler.rem(2),
        }}
        fontFamily={FontFamily.light}
        color={ColorConfig.gray5}
        fontSize={SizeConfig.tinyText}
      >
        {' '}
        ({totalVotes})
      </Text>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;
