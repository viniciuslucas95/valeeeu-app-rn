import React, { useState } from 'react';
import { HidePasswordIcon, ShowPasswordIcon } from '../../../assets/svgs/icons';
import { ColorConstant } from '../../../configs/constants';
import { IProps } from './IProps';
import {
  TextInput as TextInputStyle,
  Container,
  TouchableIcon,
  TouchableContainer,
} from './styles';

interface IPasswordProps extends IProps {
  hasSecureText?: boolean;
}

export function PasswordInput({
  placeholder,
  text,
  setText,
  width,
  style,
}: IPasswordProps) {
  const [hasSecureText, setHasSecureText] = useState(true);

  return (
    <Container style={style} width={width}>
      <TextInputStyle
        placeholder={placeholder}
        value={text}
        onChangeText={setText}
        placeholderTextColor={ColorConstant.gray}
        secureTextEntry={hasSecureText}
      />
      <TouchableIcon onPress={() => setHasSecureText(!hasSecureText)}>
        <TouchableContainer>
          {hasSecureText ? <ShowPasswordIcon /> : <HidePasswordIcon />}
        </TouchableContainer>
      </TouchableIcon>
    </Container>
  );
}
