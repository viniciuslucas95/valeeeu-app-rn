import React from 'react';
import { Button } from '../../../components/buttons';
import { ScreenContainer } from '../../../styles/components';
import { INavigate } from '../../INavigate';
import { Text } from '../../../styles/components';
import { ColorConstant, SizeConstant } from '../../../../configs/constants';
import { Font } from '../../../dataTypes/enums';
import { Container } from './styles';
import { UnitHandler } from '../../../helpers';

export function WorkerProfileCreationIntroScreen({ navigation }: INavigate) {
  function createWorkerProfile() {
    console.log('WORKER PROFILE CREATION PRESSED');
  }

  return (
    <ScreenContainer>
      <Container>
        <Text
          style={{ marginBottom: UnitHandler.vh(3) }}
          size={SizeConstant.fontSize20}
          font={Font.robotoMedium}
        >
          Ofereça seus serviços
        </Text>
        <Text color={ColorConstant.gray} size={SizeConstant.fontSize16}>
          No{' '}
          <Text font={Font.fugazOne} color={ColorConstant.purple}>
            valeeeu!
          </Text>{' '}
          você pode oferecer seus serviços de forma{' '}
          <Text font={Font.robotoMedium}>rápida</Text>,{' '}
          <Text font={Font.robotoMedium}>gratuita</Text> e melhor ainda,{' '}
          <Text font={Font.robotoMedium}>sem burocracias</Text>! Em{' '}
          <Text font={Font.robotoMedium}>menos de 5 minutos</Text> você estará
          com seu perfil criado.
        </Text>
        <Button
          style={{ marginTop: UnitHandler.vh(3) }}
          onPress={createWorkerProfile}
        >
          Criar Perfil
        </Button>
      </Container>
    </ScreenContainer>
  );
}
