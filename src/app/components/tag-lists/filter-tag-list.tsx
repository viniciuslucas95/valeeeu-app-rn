import React from 'react';
import styled from 'styled-components/native';
import { SizeConfig } from '../../../configs';
import { ViewElementStyle } from '../../data-types/types';
import { TextTagToggle } from '../tag-toggles';
import { FilterTag } from './filter-tag';

interface IProps {
  onDistanceFilterPress(): void;
  distance: number;
  onOnlineOnlyFilterPress(): void;
  onlineOnly: boolean;
  rating: number;
  onRatingFilterPress(): void;
  style?: ViewElementStyle;
}

const notBorderMargin = SizeConfig.mediumMargin * 0.5;
const borderMargin = SizeConfig.bigMargin;
const notBorderFilterStyle = {
  marginHorizontal: notBorderMargin,
};

export function FilterTagList({
  onDistanceFilterPress,
  distance,
  onlineOnly,
  onOnlineOnlyFilterPress,
  rating,
  onRatingFilterPress,
  style,
}: IProps) {
  function convertDistanceToText() {
    if (!distance) return 'Distância';
    return distance >= 1000
      ? 'Até ' +
          (distance / 1000).toFixed(2).replace('0', '').replace('.', ',') +
          'km'
      : 'Até ' + distance + 'm';
  }

  function convertRatingToText() {
    if (!rating) return 'Avaliação';
    return 'Acima de ' + rating.toFixed(2).replace('0', '').replace('.', ',');
  }

  return (
    <ScrollViewWrapper style={style}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FilterTag
          style={{
            marginLeft: borderMargin,
            marginRight: notBorderMargin,
          }}
          onPress={onDistanceFilterPress}
        >
          {convertDistanceToText()}
        </FilterTag>
        <TextTagToggle
          style={notBorderFilterStyle}
          onPress={onOnlineOnlyFilterPress}
          isActive={onlineOnly}
        >
          Está online
        </TextTagToggle>
        <FilterTag
          style={{
            marginLeft: notBorderMargin,
            marginRight: borderMargin,
          }}
          onPress={onRatingFilterPress}
        >
          {convertRatingToText()}
        </FilterTag>
      </ScrollView>
    </ScrollViewWrapper>
  );
}

const ScrollViewWrapper = styled.View``;

const ScrollView = styled.ScrollView``;
