import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, useWindowDimensions, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { hideAsync } from 'expo-splash-screen';
import { getPermissionsAsync, isAvailableAsync } from 'expo-ads-admob';

import {
  ColorConfig,
  ElementSizeConfig,
  MarginSizeConfig,
  PictureSizeConfig,
} from '../../../configs';
import { AreaTag } from '../../constants';
import { ISmallProfileDto, IFilterDto, ITagDto, IAreaTagDto } from '../../dtos';
import { useTagApi } from '../../hooks';
import { ActivityIndicator } from '../../components';

import { AreaTagList } from './area-tag-list';
import { CardList } from './card-list';
import { FilterTagList } from './filter-tag-list';

export interface IData {
  tag?: ITagDto;
  filter?: IFilterDto;
}

export function HomeScreen() {
  const areaTags: AreaTag[] = [
    'Tecnologia',
    'Beleza e Moda',
    'Veículos',
    'Obras e Reformas',
    'Saúde',
    'Outros',
  ];
  const { height: screenHeight } = useWindowDimensions();
  const resultsPerFetch = Math.ceil(screenHeight / PictureSizeConfig.size / 2);
  const [isAdAvaiable, setIsAdAvaiable] = useState(false);
  const [filter, setFilter] = useState<IFilterDto>({
    areaTag: {
      areaTag: areaTags[0],
    },
  });
  const { results: tagFilterChildren } = useTagApi(filter.areaTag);
  const [data, setData] = useState<IData[]>(getData(true, true));

  useEffect(() => {
    if (tagFilterChildren.length === 0) return;
    setData(getData(true));
  }, [tagFilterChildren]);

  useEffect(() => {
    setData(getData(true, true));
  }, [filter]);

  useEffect(() => {
    async function initialSetupAsync() {
      await getPermissionsAsync();
      const result = await isAvailableAsync();
      setIsAdAvaiable(result);
      await hideAsync();
    }

    initialSetupAsync();
  }, []);

  function getData(resetData?: boolean, forceWireframe?: boolean) {
    const moreData: IData[] = resetData ? [{}, {}] : [...data];
    for (let i = 0; i < resultsPerFetch; i++) {
      if (forceWireframe) {
        moreData.push({});
        continue;
      }
      const nextDataIndex = resetData ? i : data.length + i;
      const newData: IData = tagFilterChildren[nextDataIndex]
        ? {
            filter,
            tag: tagFilterChildren[nextDataIndex],
          }
        : {};
      moreData.push(newData);
    }
    return moreData;
  }

  const setTag = useCallback(
    (areaTag: IAreaTagDto) => {
      setFilter({
        ...filter,
        areaTag,
      });
    },
    [filter]
  );

  const openProfile = useCallback((profile: ISmallProfileDto) => {
    console.log(`Open profile ${profile.id} button pressed...`);
  }, []);

  const keyExtractor = useCallback(
    (item, index) =>
      item.tag ? `${item.tag.id}-${item.tag.tag}` : index.toString(),
    []
  );

  const onEndReached = useCallback(() => setData(getData()), [getData]);

  const itemSeparatorComponent = useCallback(
    () => <View style={styles.separator} />,
    []
  );

  const renderItem = useCallback(
    ({ item, index }) => {
      if (index === 0) {
        return (
          <AreaTagList
            activeAreaIndex={areaTags.indexOf(filter.areaTag.areaTag)}
            setTag={setTag}
            areaTags={areaTags}
          />
        );
      }
      if (index === 1) {
        return <FilterTagList filter={filter} style={styles.filterTagList} />;
      }
      return (
        <CardList
          openProfile={openProfile}
          filter={item.filter}
          tag={item.tag}
          showAd={isAdAvaiable ? Number.isInteger((index + 1) / 3) : false}
        />
      );
    },
    [filter]
  );

  return (
    <SafeAreaView style={[styles.container]}>
      <FlatList
        maxToRenderPerBatch={resultsPerFetch}
        updateCellsBatchingPeriod={500}
        style={styles.flatList}
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparatorComponent}
        keyExtractor={keyExtractor}
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
  flatList: {
    paddingTop: MarginSizeConfig.huge,
  },
  separator: {
    marginVertical: MarginSizeConfig.huge / 2,
  },
  filterTagList: {
    marginTop: -MarginSizeConfig.small - ElementSizeConfig.minPressableArea / 4,
    marginBottom: -ElementSizeConfig.minPressableArea / 4,
  },
});
