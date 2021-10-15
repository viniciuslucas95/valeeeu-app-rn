import React from 'react';
import { ColorConstant } from '../../../configs/constants';
import { IProps } from './IProps';
import { TextInput as TextInputStyle, Container } from './styles';

interface ITextInputProps extends IProps {
  multiline?: boolean;
  height?: string;
  numberOfLines?: number;
}

export function TextInput({
  placeholder,
  text,
  setText,
  width,
  style,
  multiline,
  height,
  numberOfLines,
}: ITextInputProps) {
  return (
    <Container style={style} width={width} height={height}>
      <TextInputStyle
        placeholder={placeholder}
        value={text}
        onChangeText={setText}
        placeholderTextColor={ColorConstant.gray}
        multiline={multiline}
        numberOfLines={numberOfLines ?? 1}
      />
    </Container>
  );
}
