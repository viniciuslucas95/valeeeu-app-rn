import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, useWindowDimensions, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { hideAsync } from 'expo-splash-screen';

import {
  ColorConfig,
  MarginSizeConfig,
  PictureSizeConfig,
} from '../../../configs';
import { AreaTag } from '../../constants';
import { ISmallProfileDto, IAreaTagDto, IFilterDto } from '../../dtos';
import { useTagSearchApi } from '../../hooks';
import { ActivityIndicator } from '../../components';

import { AreaTagList } from './area-tag-list';
import { CardList } from './card-list';

const areaTags: AreaTag[] = [
  'Tecnologia',
  'Beleza e Moda',
  'Veículos',
  'Obras e Reformas',
  'Saúde',
  'Outros',
];

interface IData {
  tag?: string;
  filter?: IFilterDto;
}

export function HomeScreen() {
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);
  const { height: screenHeight } = useWindowDimensions();
  const resultsPerFetch = Math.ceil(screenHeight / PictureSizeConfig.size / 2);
  const [data, setData] = useState<IData[]>([{}, ...getMoreData(true)]);
  const areaTag: IAreaTagDto = useMemo(() => {
    return {
      areaTag: areaTags[activeAreaIndex],
    };
  }, [activeAreaIndex]);
  const { results } = useTagSearchApi(areaTag);

  useEffect(() => {
    if (results.length === 0) return;
    setData([{}, ...getMoreData()]);
  }, [results]);

  useEffect(() => {
    setData([{}, ...getMoreData(true)]);
  }, [activeAreaIndex]);

  useEffect(() => {
    async function disableSplashScreenAsync() {
      await hideAsync();
    }

    disableSplashScreenAsync();
  }, []);

  function getMoreData(forceWireframe?: boolean) {
    const newData: IData[] = [];
    for (let i = 0; i < resultsPerFetch; i++) {
      if (forceWireframe) {
        newData.push({});
        continue;
      }
      const data: IData = results[i]
        ? {
            filter: { areaTag },
            tag: results[i],
          }
        : {};
      newData.push(data);
    }
    return newData;
  }

  const openProfile = useCallback((profile: ISmallProfileDto) => {
    console.log(`Open profile ${profile.id} button pressed...`);
  }, []);

  const onEndReached = useCallback(() => {
    if (data.length < 2) return;
    setData([...data, ...getMoreData()]);
  }, [data]);

  return (
    <SafeAreaView style={[styles.container]}>
      <FlatList
        style={{ paddingTop: MarginSizeConfig.huge }}
        data={data}
        renderItem={({ item, index }) => {
          if (index === 0) {
            return (
              <AreaTagList
                activeAreaIndex={activeAreaIndex}
                setActiveAreaIndex={setActiveAreaIndex}
                areaTags={areaTags}
              />
            );
          }
          return (
            <CardList
              openProfile={openProfile}
              filter={item.filter}
              tag={item.tag}
            />
          );
        }}
        ItemSeparatorComponent={() => (
          <View style={{ marginVertical: MarginSizeConfig.huge / 2 }} />
        )}
        keyExtractor={(item, index) => item.tag ?? index.toString()}
        bounces={false}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={<ActivityIndicator />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: ColorConfig.white1,
  },
});
