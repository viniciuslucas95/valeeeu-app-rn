import React from 'react';
import { HomeFilterToggle } from '../toggles';
import { HomeFilterButton } from '../buttons';
import { IStyleable } from '../../data-types/interfaces';
import { SizeConfig } from '../../../configs';
import { ScrollView, View } from 'react-native';

interface IProps extends IStyleable {
  onDistanceFilterPress(): void;
  distance: number;
  onOnlineOnlyFilterPress(): void;
  onlineOnly: boolean;
  rating: number;
  onRatingFilterPress(): void;
}

const borderMargin = SizeConfig.bigMargin;
const notBorderMargin = SizeConfig.smallMargin;

export function HomeFilterButtonsAndTogglesList({
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
    <View style={style}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HomeFilterButton
          style={{
            marginLeft: borderMargin,
            marginRight: notBorderMargin,
          }}
          onPress={onDistanceFilterPress}
        >
          {convertDistanceToText()}
        </HomeFilterButton>
        <HomeFilterToggle
          style={{ marginHorizontal: notBorderMargin }}
          onPress={onOnlineOnlyFilterPress}
          isToggled={onlineOnly}
        >
          Está online
        </HomeFilterToggle>
        <HomeFilterButton
          style={{ marginRight: borderMargin, marginLeft: notBorderMargin }}
          onPress={onRatingFilterPress}
        >
          {convertRatingToText()}
        </HomeFilterButton>
      </ScrollView>
    </View>
  );
}
