import React, { useState } from 'react';
import { View, StyleSheet, useWindowDimensions, FlatList } from 'react-native';

import {
  BorderSizeConfig,
  ColorConfig,
  MarginSizeConfig,
  PictureSizeConfig,
  ShadowSizeConfig,
  TextSizeConfig,
} from '../../../../configs';
import { ActivityIndicator, Ad, TagQuantity, Text } from '../../../components';
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
  showAd?: boolean;
}

export function CardList({
  tag,
  filter,
  orderBy,
  openProfile,
  showAd = false,
}: IProps) {
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
        <View style={styles.titleAndTagContainer}>
          <Text
            style={{
              backgroundColor: tag ? 'transparent' : ColorConfig.gray1,
              borderRadius: rem(BorderSizeConfig.bigRadius),
            }}
            fontFamily={FontFamily.robotoMedium}
            fontSize={TextSizeConfig.big}
            fontColor={tag ? ColorConfig.black1 : ColorConfig.gray1}
          >
            {tag ? tag.tag : 'Wireframe Text Shippuden'}
          </Text>
          <TagQuantity
            style={[styles.tagContainer]}
            textStyle={tag ? {} : { color: ColorConfig.gray2 }}
            quantity={tag ? tag.quantity : 123}
          />
        </View>
        <Text
          style={{
            marginLeft:
              MarginSizeConfig.big * 1.5 + rem(MarginSizeConfig.big) * 1.5,
          }}
          fontColor={tag ? ColorConfig.blue2 : ColorConfig.gray3}
          fontFamily={FontFamily.robotoLight}
        >
          Ver mais
        </Text>
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
      {showAd ? (
        tag ? (
          <Ad style={styles.ad} />
        ) : (
          <View style={styles.adWireframe} />
        )
      ) : null}
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
  ad: {
    marginTop: MarginSizeConfig.huge,
  },
  adWireframe: {
    marginTop: MarginSizeConfig.huge,
    width: 330,
    height: 110 + rem(TextSizeConfig.small * 1.75),
    alignSelf: 'center',
    borderRadius: BorderSizeConfig.smallRadius,
    backgroundColor: ColorConfig.gray1,
    elevation: ShadowSizeConfig.smallElevation,
  },
});
