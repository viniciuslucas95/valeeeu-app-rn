import React from 'react';
import { TextInput as TextInputStyle } from './styles';

interface IProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}

export function DefaultTextInput({ text, setText, placeholder }: IProps) {
  return (
    <TextInputStyle
      placeholder={placeholder}
      value={text}
      onChangeText={setText}
    ></TextInputStyle>
  );
}
