import React, { PropsWithChildren, useState } from 'react';
import styled from 'styled-components/native';
import { ColorConstant, SizeConstant } from '../../configs';
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
        <InputText
          placeholder={placeholder}
          placeholderTextColor={ColorConstant.gray4}
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
          color={isFocused ? ColorConstant.blue2 : ColorConstant.black1}
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

const InputText = styled.TextInput`
  flex: 1;
  font-family: ${FontFamily.regular};
  font-size: ${SizeConstant.mediumText + 'px'};
  color: ${ColorConstant.black1};
  height: ${UnitHandler.rem(
    SizeConstant.buttonPressableArea + SizeConstant.thinBorderWidth
  ) + 'px'};
`;

const IconContainer = styled.View`
  margin-right: ${SizeConstant.mediumMargin + 'px'};
  top: 1px;
`;

const InputContainer = styled.View<IInputProps>`
  flex-direction: row;
  align-items: center;
  padding: 0 ${SizeConstant.mediumMargin + 'px'};
  border-radius: ${SizeConstant.borderRadius + 'px'};
  border-width: ${SizeConstant.thickBorderWidth + 'px'};
  border-color: ${({ isFocused }) =>
    isFocused ? ColorConstant.blue2 : ColorConstant.gray3};
`;

const LabelContainer = styled.View`
  background-color: ${ColorConstant.white1};
  position: absolute;
  padding: 0 ${SizeConstant.mediumMargin + 'px'};
  left: ${SizeConstant.mediumMargin + 'px'};
  top: -${SizeConstant.inputLabelPositionAdjust + 'px'};
`;
