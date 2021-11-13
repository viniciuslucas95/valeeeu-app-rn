import React, { memo, useCallback } from 'react';
import { FlatList as FlatListNative } from 'react-native';

import { ISearchResultItemDto } from '../../dtos';

import { CardItem } from './card-item';

interface IProps {
  onEndReached(): void;
  data: (ISearchResultItemDto | undefined)[];
}

const CardListComponent = ({ onEndReached, data }: IProps) => {
  const renderItem = useCallback(({ item }) => <CardItem item={item} />, []);
  const keyExtractor = useCallback(
    (item, index) => (item ? item.id : index.toString()),
    []
  );

  return (
    <FlatListNative
      showsHorizontalScrollIndicator={false}
      bounces={false}
      horizontal
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

export const CardList = memo(CardListComponent);
