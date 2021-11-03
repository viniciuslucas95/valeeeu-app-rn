import React, { PropsWithChildren } from 'react';
import { ListRenderItem } from 'react-native';
import styled from 'styled-components/native';
import { SizeConstant } from '../../../configs';
import { ViewElementStyle } from '../../data-types/types';
import { pressabledAreaAdjust } from '../tag-toggles';

export interface ITagList {
  data: string[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

interface IProps {
  data: string[];
  children: ListRenderItem<unknown>;
}

export function getMargins(index: number, dataLength: number) {
  const margin = SizeConstant.bigMargin - pressabledAreaAdjust;
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

export function TagList({ data, children }: PropsWithChildren<IProps>) {
  return (
    <FlatListWrapper>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        horizontal
        renderItem={children}
        keyExtractor={(_, index) => index.toString()}
      />
    </FlatListWrapper>
  );
}

const FlatListWrapper = styled.View``;

const FlatList = styled.FlatList``;
