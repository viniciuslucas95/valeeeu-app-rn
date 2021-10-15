import React, { useState } from 'react';
import { INavigate } from '../../INavigate';
import { ScreenContainer } from '../../../components/screenContainer';
import { SectionTitle } from '../../../components';
import {
  EmptyPictureSvg,
  EmptyProfilePictureSvg,
} from '../../../../assets/svgs';
import { TextButton } from '../../../components/buttons';
import { TextInputContainer, PictureContainer, ScrollView } from './styles';
import { UnitHandler } from '../../../helpers';
import { TextInput } from '../../../components/textInputs';
import { ViewElementStyle } from '../../../dataTypes/types';

const sectionTitleBottomMargin = UnitHandler.vh(2);
const sectionTitleStyle: ViewElementStyle = {
  marginBottom: sectionTitleBottomMargin,
  marginTop: UnitHandler.vh(3),
};

export function EditWorkerProfileScreen({ navigation }: INavigate) {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [tag1, setTag1] = useState('');
  const [tag2, setTag2] = useState('');
  const [tag3, setTag3] = useState('');
  const [tag4, setTag4] = useState('');
  const [description, setDescription] = useState('');

  function addProfilePicture() {
    console.log('Add profile picture button pressed');
  }

  function addPicture() {
    console.log('Add picture button pressed');
  }

  function addContact() {
    console.log('Add contact button pressed');
  }

  return (
    <ScreenContainer contentPosition='top'>
      <ScrollView>
        <SectionTitle
          style={{ marginBottom: sectionTitleBottomMargin }}
          optionalText='(opcional)'
        >
          Foto de perfil
        </SectionTitle>
        <PictureContainer>
          <EmptyProfilePictureSvg style={{ marginBottom: UnitHandler.vh(1) }} />
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
        <TextInputContainer>
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
        <SectionTitle style={sectionTitleStyle} optionalText='(opcional)'>
          Descrição
        </SectionTitle>
        <TextInput
          text={description}
          setText={setDescription}
          placeholder='Descreva o serviço prestado'
          multiline={true}
          height={UnitHandler.vhPx(20)}
        />
        <SectionTitle style={sectionTitleStyle} optionalText='(opcional)'>
          Fotos
        </SectionTitle>
        <PictureContainer>
          <EmptyPictureSvg style={{ marginBottom: UnitHandler.vh(1) }} />
          <TextButton onPress={addPicture}>Adicionar</TextButton>
        </PictureContainer>
        <SectionTitle style={sectionTitleStyle} optionalText='(opcional)'>
          Contatos
        </SectionTitle>
        <TextButton
          style={{ marginBottom: UnitHandler.vh(2) }}
          onPress={addContact}
        >
          Adicionar
        </TextButton>
      </ScrollView>
    </ScreenContainer>
  );
}
