import React, { useState } from 'react';
import { INavigate } from '../../INavigate';
import { ScreenContainer } from '../../../components/screenContainer';
import { SectionTitle } from '../../../components';
import { EmptyProfilePictureSvg } from '../../../../assets/svgs';
import { Button, TextButton } from '../../../components/buttons';
import {
  TextInputContainer,
  PictureContainer,
  ContentWrapper,
  ScrollView,
} from './styles';
import { UnitHandler } from '../../../helpers';
import { TextInput } from '../../../components/textInputs';
import { ViewElementStyle } from '../../../dataTypes/types';
import { ServiceStack } from '../../../dataTypes/enums/stacks';

const sectionTitleBottomMargin = UnitHandler.vh(2);
const sectionTitleStyle: ViewElementStyle = {
  marginBottom: sectionTitleBottomMargin,
  marginTop: UnitHandler.vh(3),
};

export function EditWorkerProfileScreen1({ navigation }: INavigate) {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [tag1, setTag1] = useState('');
  const [tag2, setTag2] = useState('');
  const [tag3, setTag3] = useState('');
  const [tag4, setTag4] = useState('');

  function addProfilePicture() {
    console.log('Add profile picture button pressed');
  }

  function goToPartTwo() {
    navigation.navigate(ServiceStack.editWorkerProfile2);
  }

  return (
    <ScreenContainer contentPosition='top'>
      <ContentWrapper>
        <ScrollView>
          <SectionTitle
            style={{ marginBottom: sectionTitleBottomMargin }}
            optionalText='(opcional)'
          >
            Foto de perfil
          </SectionTitle>
          <PictureContainer>
            <EmptyProfilePictureSvg
              style={{ marginBottom: UnitHandler.vh(1) }}
            />
            <TextButton onPress={addProfilePicture}>Adicionar</TextButton>
          </PictureContainer>
          <SectionTitle style={sectionTitleStyle}>Informações</SectionTitle>
          <TextInputContainer>
            <TextInput
              width={UnitHandler.vwPx(44)}
              text={name}
              setText={setName}
              placeholder='Nome'
            />
            <TextInput
              width={UnitHandler.vwPx(44)}
              text={service}
              setText={setService}
              placeholder='Serviço prestado'
            />
          </TextInputContainer>
          <SectionTitle style={sectionTitleStyle} optionalText='(mínimo 1)'>
            Palavras-chave
          </SectionTitle>
          <TextInputContainer style={{ marginBottom: UnitHandler.vh(1) }}>
            <TextInput
              width={UnitHandler.vwPx(44)}
              text={tag1}
              setText={setTag1}
              placeholder='Palavra-chave 1'
            />
            <TextInput
              width={UnitHandler.vwPx(44)}
              text={tag2}
              setText={setTag2}
              placeholder='Palavra-chave 2'
            />
          </TextInputContainer>
          <TextInputContainer style={{ marginBottom: UnitHandler.vh(3) }}>
            <TextInput
              width={UnitHandler.vwPx(44)}
              text={tag3}
              setText={setTag3}
              placeholder='Palavra-chave 3'
            />
            <TextInput
              width={UnitHandler.vwPx(44)}
              text={tag4}
              setText={setTag4}
              placeholder='Palavra-chave 4'
            />
          </TextInputContainer>
        </ScrollView>
      </ContentWrapper>
      <Button onPress={goToPartTwo}>Continuar</Button>
    </ScreenContainer>
  );
}
