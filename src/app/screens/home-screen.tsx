import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { LogoSvg } from '../../assets/svgs';
import { SearchIcon } from '../../assets/svgs/icons';
import { ColorConfig, SizeConfig } from '../../configs';
import { FakeTextInputButton } from '../components/buttons';
import { IconTagList, TextTagList } from '../components/tag-lists';
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

export function HomeScreen() {
  const [currentAreaTag, setCurrentAreaTag] = useState(0);
  const [currentJobTag, setCurrentJobTag] = useState(0);

  return (
    <SafeContainer>
      <ScrollView>
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
