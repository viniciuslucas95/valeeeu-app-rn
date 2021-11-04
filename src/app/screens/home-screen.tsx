import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { LogoSvg } from '../../assets/svgs';
import { SearchIcon } from '../../assets/svgs/icons';
import { ColorConfig, SizeConfig } from '../../configs';
import { CardSection, ICard } from '../components';
import { FakeTextInputButton } from '../components/buttons';
import { IconTagList, TextTagList } from '../components/tag-lists';
import { FilterTagList } from '../components/tag-lists/filter-tag-list';
import { UnitHandler } from '../helpers';

const areaTags = [
  'Tecnologia',
  'Beleza e Moda',
  'Obras e Reformas',
  'Veículos',
  'Saúde',
];

const jobTags = [
  'Barbeiros',
  'Costureiras',
  'Manicures',
  'Estilistas',
  'Esteticista',
  'Esteticista',
  'Maquiador',
];

const categoryTags = ['Pintura de Unhas', 'Corte de Cabelo'];

const categoryCards: ICard[] = [
  {
    id: '123',
    picture: 'test',
    lowestPrice: 5,
    name: 'Ana Manicure',
    description:
      'Especializada no cuidado de mãos, retiramos cutículas e temos os melhores esmaltes da região, desde esmalte francês até esmalte da casa do caralho.',
    distance: 1200,
    rating: 4.7,
    totalVotes: 87,
  },
  {
    id: '1234',
    picture: 'test',
    lowestPrice: 5,
    name: 'Ana Manicure',
    description:
      'Especializada no cuidado de mãos, retiramos cutículas e temos os melhores esmaltes da região, desde esmalte francês até esmalte da casa do caralho.',
    distance: 500,
    rating: 4.7,
    totalVotes: 87,
  },
  {
    id: '1235',
    picture: 'test',
    lowestPrice: 5,
    name: 'Ana Manicure',
    description:
      'Especializada no cuidado de mãos, retiramos cutículas e temos os melhores esmaltes da região, desde esmalte francês até esmalte da casa do caralho.',
    distance: 500,
    rating: 4.7,
    totalVotes: 87,
  },
];

export function HomeScreen() {
  const [currentAreaTag, setCurrentAreaTag] = useState(0);
  const [currentJobTag, setCurrentJobTag] = useState(0);
  const [distanceFilter, setDistanceFilter] = useState(5400);
  const [onlineOnlyFilter, setOnlineOnlyFilter] = useState(false);
  const [ratingFilter, setRatingFilter] = useState(4.5);
  return (
    <SafeContainer>
      <ScrollView bounces={false}>
        <LogoSvg
          style={{
            alignSelf: 'center',
            marginTop: SizeConfig.hugeMargin * 2,
            marginBottom: SizeConfig.hugeMargin,
          }}
          width={UnitHandler.vw(66)}
        />
        <IconTagList
          activeIndex={currentAreaTag}
          data={areaTags}
          setActiveIndex={setCurrentAreaTag}
        />
        <FakeTextInputButton
          onPress={() => console.log('Search button pressed...')}
          icon={<SearchIcon color={ColorConfig.gray4} />}
        >
          Procurar serviço...
        </FakeTextInputButton>
        <TextTagList
          activeIndex={currentJobTag}
          data={jobTags}
          setActiveIndex={setCurrentJobTag}
        />
        <FilterTagList
          style={{ marginTop: SizeConfig.bigMargin }}
          onlineOnly={onlineOnlyFilter}
          onOnlineOnlyFilterPress={() => setOnlineOnlyFilter(!onlineOnlyFilter)}
          distance={distanceFilter}
          onDistanceFilterPress={() =>
            console.log('Distance filter pressed...')
          }
          rating={ratingFilter}
          onRatingFilterPress={() => console.log('Rating filter pressed...')}
        />
        <CardSection
          style={{
            marginTop: SizeConfig.bigMargin,
            marginBottom: SizeConfig.bigMargin,
          }}
          cards={categoryCards}
          title={categoryTags[0]}
        />
      </ScrollView>
    </SafeContainer>
  );
}

const SafeContainer = styled.SafeAreaView`
  margin-top: ${(StatusBar.currentHeight ?? 0) + 'px'};
  flex: 1;
  background-color: ${ColorConfig.white1};
`;

const ScrollView = styled.ScrollView``;
