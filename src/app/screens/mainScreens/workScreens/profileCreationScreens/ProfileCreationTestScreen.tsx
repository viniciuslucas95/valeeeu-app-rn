import React, { useState } from 'react';
import { TextButton } from '../../../../components/buttons/defaultButton';
import { DefaultTextInput } from '../../../../components/textInputs/defaultTextInput/DefaultTextInput';
import { ScreenContainer } from '../../../../styles/components';
import { INavigate } from '../../../interfaces';

export function ProfileCreationTestScreen({ navigation }: INavigate) {
  const [name, setName] = useState('');
  const [service, setService] = useState('');

  return (
    <ScreenContainer>
      <DefaultTextInput placeholder='Nome' text={name} setText={setName} />
      <DefaultTextInput
        placeholder='Serviço Prestado'
        text={service}
        setText={setService}
      />
    </ScreenContainer>
  );
}
