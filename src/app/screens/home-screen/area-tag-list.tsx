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
import { ColorConfig, MarginSizeConfig } from '../../../configs';
import { ViewStyle } from '../../types';

import { AreaTagToggle } from './area-tag-toggle';

interface IProps {
  style?: ViewStyle;
  activeAreaIndex: number;
  setActiveAreaIndex: React.Dispatch<React.SetStateAction<number>>;
  areaTags: string[];
}

function getListMargin(index: number, listLength: number): ViewStyle {
  return index === 0
    ? {
        marginLeft: MarginSizeConfig.big,
        marginRight: MarginSizeConfig.small,
      }
    : index === listLength - 1
    ? {
        marginLeft: MarginSizeConfig.small,
        marginRight: MarginSizeConfig.big,
      }
    : {
        marginHorizontal: MarginSizeConfig.small,
      };
}

function getIcon(icon: string) {
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
  console.warn('Area tag not found');
  return <MoreIcon color={ColorConfig.white1} />;
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
        renderItem={({ item, index }) => (
          <AreaTagToggle
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
