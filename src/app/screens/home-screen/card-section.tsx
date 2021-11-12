import React, { useEffect, useState } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import {
  MarginSizeConfig,
  PictureSizeConfig,
  TextSizeConfig,
} from '../../../configs';
import { Text } from '../../components';
import { FontFamily } from '../../constants';
import {
  IAreaTagDto,
  IFilterDto,
  IOrderByDto,
  ISearchResultItemDto,
} from '../../dtos';
import { useSearchResultApi } from '../../hooks';
import { getListMargin } from './helpers';

import { CardItem } from './card-item';

interface IProps {
  tag: IAreaTagDto;
  filter?: IFilterDto;
  orderBy?: IOrderByDto;
}

export function CardSection({ tag, filter, orderBy }: IProps) {
  const { width: windowWidth } = useWindowDimensions();
  const width = windowWidth - MarginSizeConfig.big * 2;
  const startingDesiredQuantity = Math.ceil(width / PictureSizeConfig.size);
  const [desiredQuantity, setDesiredQuantity] = useState(
    startingDesiredQuantity
  );
  const [wireframes, setWireframes] = useState(startingDesiredQuantity);
  const { searchResult, error } = useSearchResultApi({ desiredQuantity });

  useEffect(() => {
    if (desiredQuantity < searchResult.results.length) return;
    setWireframes(desiredQuantity - searchResult.results.length);
  }, [desiredQuantity]);

  useEffect(() => {
    if (searchResult.results.length === desiredQuantity) setWireframes(0);
  }, [searchResult]);

  function getFlatListData() {
    if (wireframes === 0) return searchResult.results;
    let data: (ISearchResultItemDto | undefined)[] = [...searchResult.results];
    for (let i = 0; i < wireframes; i++) {
      data.push(undefined);
    }
    return data;
  }

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.sectionHeaderContainer,
          {
            width: width,
          },
        ]}
      >
        <View style={styles.titleContainer}>
          <Text
            fontFamily={FontFamily.robotoMedium}
            fontSize={TextSizeConfig.big}
          >
            {'test'}
          </Text>
          <Text>total tags</Text>
        </View>
        <Text>Ver mais botao</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        bounces={false}
        horizontal
        data={getFlatListData()}
        renderItem={({ item, index }) => (
          <CardItem
            style={getListMargin(index, searchResult.results.length)}
            data={item}
          />
        )}
        keyExtractor={(item, index) => (item ? item.id : index.toString())}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  sectionHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: MarginSizeConfig.big,
  },
  titleContainer: {
    flexDirection: 'row',
  },
});
