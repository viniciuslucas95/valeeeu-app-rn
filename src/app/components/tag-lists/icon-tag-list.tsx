import React, { useRef } from 'react';
import {
  FlatList,
  FlatListWrapper,
  getMargins,
  ITagList,
} from './shared-tag-list';
import {
  VehiclesTagToggle,
  BeautyAndFashionTagToggle,
  HealthTagToggle,
  TechnologyTagToggle,
  WorkAndReformsTagToggle,
} from '../../components/tag-toggles';
import { FlatList as FlatListNative } from 'react-native';

export function IconTagList({ setActiveIndex, activeIndex, data }: ITagList) {
  const flatList = useRef<FlatListNative>(null);

  function scrollToTag(index: number) {
    setActiveIndex(index);
    flatList.current?.scrollToIndex({ index, viewPosition: 0.5 });
  }

  function getAreaTag(tag: string, index: number) {
    switch (tag) {
      case 'Tecnologia':
        return (
          <TechnologyTagToggle
            style={getMargins(index, data.length)}
            key={index}
            isToggled={activeIndex === index}
            onPress={() => scrollToTag(index)}
          />
        );
      case 'Beleza e Moda':
        return (
          <BeautyAndFashionTagToggle
            style={getMargins(index, data.length)}
            key={index}
            isToggled={activeIndex === index}
            onPress={() => scrollToTag(index)}
          />
        );
      case 'Saúde':
        return (
          <HealthTagToggle
            style={getMargins(index, data.length)}
            key={index}
            isToggled={activeIndex === index}
            onPress={() => scrollToTag(index)}
          />
        );
      case 'Veículos':
        return (
          <VehiclesTagToggle
            style={getMargins(index, data.length)}
            key={index}
            isToggled={activeIndex === index}
            onPress={() => scrollToTag(index)}
          />
        );
      case 'Obras e Reformas':
        return (
          <WorkAndReformsTagToggle
            style={getMargins(index, data.length)}
            key={index}
            isToggled={activeIndex === index}
            onPress={() => scrollToTag(index)}
          />
        );
    }

    return (
      <TechnologyTagToggle
        style={getMargins(index, data.length)}
        key={index}
        isToggled={activeIndex === index}
        onPress={() => setActiveIndex(index)}
      />
    );
  }

  return (
    <FlatListWrapper>
      <FlatList
        ref={flatList}
        showsHorizontalScrollIndicator={false}
        data={data}
        horizontal
        renderItem={({ item, index }) => getAreaTag(item as string, index)}
        keyExtractor={(_, index) => index.toString()}
      />
    </FlatListWrapper>
  );
}
