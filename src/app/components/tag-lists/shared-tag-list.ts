import React from 'react';
import styled from 'styled-components/native';
import { SizeConfig } from '../../../configs';
import { ViewElementStyle } from '../../data-types/types';
import { pressabledAreaAdjust } from '../tag-toggles';

export interface ITagList {
  data: string[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export function getMargins(index: number, dataLength: number) {
  const margin = SizeConfig.bigMargin - pressabledAreaAdjust;
  const style: ViewElementStyle =
    index === 0
      ? {
          marginLeft: margin,
        }
      : index === dataLength - 1
      ? { marginRight: margin }
      : null;
  return style;
}

export const FlatListWrapper = styled.View``;

export const FlatList = styled.FlatList``;
