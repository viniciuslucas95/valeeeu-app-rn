import React, { memo, useCallback } from 'react';
import { StyleProp, View, ViewStyle, StyleSheet, FlatList } from 'react-native';

import { MarginSizeConfig } from '../../../../configs';
import { IFilterDto } from '../../../dtos';
import { formatDistance, formatPrice, formatRating } from '../../../helpers';

import { FilterTagItem } from './filter-tag-item';

interface IProps {
  style?: StyleProp<ViewStyle>;
  filter?: IFilterDto;
}

const FilterTagListComponent = ({ style, filter }: IProps) => {
  const maxDistance = filter?.maxDistance
    ? `Até ${formatDistance(filter?.maxDistance)}`
    : undefined;
  const minRating = filter?.minRating
    ? `Ao menos ${formatRating(filter.minRating)} estrelas`
    : undefined;
  const maxPrice = filter?.maxPrice
    ? `Abaixo de R$ ${formatPrice(filter.maxPrice)}`
    : undefined;
  const jobTag = filter?.areaTag.jobTag?.jobTag;
  const serviceTag = filter?.areaTag.jobTag?.serviceTag?.serviceTag;

  const filterTagItems: JSX.Element[] = [
    <FilterTagItem
      placeholder={'Profissão'}
      text={jobTag}
      onPress={() => console.log('Job filter tag pressed...')}
    />,
    <FilterTagItem
      placeholder={'Serviço'}
      text={serviceTag}
      onPress={
        serviceTag
          ? () => console.log('Service filter tag pressed...')
          : undefined
      }
    />,
    <FilterTagItem
      placeholder={'Preço'}
      text={maxPrice}
      onPress={() => console.log('Price filter tag pressed...')}
    />,
    <FilterTagItem
      placeholder={'Distância'}
      text={maxDistance}
      onPress={() => console.log('Distance filter tag pressed...')}
    />,
    <FilterTagItem
      placeholder={'Avaliação'}
      text={minRating}
      onPress={() => console.log('Rating filter tag pressed...')}
    />,
  ];

  const renderItem = useCallback(({ item }) => item, []);

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const itemSeparatorComponent = useCallback(
    () => <View style={styles.separator} />,
    []
  );

  return (
    <View style={[styles.container, style]}>
      <FlatList
        horizontal
        data={filterTagItems}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        ItemSeparatorComponent={itemSeparatorComponent}
        bounces={false}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export const FilterTagList = memo(FilterTagListComponent);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  flatList: {
    paddingHorizontal: MarginSizeConfig.big,
  },
  separator: {
    marginHorizontal: MarginSizeConfig.tiny * 1.5,
  },
});
