import React, { useState } from 'react';
import { View, StyleSheet, useWindowDimensions, FlatList } from 'react-native';

import {
  BorderSizeConfig,
  ColorConfig,
  MarginSizeConfig,
  PictureSizeConfig,
  TextSizeConfig,
} from '../../../../configs';
import { ActivityIndicator, Text } from '../../../components';
import { FontFamily } from '../../../constants';
import {
  IFilterDto,
  IOrderByDto,
  ISmallProfileDto,
  ITagDto,
} from '../../../dtos';

import { CardItem } from './card-item';

interface IProps {
  tag?: ITagDto;
  filter?: IFilterDto;
  orderBy?: IOrderByDto;
  openProfile(profile: ISmallProfileDto): void;
}

export function CardList({ tag, filter, orderBy, openProfile }: IProps) {
  const { width: windowWidth } = useWindowDimensions();
  const resultsPerFetch = Math.ceil(windowWidth / PictureSizeConfig.size);
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
            width: windowWidth,
          },
        ]}
      >
        {tag ? (
          <>
            <Text
              fontFamily={FontFamily.robotoMedium}
              fontSize={TextSizeConfig.big}
            >
              {tag.tag}
            </Text>
            <Text
              fontColor={ColorConfig.blue2}
              fontFamily={FontFamily.robotoLight}
              style={{ paddingRight: MarginSizeConfig.big }}
            >
              Ver mais
            </Text>
          </>
        ) : (
          <>
            <View
              style={{
                width: PictureSizeConfig.size,
                height: TextSizeConfig.big,
                backgroundColor: ColorConfig.gray2,
                borderRadius: BorderSizeConfig.smallRadius / 2,
              }}
            />
            <View
              style={{
                width: PictureSizeConfig.size * 0.5,
                height: TextSizeConfig.medium,
                backgroundColor: ColorConfig.gray2,
                borderRadius: BorderSizeConfig.smallRadius / 2,
              }}
            />
          </>
        )}
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        bounces={false}
        horizontal
        data={data}
        contentContainerStyle={{
          paddingHorizontal: MarginSizeConfig.big,
        }}
        ItemSeparatorComponent={() => (
          <View style={{ marginHorizontal: MarginSizeConfig.tiny * 1.5 }} />
        )}
        renderItem={({ index }) => (
          <CardItem
            openProfile={openProfile}
            index={index}
            filter={filter}
            orderBy={orderBy}
            tag={tag?.tag}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
        onEndReached={() => setData([...data, ...getMoreData()])}
        onEndReachedThreshold={0.5}
        ListFooterComponent={<ActivityIndicator horizontal />}
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
    paddingRight: MarginSizeConfig.big,
    marginBottom: MarginSizeConfig.big,
  },
});
