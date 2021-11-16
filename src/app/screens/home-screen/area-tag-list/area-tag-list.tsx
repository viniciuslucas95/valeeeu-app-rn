import React, { memo, useCallback } from 'react';
import { FlatList, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import {
  CarIcon,
  GlassesAndMustacheIcon,
  HeartIcon,
  LaptopIcon,
  MoreIcon,
  ToolsIcon,
} from '../../../../assets';
import { ColorConfig, MarginSizeConfig } from '../../../../configs';
import { AreaTag } from '../../../constants';
import { IAreaTagDto } from '../../../dtos';

import { AreaTagItem } from './area-tag-item';

interface IIconData {
  icon: JSX.Element;
  firstLine: string;
  secondLine?: string;
}

interface IProps {
  style?: StyleProp<ViewStyle>;
  activeAreaIndex: number;
  setTag: (areaTag: IAreaTagDto) => void;
  areaTags: AreaTag[];
}

const AreaTagListComponent = ({
  style,
  activeAreaIndex,
  setTag,
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

  const itemSeparatorComponent = useCallback(
    () => <View style={styles.separator} />,
    []
  );

  const renderItem = useCallback(
    ({ item, index }) => {
      const { icon, firstLine, secondLine } = getIconData(item);
      return (
        <AreaTagItem
          onPress={() => setTag({ areaTag: item })}
          icon={icon}
          firstLine={firstLine}
          secondLine={secondLine}
          isToggled={index === activeAreaIndex ? true : false}
        />
      );
    },
    [setTag]
  );

  const keyExtractor = useCallback((item) => item, []);

  return (
    <View style={[style, styles.container]}>
      <FlatList
        horizontal
        data={areaTags}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        ItemSeparatorComponent={itemSeparatorComponent}
        bounces={false}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export const AreaTagList = memo(AreaTagListComponent);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  flatList: {
    paddingLeft: MarginSizeConfig.big,
    paddingRight: MarginSizeConfig.tiny,
  },
  separator: {
    marginHorizontal: MarginSizeConfig.tiny,
  },
});
