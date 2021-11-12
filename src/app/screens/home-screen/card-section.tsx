import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { MarginSizeConfig, TextSizeConfig } from '../../../configs';
import { Text } from '../../components';
import { FontFamily } from '../../constants';
import { IAreaTagDto, IFilterDto, IOrderByDto } from '../../dtos';
import { useSearchResultApi } from '../../hooks';
import { getListMargin } from './helpers';

import { CardItem } from './card-item';

interface IProps {
  tag: IAreaTagDto;
  filter?: IFilterDto;
  orderBy?: IOrderByDto;
  title: string;
}

export function CardSection({ tag, filter, orderBy, title }: IProps) {
  const { searchResult, error } = useSearchResultApi({ desiredQuantity: 1 });
  const { width: windowWidth } = useWindowDimensions();
  const width = windowWidth - MarginSizeConfig.big * 2;

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
            {title}
          </Text>
          <Text>total tags</Text>
        </View>
        <Text>Ver mais botao</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        bounces={false}
        horizontal
        data={searchResult.results}
        renderItem={({ item, index }) => (
          <CardItem
            style={getListMargin(index, searchResult.results.length)}
            data={item}
          />
        )}
        keyExtractor={(item) => item.id}
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
