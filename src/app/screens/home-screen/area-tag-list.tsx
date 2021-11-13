import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import {
  CarIcon,
  GlassesAndMustacheIcon,
  HeartIcon,
  LaptopIcon,
  MoreIcon,
  ToolsIcon,
} from '../../../assets/svgs';
import { ColorConfig } from '../../../configs';
import { ViewStyle } from '../../types';
import { getListMargin } from './helpers';
import { AreaTag } from '../../constants';

import { AreaTagItem } from './area-tag-item';

function getIcon(icon: AreaTag) {
  switch (icon) {
    case 'Tecnologia':
      return <LaptopIcon color={ColorConfig.white1} />;

    case 'Beleza e Moda':
      return <GlassesAndMustacheIcon color={ColorConfig.white1} />;

    case 'Veículos':
      return <CarIcon color={ColorConfig.white1} />;

    case 'Saúde':
      return <HeartIcon color={ColorConfig.white1} />;

    case 'Obras e Reformas':
      return <ToolsIcon color={ColorConfig.white1} />;

    case 'Outros':
      return <MoreIcon color={ColorConfig.white1} />;
  }
}

interface IProps {
  style?: ViewStyle;
  activeAreaIndex: number;
  setActiveAreaIndex: React.Dispatch<React.SetStateAction<number>>;
  areaTags: AreaTag[];
}

export function AreaTagList({
  style,
  activeAreaIndex,
  setActiveAreaIndex,
  areaTags,
}: IProps) {
  return (
    <View style={[style, styles.container]}>
      <FlatList
        horizontal
        data={areaTags}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        renderItem={({ item, index }) => (
          <AreaTagItem
            style={getListMargin(index, areaTags.length)}
            onPress={() => setActiveAreaIndex(index)}
            icon={getIcon(item)}
            label={item}
            isToggled={index === activeAreaIndex ? true : false}
          />
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
