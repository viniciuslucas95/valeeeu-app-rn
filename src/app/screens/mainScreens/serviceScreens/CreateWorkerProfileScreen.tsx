import React from 'react';
import { INavigate } from '../../INavigate';
import { ServiceStack } from '../../../dataTypes/enums/stacks';
import { ScreenContainer } from '../../../components/screenContainer';
import { SectionTitle } from '../../../components';
import { Text } from '../../../styles/components';
import { ColorConstant, SizeConstant } from '../../../../configs/constants';
import { Font } from '../../../dataTypes/enums';
import { Button } from '../../../components/buttons';
import { UnitHandler } from '../../../helpers';

export function CreateWorkerProfileScreen({ navigation }: INavigate) {
  function createWorkerProfile() {
    navigation.navigate(ServiceStack.editWorkerProfile1);
  }

  return (
    <ScreenContainer>
      <SectionTitle style={{ marginBottom: UnitHandler.vh(2) }}>
        Ofereça seus serviços
      </SectionTitle>
      <Text color={ColorConstant.gray} size={SizeConstant.fontSize16}>
        No{' '}
        <Text font={Font.fugazOne} color={ColorConstant.purple}>
          valeeeu!
        </Text>{' '}
        você pode oferecer seus serviços de forma{' '}
        <Text font={Font.robotoMedium}>rápida</Text>,{' '}
        <Text font={Font.robotoMedium}>gratuita</Text> e melhor ainda,{' '}
        <Text font={Font.robotoMedium}>sem burocracias</Text>! Em{' '}
        <Text font={Font.robotoMedium}>menos de 5 minutos</Text> você estará com
        seu perfil criado.
      </Text>
      <Button
        style={{ marginTop: UnitHandler.vh(3) }}
        onPress={createWorkerProfile}
      >
        Criar Perfil
      </Button>
    </ScreenContainer>
  );
}
