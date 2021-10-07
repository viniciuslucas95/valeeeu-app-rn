import React, { PropsWithChildren } from 'react';
import { ThemeConstant } from '../../../../configs/constants';
import { TouchableContainer } from '../../auxiliaries/touchableContainer';
import { Text } from './styles';

interface IProps {
  children: string;
  onPress(): void;
}

export function TextButton({ children, onPress }: PropsWithChildren<IProps>) {
  return (
    <TouchableContainer
      onPress={onPress}
      colors={{
        normalColor: ThemeConstant.purple,
        highlightColor: ThemeConstant.darkPurple,
      }}
    >
      <Text>{children}</Text>
    </TouchableContainer>
  );
}
