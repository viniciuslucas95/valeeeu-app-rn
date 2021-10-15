import React from 'react';
import { ColorConstant } from '../../../configs/constants';
import { IProps } from './IProps';
import { TextInput as TextInputStyle, Container } from './styles';

export function TextInput({
  placeholder,
  text,
  setText,
  width,
  style,
}: IProps) {
  return (
    <Container style={style} width={width}>
      <TextInputStyle
        placeholder={placeholder}
        value={text}
        onChangeText={setText}
        placeholderTextColor={ColorConstant.gray}
      />
    </Container>
  );
}
