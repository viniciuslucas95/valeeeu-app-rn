import React from 'react';
import styled from 'styled-components/native';
import { TextButton } from './buttons';
import { Modal as ModalNative } from 'react-native';
import { ColorConfig } from '../../configs';

interface IProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ isVisible, setIsVisible }: IProps) {
  return (
    <>
      <ModalNative
        animationType='fade'
        onRequestClose={() => setIsVisible(false)}
        transparent={true}
        visible={isVisible}
      >
        <BackShadow />
      </ModalNative>
      <ModalNative
        animationType='slide'
        onRequestClose={() => setIsVisible(false)}
        transparent={true}
        visible={isVisible}
      >
        <HideArea onTouchStart={() => setIsVisible(false)} />
        <Content>
          <TextButton onPress={() => console.log('test')}>Test</TextButton>
          <TextButton onPress={() => console.log('test2')}>Test2</TextButton>
        </Content>
      </ModalNative>
    </>
  );
}

const BackShadow = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.25);
`;

const HideArea = styled.View`
  flex: 1;
  opacity: 0;
`;

const Content = styled.View`
  justify-content: flex-end;
  align-items: center;
  height: 200px;
  border-radius: 8px;
  background-color: ${ColorConfig.white1};
`;
