import React, { useRef } from 'react';
import { ITagList } from './tag-list';
import { FlatList, View } from 'react-native';
import {
  TechnologyTagToggle,
  BeautyAndFashionTagToggle,
  HealthTagToggle,
  VehiclesTagToggle,
  WorkAndReformsTagToggle,
} from '../toggles/home-area-toggles';
import { getMarginsForList } from './list';

export function HomeAreaButtonList({
  setActiveIndex,
  activeIndex,
  data,
}: ITagList) {
  const flatList = useRef<FlatList>(null);

  function scrollToTag(index: number) {
    setActiveIndex(index);
    flatList.current?.scrollToIndex({ index, viewPosition: 0.5 });
  }

  function getAreaTagIcon(tag: string, index: number) {
    switch (tag) {
      case 'Tecnologia':
        return (
          <TechnologyTagToggle
            style={getMarginsForList(index, data.length)}
            key={index}
            isToggled={activeIndex === index}
            onPress={() => scrollToTag(index)}
          />
        );
      case 'Beleza e Moda':
        return (
          <BeautyAndFashionTagToggle
            style={getMarginsForList(index, data.length)}
            key={index}
            isToggled={activeIndex === index}
            onPress={() => scrollToTag(index)}
          />
        );
      case 'Saúde':
        return (
          <HealthTagToggle
            style={getMarginsForList(index, data.length)}
            key={index}
            isToggled={activeIndex === index}
            onPress={() => scrollToTag(index)}
          />
        );
      case 'Veículos':
        return (
          <VehiclesTagToggle
            style={getMarginsForList(index, data.length)}
            key={index}
            isToggled={activeIndex === index}
            onPress={() => scrollToTag(index)}
          />
        );
      case 'Obras e Reformas':
        return (
          <WorkAndReformsTagToggle
            style={getMarginsForList(index, data.length)}
            key={index}
            isToggled={activeIndex === index}
            onPress={() => scrollToTag(index)}
          />
        );
    }

    return (
      <TechnologyTagToggle
        style={getMarginsForList(index, data.length)}
        key={index}
        isToggled={activeIndex === index}
        onPress={() => setActiveIndex(index)}
      />
    );
  }

  return (
    <View>
      <FlatList
        ref={flatList}
        showsHorizontalScrollIndicator={false}
        data={data}
        horizontal
        renderItem={({ item, index }) => getAreaTagIcon(item as string, index)}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
}
