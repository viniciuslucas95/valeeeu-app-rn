import React from 'react';
import { TextButton } from '../../../../components/buttons/defaultButton';
import { WorkerProfileCreationStack } from '../../../../dataTypes/enums/stacks/mainStacks/workStacks';
import { ScreenContainer } from '../../../../styles/components';
import { INavigate } from '../../../interfaces';

export function ProfileCreationIntroScreen({ navigation }: INavigate) {
  function createWorkerProfile() {
    navigation.navigate(WorkerProfileCreationStack.test);
  }

  return (
    <ScreenContainer>
      <TextButton onPress={createWorkerProfile}>Criar Perfil</TextButton>
    </ScreenContainer>
  );
}
