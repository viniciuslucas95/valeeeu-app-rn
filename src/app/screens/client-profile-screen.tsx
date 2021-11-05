import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { authContext } from '../contexts';
import { TabScreen } from '../data-types/enums/screens';
import { INavigate } from '../data-types/interfaces';

export function ClientProfileScreen({ navigation }: INavigate) {
  const { deleteTokensFromStorageAsync } = useContext(authContext);

  async function leaveAccountAsync() {
    const deleteResult = await deleteTokensFromStorageAsync();
    if (!deleteResult) return;
    navigation.navigate(TabScreen.home);
  }

  return (
    <Container>
      <Text>Client Profile Screen</Text>
      <Button title='Sair' onPress={leaveAccountAsync} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const Button = styled.Button``;
