import React, { useState } from 'react';
import { View, StyleSheet, useWindowDimensions, FlatList } from 'react-native';

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
  ISmallProfileDto,
} from '../../dtos';

import { CardItem } from './card-item';

interface IProps {
  tag: IAreaTagDto;
  filter?: IFilterDto;
  orderBy?: IOrderByDto;
  openProfile(profile: ISmallProfileDto): void;
}

export function CardList({ tag, filter, orderBy, openProfile }: IProps) {
  const { width: windowWidth } = useWindowDimensions();
  const width = windowWidth - MarginSizeConfig.big * 2;
  const resultsPerFetch = Math.ceil(width / PictureSizeConfig.size);
  const [data, setData] = useState<undefined[]>([...getMoreData()]);

  function getMoreData() {
    const newData = [];
    for (let i = 0; i < resultsPerFetch; i++) {
      newData.push(undefined);
    }
    return newData;
  }

  return (
    <View>
      <View
        style={[
          styles.sectionHeaderContainer,
          {
            width: width,
          },
        ]}
      >
        <Text
          fontFamily={FontFamily.robotoMedium}
          fontSize={TextSizeConfig.big}
        >
          {'test'}
        </Text>
        <Text>Ver mais botao</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        bounces={false}
        horizontal
        data={data}
        renderItem={({ index }) => (
          <CardItem openProfile={openProfile} index={index} />
        )}
        keyExtractor={(_, index) => index.toString()}
        onEndReached={() => setData([...data, ...getMoreData()])}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: MarginSizeConfig.big,
  },
});
