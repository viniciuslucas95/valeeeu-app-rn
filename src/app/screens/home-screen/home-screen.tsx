import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { hideAsync } from 'expo-splash-screen';

import { ColorConfig, MarginSizeConfig } from '../../../configs';
import { AreaTag } from '../../constants';
import { ISmallProfileDto } from '../../dtos';

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

export function HomeScreen() {
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    async function disableSplashScreenAsync() {
      await hideAsync();
    }

    disableSplashScreenAsync();
  }, []);

  const openProfile = useCallback((profile: ISmallProfileDto) => {
    console.log(`Open profile ${profile.id} button pressed...`);
  }, []);

  const components = [
    <AreaTagList
      style={{ marginTop: MarginSizeConfig.huge }}
      activeAreaIndex={activeAreaIndex}
      setActiveAreaIndex={setActiveAreaIndex}
      areaTags={areaTags}
    />,
    <CardList
      openProfile={openProfile}
      tag={{ area: areaTags[activeAreaIndex] }}
    />,
  ];

  return (
    <SafeAreaView style={[styles.container]}>
      <FlatList
        ref={flatListRef}
        data={components}
        renderItem={({ item }) => item}
        keyExtractor={(_, index) => index.toString()}
        bounces={false}
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
