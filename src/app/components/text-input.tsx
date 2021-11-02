import React, { PropsWithChildren, useState } from 'react';
import styled from 'styled-components/native';
import { ThemeConfig } from '../../configs';
import { SizeConstant } from '../../configs/constants';
import { FontFamily } from '../data-types/enums';
import { ViewElementStyle } from '../data-types/types';
import { UnitHandler } from '../helpers';
import { Text } from '../styled-components';

interface IProps {
  hasSecureText?: boolean;
  label?: string;
  placeholder?: string;
  icon?: JSX.Element;
  button?: JSX.Element;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  style?: ViewElementStyle;
  width?: number;
}

export function TextInput({
  button,
  icon,
  hasSecureText,
  placeholder,
  label,
  text,
  style,
  setText,
  width = SizeConstant.maxElementWidth,
}: PropsWithChildren<IProps>) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container width={width} style={style}>
      <InputContainer isFocused={isFocused}>
        {icon ? <IconContainer>{icon}</IconContainer> : null}
        <Input
          placeholder={placeholder}
          placeholderTextColor={ThemeConfig.placeholder}
          secureTextEntry={hasSecureText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={text ?? undefined}
          onChangeText={(e) => setText(e)}
        />
        {button}
      </InputContainer>
      <LabelContainer>
        <Text
          fontFamily={FontFamily.medium}
          color={isFocused ? ThemeConfig.active : ThemeConfig.text}
        >
          {label}
        </Text>
      </LabelContainer>
    </Container>
  );
}

interface IContainerProps {
  width: number;
}

interface IInputProps {
  isFocused?: boolean;
}

const Container = styled.View<IContainerProps>`
  width: ${({ width }) => width + 'px'};
`;

const Input = styled.TextInput`
  flex: 1;
  font-family: ${FontFamily.regular};
  font-size: ${SizeConstant.mediumText + 'px'};
  color: ${ThemeConfig.text};
`;

const IconContainer = styled.View`
  margin-right: ${SizeConstant.mediumMargin + 'px'};
  top: 1px;
`;

const InputContainer = styled.View<IInputProps>`
  flex-direction: row;
  align-items: center;
  padding: 0 ${SizeConstant.mediumMargin + 'px'};
  min-height: ${UnitHandler.rem(
    SizeConstant.buttonPressableArea + SizeConstant.thickBorderWidth
  ) + 'px'};
  border-radius: ${SizeConstant.borderRadius + 'px'};
  border-width: ${SizeConstant.thickBorderWidth + 'px'};
  border-color: ${({ isFocused }) =>
    isFocused ? ThemeConfig.active : ThemeConfig.inactive};
`;

const LabelContainer = styled.View`
  background-color: ${ThemeConfig.background};
  position: absolute;
  padding: 0 ${SizeConstant.mediumMargin + 'px'};
  left: ${SizeConstant.mediumMargin + 'px'};
  top: -${SizeConstant.inputLabelPositionAdjust + 'px'};
`;
