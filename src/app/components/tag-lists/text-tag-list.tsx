import React from 'react';
import { ColorConstant, SizeConstant } from '../../../configs';
import { ViewElementStyle } from '../../data-types/types';
import { JustTextButton } from '../buttons';
import { pressabledAreaAdjust } from '../tag-toggles';
import { ITagList, TagList } from './tag-list';

export function TextTagList({ setActiveIndex, activeIndex, data }: ITagList) {
  return (
    <TagList data={data}>
      {({ item, index }) => {
        const margin = SizeConstant.bigMargin - pressabledAreaAdjust;
        const style: ViewElementStyle =
          index === 0
            ? {
                marginLeft: margin,
              }
            : index === data.length - 1
            ? { marginRight: margin }
            : null;

        return (
          <JustTextButton
            style={style}
            color={
              activeIndex === index ? ColorConstant.blue2 : ColorConstant.gray5
            }
            onPress={() => setActiveIndex(index)}
          >
            {item as string}
          </JustTextButton>
        );
      }}
    </TagList>
  );
}
