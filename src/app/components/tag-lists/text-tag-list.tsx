import React, { useRef } from 'react';
import { ColorConfig, SizeConfig } from '../../../configs';
import { JustTextButton } from '../buttons';
import {
  FlatList,
  FlatListWrapper,
  getMargins,
  ITagList,
} from './shared-tag-list';
import { FlatList as FlatListNative } from 'react-native';
import { Line } from '../../styled-components';
import styled from 'styled-components/native';
import { FontFamily } from '../../data-types/enums';
import { UnitHandler } from '../../helpers';

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
          const isActive = activeIndex === index;
          return (
            <ButtonContainer>
              <JustTextButton
                textAlign='center'
                extraTouchableArea={isActive ? -0.5 : 0}
                fontFamily={isActive ? FontFamily.regular : FontFamily.light}
                style={[getMargins(index, data.length)]}
                color={isActive ? ColorConfig.blue2 : ColorConfig.gray5}
                onPress={() => scrollToTag(index)}
              >
                {item as string}
              </JustTextButton>
              {isActive ? (
                <Line
                  flex={0}
                  color={ColorConfig.blue1}
                  style={{
                    ...getMargins(index, data.length),
                    height: 2,
                    marginTop: SizeConfig.smallMargin - 0.5,
                  }}
                />
              ) : null}
            </ButtonContainer>
          );
        }}
        keyExtractor={(_, index) => index.toString()}
      />
      <Line flex={1} style={{ bottom: 1 }} />
    </FlatListWrapper>
  );
}

const ButtonContainer = styled.View``;
