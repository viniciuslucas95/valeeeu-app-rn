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
import { ISmallProfileDto, IAreaTagDto, IFilterDto, ITagDto } from '../../dtos';
import { useTagApi } from '../../hooks';
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
  tag?: ITagDto;
  filter?: IFilterDto;
}

export function HomeScreen() {
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);
  const { height: screenHeight } = useWindowDimensions();
  const resultsPerFetch = Math.ceil(screenHeight / PictureSizeConfig.size / 2);
  const [data, setData] = useState<IData[]>([{}, ...getMoreData(true, true)]);
  const areaTag: IAreaTagDto = useMemo(() => {
    return {
      areaTag: areaTags[activeAreaIndex],
    };
  }, [activeAreaIndex]);
  const { results } = useTagApi(areaTag);

  useEffect(() => {
    if (results.length === 0) return;
    setData([{}, ...getMoreData(true)]);
  }, [results]);

  useEffect(() => {
    setData([{}, ...getMoreData(true, true)]);
  }, [activeAreaIndex]);

  useEffect(() => {
    async function disableSplashScreenAsync() {
      await hideAsync();
    }

    disableSplashScreenAsync();
  }, []);

  function getMoreData(resetData?: boolean, forceWireframe?: boolean) {
    const moreData: IData[] = [];
    for (let i = 0; i < resultsPerFetch; i++) {
      if (forceWireframe) {
        moreData.push({});
        continue;
      }
      const nextDataIndex = resetData ? i : data.length + i;
      const newData: IData = results[nextDataIndex]
        ? {
            filter: { areaTag },
            tag: results[nextDataIndex],
          }
        : {};
      moreData.push(newData);
    }
    return moreData;
  }

  const openProfile = useCallback((profile: ISmallProfileDto) => {
    console.log(`Open profile ${profile.id} button pressed...`);
  }, []);

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
        keyExtractor={(item, index) =>
          item.tag ? `${item.tag.id}-${item.tag.tag}` : index.toString()
        }
        bounces={false}
        onEndReached={() => {
          if (data.length < 2) return;
          setData([...data, ...getMoreData()]);
        }}
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
