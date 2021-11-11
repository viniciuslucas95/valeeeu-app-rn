import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { hideAsync } from 'expo-splash-screen';

import { FakeTextInputButton } from '../../components';
import { SearchIcon } from '../../../assets/svgs';

import { AreaTagList } from './area-tag-list';
import {
  ColorConfig,
  IconSizeConfig,
  MarginSizeConfig,
} from '../../../configs';

const areaTags = [
  'Tecnologia',
  'Beleza e Moda',
  'Veículos',
  'Obras e Reformas',
  'Saúde',
  'Outros',
];

export function HomeScreen() {
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);

  useEffect(() => {
    async function disableSplashScreenAsync() {
      await hideAsync();
    }

    disableSplashScreenAsync();
  }, []);

  return (
    <SafeAreaView style={[styles.container]}>
      <FakeTextInputButton
        style={{ marginTop: MarginSizeConfig.huge }}
        onPress={() => console.log('Search button pressed...')}
        leftIcon={
          <SearchIcon
            height={IconSizeConfig.medium}
            color={ColorConfig.gray4}
          />
        }
        placeholder='Procurar serviço...'
      />
      <AreaTagList
        areaTags={areaTags}
        style={{ marginTop: MarginSizeConfig.huge }}
        activeAreaIndex={activeAreaIndex}
        setActiveAreaIndex={setActiveAreaIndex}
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
