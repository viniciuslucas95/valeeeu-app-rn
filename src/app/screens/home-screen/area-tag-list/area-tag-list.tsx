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
  const getIcon = useCallback((icon: AreaTag) => {
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
        renderItem={({ item, index }) => (
          <AreaTagItem
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
