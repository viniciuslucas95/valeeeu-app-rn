import React from 'react';
import { getMargins, ITagList, TagList } from './tag-list';
import {
  VehiclesTagToggle,
  BeautyAndFashionTagToggle,
  HealthTagToggle,
  TechnologyTagToggle,
  WorkAndReformsTagToggle,
} from '../../components/tag-toggles';

export function IconTagList({ setActiveIndex, activeIndex, data }: ITagList) {
  function getAreaTag(tag: string, index: number) {
    switch (tag) {
      case 'Tecnologia':
        return (
          <TechnologyTagToggle
            style={getMargins(index, data.length)}
            key={index}
            isToggled={activeIndex === index}
            onPress={() => setActiveIndex(index)}
          />
        );
      case 'Beleza e Moda':
        return (
          <BeautyAndFashionTagToggle
            style={getMargins(index, data.length)}
            key={index}
            isToggled={activeIndex === index}
            onPress={() => setActiveIndex(index)}
          />
        );
      case 'Saúde':
        return (
          <HealthTagToggle
            style={getMargins(index, data.length)}
            key={index}
            isToggled={activeIndex === index}
            onPress={() => setActiveIndex(index)}
          />
        );
      case 'Veículos':
        return (
          <VehiclesTagToggle
            style={getMargins(index, data.length)}
            key={index}
            isToggled={activeIndex === index}
            onPress={() => setActiveIndex(index)}
          />
        );
      case 'Obras e Reformas':
        return (
          <WorkAndReformsTagToggle
            style={getMargins(index, data.length)}
            key={index}
            isToggled={activeIndex === index}
            onPress={() => setActiveIndex(index)}
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
    <TagList data={data}>
      {({ item, index }) => getAreaTag(item as string, index)}
    </TagList>
  );
}
