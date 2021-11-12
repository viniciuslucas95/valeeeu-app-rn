import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { IAreaTagDto, IFilterDto, IOrderByDto } from '../../dtos';
import { useSearchResultApi } from '../../hooks';

interface IProps {
  tag: IAreaTagDto;
  filter?: IFilterDto;
  orderBy?: IOrderByDto;
}

export function CardSection({ tag, filter, orderBy }: IProps) {
  const { searchResult, error } = useSearchResultApi({ desiredQuantity: 1 });

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        bounces={false}
        horizontal
        data={searchResult.results}
        renderItem={({ item }) => <></>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
