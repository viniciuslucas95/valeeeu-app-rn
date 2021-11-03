import React, { useRef } from 'react';
import { ColorConstant } from '../../../configs';
import { JustTextButton } from '../buttons';
import {
  FlatList,
  FlatListWrapper,
  getMargins,
  ITagList,
} from './shared-tag-list';
import { FlatList as FlatListNative } from 'react-native';

export function TextTagList({ setActiveIndex, activeIndex, data }: ITagList) {
  const flatList = useRef<FlatListNative>(null);

  function scrollToTag(index: number) {
    setActiveIndex(index);
    flatList.current?.scrollToIndex({ index, viewPosition: 0.5 });
  }

  return (
    <FlatListWrapper>
      <FlatList
        ref={flatList}
        showsHorizontalScrollIndicator={false}
        data={data}
        horizontal
        renderItem={({ item, index }) => {
          return (
            <JustTextButton
              style={getMargins(index, data.length)}
              color={
                activeIndex === index
                  ? ColorConstant.blue2
                  : ColorConstant.gray5
              }
              onPress={() => scrollToTag(index)}
            >
              {item as string}
            </JustTextButton>
          );
        }}
        keyExtractor={(_, index) => index.toString()}
      />
    </FlatListWrapper>
  );
}
