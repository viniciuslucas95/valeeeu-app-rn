import React, { memo } from 'react';
import { StyleProp, View, ViewStyle, StyleSheet, FlatList } from 'react-native';

import { MarginSizeConfig } from '../../../../configs';
import { IFilterDto } from '../../../dtos';
import { formatDistance, formatRating } from '../../../helpers';

import { FilterTagItem } from './filter-tag-item';

interface IProps {
  style?: StyleProp<ViewStyle>;
  filter?: IFilterDto;
}

const FilterTagListComponent = ({ style, filter }: IProps) => {
  const maxDistance = filter?.maxDistance
    ? formatDistance(filter?.maxDistance)
    : undefined;
  const minRating = filter?.minRating
    ? formatRating(filter.minRating)
    : undefined;

  const filterTagItems: JSX.Element[] = [
    <FilterTagItem
      placeholder={'Profissão'}
      text={filter?.areaTag.jobTag?.jobTag}
      onPress={() => console.log('Job filter tag pressed...')}
    />,
    <FilterTagItem
      placeholder={'Serviço'}
      text={filter?.areaTag.jobTag?.serviceTag?.serviceTag}
      onPress={() => console.log('Service filter tag pressed...')}
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

  return (
    <View style={[styles.container, style]}>
      <FlatList
        horizontal
        data={filterTagItems}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        bounces={false}
        renderItem={({ item }) => item}
        keyExtractor={(_, index) => index.toString()}
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
