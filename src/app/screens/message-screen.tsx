import React from 'react';
import styled from 'styled-components/native';

export function MessageScreen() {
  return (
    <Container>
      <Text>Message Screen</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
