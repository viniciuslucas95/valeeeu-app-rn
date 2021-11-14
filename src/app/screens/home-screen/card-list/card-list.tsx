import React, { useState } from 'react';
import { View, StyleSheet, useWindowDimensions, FlatList } from 'react-native';

import {
  BorderSizeConfig,
  ColorConfig,
  MarginSizeConfig,
  PictureSizeConfig,
  TextSizeConfig,
} from '../../../../configs';
import { ActivityIndicator, TagQuantity, Text } from '../../../components';
import { FontFamily } from '../../../constants';
import {
  IFilterDto,
  IOrderByDto,
  ISmallProfileDto,
  ITagDto,
} from '../../../dtos';
import { rem } from '../../../helpers';

import { CardItem } from './card-item';

interface IProps {
  tag?: ITagDto;
  filter?: IFilterDto;
  orderBy?: IOrderByDto;
  openProfile(profile: ISmallProfileDto): void;
}

export function CardList({ tag, filter, orderBy, openProfile }: IProps) {
  const { width: windowWidth } = useWindowDimensions();
  const elementMaxWidth = windowWidth - MarginSizeConfig.big * 2;
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
            width: elementMaxWidth,
          },
        ]}
      >
        {tag ? (
          <>
            <View style={styles.titleAndTagContainer}>
              <Text
                fontFamily={FontFamily.robotoMedium}
                fontSize={TextSizeConfig.big}
              >
                {tag.tag}
              </Text>
              <TagQuantity
                style={styles.tagContainer}
                quantity={tag.quantity}
              />
            </View>
            <Text
              style={{
                marginLeft:
                  MarginSizeConfig.big + rem(MarginSizeConfig.big) * 2,
              }}
              fontColor={ColorConfig.blue2}
              fontFamily={FontFamily.robotoLight}
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
    marginBottom: MarginSizeConfig.medium,
  },
  titleAndTagContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagContainer: {
    top: rem(MarginSizeConfig.tiny * 0.25),
    marginLeft: rem(MarginSizeConfig.small),
  },
});
