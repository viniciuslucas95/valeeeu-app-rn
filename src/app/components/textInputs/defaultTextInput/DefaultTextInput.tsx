import React from 'react';
import { TextInput as TextInputStyle } from './styles';

interface IProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export function DefaultTextInput({ text, setText }: IProps) {
  return <TextInputStyle value={text} onChangeText={setText}></TextInputStyle>;
}
