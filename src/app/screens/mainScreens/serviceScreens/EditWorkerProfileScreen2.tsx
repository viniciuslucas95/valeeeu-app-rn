import React, { useState } from 'react';
import { INavigate } from '../../INavigate';
import { ScreenContainer } from '../../../components/screenContainer';
import { SectionTitle } from '../../../components';
import { EmptyPictureSvg } from '../../../../assets/svgs';
import { Button, TextButton } from '../../../components/buttons';
import { ContentWrapper, PictureContainer } from './styles';
import { UnitHandler } from '../../../helpers';
import { TextInput } from '../../../components/textInputs';
import { ViewElementStyle } from '../../../dataTypes/types';

const sectionTitleBottomMargin = UnitHandler.vh(2);
const sectionTitleStyle: ViewElementStyle = {
  marginBottom: sectionTitleBottomMargin,
  marginTop: UnitHandler.vh(3),
};

interface IContact {
  plataform: string;
  contact: string;
}

export function EditWorkerProfileScreen2({ navigation }: INavigate) {
  const [description, setDescription] = useState('');
  const [contacts, setContacts] = useState<IContact[]>([]);

  function addPicture() {
    console.log('Add picture button pressed');
  }

  function addContact() {
    console.log('Add contact button pressed');
  }

  function createProfile() {
    console.log('Create profile button pressed');
  }

  return (
    <ScreenContainer contentPosition='top'>
      <ContentWrapper>
        <SectionTitle
          style={{ marginBottom: sectionTitleBottomMargin }}
          optionalText='(opcional)'
        >
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
      </ContentWrapper>
      <Button onPress={createProfile}>Criar perfil</Button>
    </ScreenContainer>
  );
}
