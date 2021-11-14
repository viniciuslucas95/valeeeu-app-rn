import React, { memo, useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import {
  CarIcon,
  GlassesAndMustacheIcon,
  HeartIcon,
  LaptopIcon,
  MoreIcon,
  ToolsIcon,
} from '../../../../assets/svgs';
import { ColorConfig, MarginSizeConfig } from '../../../../configs';
import { ViewStyle } from '../../../types';
import { AreaTag } from '../../../constants';

import { AreaTagItem } from './area-tag-item';

interface IIconData {
  icon: JSX.Element;
  firstLine: string;
  secondLine?: string;
}

interface IProps {
  style?: ViewStyle;
  activeAreaIndex: number;
  setActiveAreaIndex: React.Dispatch<React.SetStateAction<number>>;
  areaTags: AreaTag[];
}

const AreaTagListComponent = ({
  style,
  activeAreaIndex,
  setActiveAreaIndex,
  areaTags,
}: IProps) => {
  const getIconData = useCallback((tag: AreaTag): IIconData => {
    switch (tag) {
      case 'Tecnologia':
        return {
          icon: <LaptopIcon color={ColorConfig.white1} />,
          firstLine: tag,
        };

      case 'Beleza e Moda':
        return {
          icon: <GlassesAndMustacheIcon color={ColorConfig.white1} />,
          firstLine: 'Moda e',
          secondLine: 'Beleza',
        };

      case 'Veículos':
        return { icon: <CarIcon color={ColorConfig.white1} />, firstLine: tag };

      case 'Saúde':
        return {
          icon: <HeartIcon color={ColorConfig.white1} />,
          firstLine: tag,
        };

      case 'Obras e Reformas':
        return {
          icon: <ToolsIcon color={ColorConfig.white1} />,
          firstLine: 'Obras e',
          secondLine: 'Reformas',
        };

      case 'Outros':
        return {
          icon: <MoreIcon color={ColorConfig.white1} />,
          firstLine: tag,
        };
    }
  }, []);

  return (
    <View style={[style, styles.container]}>
      <FlatList
        horizontal
        data={areaTags}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: MarginSizeConfig.big,
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListFooterComponent={<View style={styles.separator} />}
        bounces={false}
        renderItem={({ item, index }) => {
          const { icon, firstLine, secondLine } = getIconData(item);
          return (
            <AreaTagItem
              onPress={() => setActiveAreaIndex(index)}
              icon={icon}
              firstLine={firstLine}
              secondLine={secondLine}
              isToggled={index === activeAreaIndex ? true : false}
            />
          );
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export const AreaTagList = memo(AreaTagListComponent);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  separator: {
    marginHorizontal: MarginSizeConfig.tiny,
  },
});
