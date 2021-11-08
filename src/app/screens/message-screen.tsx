import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

export function MessageScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
