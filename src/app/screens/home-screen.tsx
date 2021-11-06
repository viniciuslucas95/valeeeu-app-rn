import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StatusBar, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { LogoSvg } from '../../assets/svgs';
import { SearchIcon } from '../../assets/svgs/icons';
import { ColorConfig, SizeConfig } from '../../configs';
import { Ad, HomeCardSection } from '../components';
import { FakeTextInputButton } from '../components/buttons';
import {
  HomeAreaButtonList,
  HomeJobButtonList,
  HomeFilterButtonsAndTogglesList,
} from '../components/lists';
import { UnitHandler } from '../helpers';
import { Buffer } from 'buffer';
import { ICard } from '../components/lists/home-card-list';

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

export function HomeScreen() {
  const [currentAreaTag, setCurrentAreaTag] = useState(0);
  const [currentJobTag, setCurrentJobTag] = useState(0);
  const [distanceFilter, setDistanceFilter] = useState(5400);
  const [onlineOnlyFilter, setOnlineOnlyFilter] = useState(false);
  const [ratingFilter, setRatingFilter] = useState(4.5);
  const [categoryCards, setCategoryCards] = useState<ICard[]>([
    {
      id: '123',
      picture: 'dada',
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
      lowestPrice: 39.9,
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
  ]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          'https://st.depositphotos.com/1758925/2485/i/600/depositphotos_24857221-stock-photo-manicure-nail.jpg',
          { responseType: 'arraybuffer' }
        );
        const image = Buffer.from(data, 'binary').toString('base64');
        setCategoryCards(
          categoryCards.map((card) => {
            card.picture = image;
            return card;
          })
        );
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

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
        <HomeAreaButtonList
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
        <HomeJobButtonList
          activeIndex={currentJobTag}
          data={jobTags}
          setActiveIndex={setCurrentJobTag}
        />
        <HomeFilterButtonsAndTogglesList
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
        <HomeCardSection
          style={{
            marginTop: SizeConfig.bigMargin,
            marginBottom: SizeConfig.bigMargin,
          }}
          cards={categoryCards}
          title={categoryTags[0]}
        />
        <Ad style={{ marginBottom: SizeConfig.mediumMargin }} />
        <HomeCardSection
          style={{
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
