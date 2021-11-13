import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';

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
  ISearchResultDto,
  ISearchResultItemDto,
} from '../../dtos';
import { useSearchResultApi } from '../../hooks';
import { getListMargin } from './helpers';

import { CardItem } from './card-item';
import { CardList } from './card-list';

interface IProps {
  tag: IAreaTagDto;
  filter?: IFilterDto;
  orderBy?: IOrderByDto;
}

export function CardSection({ tag, filter, orderBy }: IProps) {
  const { width: windowWidth } = useWindowDimensions();
  const width = windowWidth - MarginSizeConfig.big * 2;
  const resultsPerFetch = Math.ceil(width / PictureSizeConfig.size);
  const [resultQuantity, setResultQuantity] = useState(resultsPerFetch * 2);
  const [wireframes, setWireframes] = useState(resultsPerFetch * 2);
  const { searchResult, error } = useSearchResultApi({ resultQuantity });
  const [data, setData] = useState<(ISearchResultItemDto | undefined)[]>([]);

  useEffect(() => {
    if (resultQuantity <= searchResult.dataRetrieved.length) return;
    setWireframes(resultQuantity - searchResult.dataRetrieved.length);
  }, [resultQuantity]);

  useEffect(() => {
    setData(getListData());
  }, [wireframes]);

  useEffect(() => {
    if (searchResult.dataRetrieved.length >= resultQuantity) setWireframes(0);
  }, [searchResult]);

  function getListData() {
    const data: undefined[] = [];
    for (let i = 0; i < wireframes; i++) {
      data.push(undefined);
    }
    return [...searchResult.dataRetrieved, ...data];
  }

  const fetchMore = useCallback(() => {
    setResultQuantity(resultQuantity + resultsPerFetch);
  }, [resultQuantity]);

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
      <CardList onEndReached={fetchMore} data={data} />
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
