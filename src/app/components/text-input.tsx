import React, { PropsWithChildren, useState } from 'react';
import styled from 'styled-components/native';
import { ColorConfig, SizeConfig } from '../../configs';
import { FontFamily } from '../data-types/enums';
import { IStyleable } from '../data-types/interfaces';
import { UnitHandler } from '../helpers';
import { Text } from '../styled-components';
import { IHaveWidth } from './buttons/width';

interface IProps extends IStyleable, Partial<IHaveWidth> {
  hasSecureText?: boolean;
  label?: string;
  placeholder?: string;
  icon?: JSX.Element;
  button?: JSX.Element;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
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
  width = SizeConfig.maxElementWidth,
}: PropsWithChildren<IProps>) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container width={width} style={style}>
      <InputContainer isFocused={isFocused}>
        {icon ? <IconContainer>{icon}</IconContainer> : null}
        <InputText
          placeholder={placeholder}
          placeholderTextColor={ColorConfig.gray4}
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
          color={isFocused ? ColorConfig.blue2 : ColorConfig.black1}
        >
          {label}
        </Text>
      </LabelContainer>
    </Container>
  );
}

interface IInputProps {
  isFocused?: boolean;
}

const Container = styled.View<IHaveWidth>`
  justify-content: center;
  height: ${UnitHandler.rem(1) +
  SizeConfig.buttonPressableArea +
  SizeConfig.thickBorderWidth +
  'px'};
  width: ${({ width }) => width + 'px'};
`;

const InputText = styled.TextInput`
  flex: 1;
  font-family: ${FontFamily.regular};
  color: ${ColorConfig.black1};
  height: ${UnitHandler.rem(
    SizeConfig.buttonPressableArea + SizeConfig.thinBorderWidth
  ) + 'px'};
`;

const IconContainer = styled.View`
  margin-right: ${SizeConfig.mediumMargin + 'px'};
  top: 1px;
`;

const InputContainer = styled.View<IInputProps>`
  flex-direction: row;
  align-items: center;
  padding: 0 ${SizeConfig.mediumMargin + 'px'};
  border-radius: ${SizeConfig.borderRadius + 'px'};
  border-width: ${({ isFocused }) =>
    (isFocused ? SizeConfig.thickBorderWidth : SizeConfig.thinBorderWidth) +
    'px'};
  border-color: ${({ isFocused }) =>
    isFocused ? ColorConfig.blue2 : ColorConfig.gray3};
`;

const LabelContainer = styled.View`
  background-color: ${ColorConfig.white1};
  position: absolute;
  padding: 0 ${SizeConfig.mediumMargin + 'px'};
  left: ${SizeConfig.mediumMargin + 'px'};
  top: -${SizeConfig.inputLabelPositionAdjust + 'px'};
`;
