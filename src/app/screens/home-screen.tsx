import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { LogoSvg } from '../../assets/svgs';
import { SearchIcon } from '../../assets/svgs/icons';
import { ColorConstant, SizeConstant } from '../../configs';
import { TextInput } from '../components';
import { FakeTextInputButton } from '../components/buttons';
import {
  VehiclesTagToggle,
  BeautyAndFashionTagToggle,
  HealthTagToggle,
  pressabledAreaAdjust,
  TechnologyTagToggle,
  WorkAndReformsTagToggle,
} from '../components/tag-toggles';
import { ViewElementStyle } from '../data-types/types';
import { UnitHandler } from '../helpers';

type AreaTag =
  | 'technology'
  | 'beauty-and-fashion'
  | 'work-and-reforms'
  | 'health'
  | 'vehicles';

const areaTags: AreaTag[] = [
  'technology',
  'beauty-and-fashion',
  'work-and-reforms',
  'vehicles',
  'health',
];

export function HomeScreen() {
  const [currentAreaTag, setCurrentAreaTag] = useState(0);

  function getAreaTag(tag: AreaTag, index: number) {
    const margin = SizeConstant.bigMargin - pressabledAreaAdjust;
    const style: ViewElementStyle =
      index === 0
        ? {
            marginLeft: margin,
          }
        : index === areaTags.length - 1
        ? { marginRight: margin }
        : null;

    switch (tag) {
      case 'technology':
        return (
          <TechnologyTagToggle
            style={style}
            key={index}
            isToggled={currentAreaTag === index}
            onPress={() => setCurrentAreaTag(index)}
          />
        );
      case 'beauty-and-fashion':
        return (
          <BeautyAndFashionTagToggle
            style={style}
            key={index}
            isToggled={currentAreaTag === index}
            onPress={() => setCurrentAreaTag(index)}
          />
        );
      case 'health':
        return (
          <HealthTagToggle
            style={style}
            key={index}
            isToggled={currentAreaTag === index}
            onPress={() => setCurrentAreaTag(index)}
          />
        );
      case 'vehicles':
        return (
          <VehiclesTagToggle
            style={style}
            key={index}
            isToggled={currentAreaTag === index}
            onPress={() => setCurrentAreaTag(index)}
          />
        );
      case 'work-and-reforms':
        return (
          <WorkAndReformsTagToggle
            style={style}
            key={index}
            isToggled={currentAreaTag === index}
            onPress={() => setCurrentAreaTag(index)}
          />
        );
    }
  }

  return (
    <SafeContainer>
      <ScrollView>
        <LogoSvg
          style={{
            alignSelf: 'center',
            marginTop: SizeConstant.hugeMargin * 2,
            marginBottom: SizeConstant.hugeMargin,
          }}
          width={UnitHandler.vw(66)}
        />
        <FlatListWrapper
          style={{
            marginBottom: SizeConstant.mediumMargin,
          }}
        >
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={areaTags}
            horizontal
            renderItem={({ item, index }) => getAreaTag(item as AreaTag, index)}
            keyExtractor={(_, index) => index.toString()}
          />
        </FlatListWrapper>
        <FakeTextInputButton
          onPress={() => console.log('Search button pressed...')}
          icon={<SearchIcon color={ColorConstant.gray4} />}
        >
          Procurar serviço...
        </FakeTextInputButton>
      </ScrollView>
    </SafeContainer>
  );
}

const SafeContainer = styled.SafeAreaView`
  margin-top: ${(StatusBar.currentHeight ?? 0) + 'px'};
  flex: 1;
  background-color: ${ColorConstant.white1};
`;

const FlatListWrapper = styled.View``;

const FlatList = styled.FlatList``;

const ScrollView = styled.ScrollView``;
